import React, { useState } from "react";

const TransactionsTable = ({ data, groupBy}) => {
const [viewType, setViewType] = useState("table");

const formatNumber = (number) => new Intl.NumberFormat().format(number);

return (
    <div className="mt-4">
    <h2 className="mb-3">Transactions Summary</h2>

    {/* --> View Toggle Buttons */}
    <div className="mb-3">
        <button
        className="btn btn-outline-primary me-2"
        onClick={() => setViewType("table")}
        >
        Table View
        </button>
        <button
        className="btn btn-outline-secondary"
        onClick={() => setViewType("list")}
        >
        List View
        </button>
    </div>

    {/* --> No Data Message */}
    {data.length === 0 ? (
        <div className="alert alert-warning text-center">
        No data available for the selected filters.
        </div>
    ) : (
        <>
        {/* --> Table View */}
        {viewType === "table" && (
            <table className="table table-striped">
            <thead>
                <tr>
                <th>Group</th>
                {groupBy === "item_id" && <th>Item Name</th>}
                {groupBy !== "item_id" && <th>Total Amount</th>}
                {groupBy !== "item_id" && <th>Order Count</th>}
                {groupBy === "item_id" && <th>Total Quantity</th>}
                </tr>
            </thead>
            <tbody>
                {data.map(({ group, total_amount, order_count, total_quantity, name }, index) => (
                <tr key={index}>
                    <td>{group}</td>
                    {groupBy === "item_id" && <td>{name || "-"}</td>}
                    {groupBy !== "item_id" && <td>{total_amount ? formatNumber(total_amount) : "-"}</td>}
                    {groupBy !== "item_id" && <td>{order_count ? formatNumber(order_count) : "-"}</td>}
                    {groupBy === "item_id" && <td>{total_quantity ? formatNumber(total_quantity) : "-"}</td>}
                </tr>
                ))}
            </tbody>
            </table>
        )}

        {/* --> List View */}
        {viewType === "list" && (
            <div className="mt-3">
            <h3>Summary List</h3>
            <ul className="list-group">
                {data.map(({ group, total_amount, order_count, total_quantity, name }, index) => (
                <li key={index} className="list-group-item">
                    {groupBy === "customer_id" && (
                    <>Customer {group}: {total_amount ? formatNumber(total_amount) : "-"} USD ({order_count ? formatNumber(order_count) : "-"} orders)</>
                    )}
                    {groupBy === "item_id" && (
                    <>Item {group} ({name}): {total_quantity ? formatNumber(total_quantity) : "-"} sold</>
                    )}
                    {groupBy === "date" && (
                    <>Date {group}: {total_amount ? formatNumber(total_amount) : "-"} USD</>
                    )}
                </li>
                ))}
            </ul>
            </div>
        )}
        </>
    )}
    </div>
);
};

export default TransactionsTable;
