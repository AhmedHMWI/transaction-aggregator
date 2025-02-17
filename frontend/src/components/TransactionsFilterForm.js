import React from "react";

const TransactionsFilterForm = ({
groupBy,
setGroupBy,
customerId,
setCustomerId,
itemId,
setItemId,
startDate,
setStartDate,
endDate,
setEndDate,
handleSearch,
}) => {
return (
    <div className="card mb-4">
    <div className="card-body">
        <form
        onSubmit={(event) => {
            event.preventDefault();
            handleSearch();
        }}
        >
        <div className="row g-3">
            {/* --> Group By Selection */}
            <div className="col-md-4">
            <label className="form-label">Group by:</label>
            <select
                className="form-select"
                value={groupBy}
                onChange={(e) => setGroupBy(e.target.value)}
            >
                <option value="customer_id">Customer</option>
                <option value="date">Date</option>
                <option value="item_id">Item</option>
            </select>
            </div>

            {/* --> Customer ID Input */}
            <div className="col-md-4">
            <label className="form-label">Customer ID:</label>
            <input
                type="text"
                className="form-control"
                value={customerId}
                onChange={(e) => setCustomerId(e.target.value)}
                placeholder="Enter Customer ID"
            />
            </div>

            {/* --> Item ID Input */}
            <div className="col-md-4">
            <label className="form-label">Item ID:</label>
            <input
                type="text"
                className="form-control"
                value={itemId}
                onChange={(e) => setItemId(e.target.value)}
                placeholder="Enter Item ID"
            />
            </div>

            {/* --> Date Range Inputs */}
            <div className="col-md-4">
            <label className="form-label">Start Date:</label>
            <input
                type="date"
                className="form-control"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
            />
            </div>
            <div className="col-md-4">
            <label className="form-label">End Date:</label>
            <input
                type="date"
                className="form-control"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
            />
            </div>

            {/* --> Search Button */}
            <div className="col-md-4 d-flex align-items-end">
            <button className="btn btn-primary w-100" type="submit">
                Search
            </button>
            </div>
        </div>
        </form>
    </div>
    </div>
);
};

export default TransactionsFilterForm;
