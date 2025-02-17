from datetime import datetime

class TransactionAggregator:

    def __init__(self, transactions):
        # --> Initializes the aggregator with a list of transactions.
        self.transactions = transactions

    def filter_transactions(self, filters):
        # --> Filters transactions based on customer ID, item ID, and date range.
        filtered_transactions = self.transactions

        # --> Apply customer ID filter
        if "customer_id" in filters:
            filtered_transactions = [
                transaction for transaction in filtered_transactions
                if transaction.get("customer_id") == filters["customer_id"]
            ]

        # --> Apply item ID filter (removes unrelated items from transactions)
        if "item_id" in filters:
            item_id_filter = filters["item_id"]
            filtered_transactions = [
                {
                    **transaction,
                    "items": [
                        item for item in transaction.get("items", []) if item.get("item_id") == item_id_filter
                    ]
                }
                for transaction in filtered_transactions
                if any(item.get("item_id") == item_id_filter for item in transaction.get("items", []))
            ]

        # --> Apply date range filter
        if "date_range" in filters:
            start_date = datetime.strptime(filters["date_range"]["start"], "%Y-%m-%d").date()
            end_date = datetime.strptime(filters["date_range"]["end"], "%Y-%m-%d").date()

            filtered_transactions = [
                transaction for transaction in filtered_transactions
                if start_date <= datetime.strptime(transaction.get("date"), "%Y-%m-%d").date() <= end_date
            ]

        return filtered_transactions

    def aggregate_transactions(self, group_by, filtered_transactions):
        # --> Aggregates transactions based on the specified grouping (customer, item, or date).
        grouped_results = {}

        if group_by == "item_id":
            self._aggregate_by_item(filtered_transactions, grouped_results)
        else:
            self._aggregate_by_general_key(filtered_transactions, group_by, grouped_results)

        # --> Convert to list and sort results
        sorted_results = [{"group": key, **values} for key, values in grouped_results.items()]
        sort_key = "total_quantity" if group_by == "item_id" else "total_amount"
        sorted_results.sort(key=lambda x: x.get(sort_key, 0), reverse=True)

        return sorted_results

    def _aggregate_by_item(self, transactions, grouped_results):
        # --> Aggregates transactions based on item ID (total quantity sold) and includes item name.
        item_names = {}  # --> Dictionary to store item_id -> item_name mapping

        for transaction in transactions:
            for item in transaction.get("items", []):
                item_id = item.get("item_id")
                item_name = item.get("name", "Unknown")  # Default to "Unknown" if name is missing

                if item_id not in grouped_results:
                    grouped_results[item_id] = {"total_quantity": 0}
                    item_names[item_id] = item_name  # Store item name

                grouped_results[item_id]["total_quantity"] += item.get("quantity", 0)

        # --> Add item names to the grouped results
        for item_id, name in item_names.items():
            grouped_results[item_id]["name"] = name

    def _aggregate_by_general_key(self, transactions, group_by, grouped_results):
        # --> Aggregates transactions based on customer ID or date (total amount and order count).
        for transaction in transactions:
            group_key = transaction.get(group_by, "unknown")
            if group_key not in grouped_results:
                grouped_results[group_key] = {"total_amount": 0, "order_count": 0}

            grouped_results[group_key]["total_amount"] += transaction.get("total_amount", 0)
            grouped_results[group_key]["order_count"] += 1
