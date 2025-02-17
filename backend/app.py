from flask import Flask, request, jsonify
from flask_cors import CORS
import json
from TransactionAggregator import TransactionAggregator

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

@app.route("/transactions", methods=["POST"])
def handle_transactions():
    
    # --> Parse JSON request
    request_data = request.get_json()
    group_by = request_data.get("group_by", "customer_id")
    filters = request_data.get("filters", {})

    # --> Load transaction data from file
    try:
        with open("data.json") as file:
            transactions = json.load(file)
    except FileNotFoundError:
        return jsonify({"error": "Transaction data file not found"}), 500

    # --> Process transactions using TransactionAggregator
    aggregator = TransactionAggregator(transactions)
    filtered_transactions = aggregator.filter_transactions(filters)
    aggregated_results = aggregator.aggregate_transactions(group_by, filtered_transactions)

    return jsonify(aggregated_results)