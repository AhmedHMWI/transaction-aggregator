import React, { useEffect, useState } from "react";
import TransactionsTable from "./components/TransactionsTable";
import TransactionsFilterForm from "./components/TransactionsFilterForm";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);
  const [groupBy, setGroupBy] = useState("customer_id");
  const [customerId, setCustomerId] = useState("");
  const [itemId, setItemId] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchData = () => {
    setLoading(true);
    setError("");

    if (!customerId && !itemId && (!startDate || !endDate)) {
      setError("Please enter at least one filter.");
      setLoading(false);
      return;
    }

    const formatDate = (dateString) => {
      if (!dateString) return null;
      const date = new Date(dateString);
      return date.toISOString().split("T")[0]; // --> Converts any date format to YYYY-MM-DD
    };

    const filters = {};
    if (customerId !== "") filters.customer_id = parseInt(customerId, 10);
    if (itemId !== "") filters.item_id = parseInt(itemId, 10);
    if (startDate && endDate) {
      filters.date_range = { start: formatDate(startDate), end: formatDate(endDate) };
    }

    console.log("Filters being sent to API:", JSON.stringify(filters, null, 2));

    fetch("http://127.0.0.1:5000/transactions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ group_by: groupBy, filters: filters }),
    })
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch transactions");
        return response.json();
      })
      .then((fetchedData) => {
        console.log("Data received from API:", fetchedData);
        setData(fetchedData);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, [groupBy]);

  return (
    <div className="container mt-4">
      <h1 className="mb-5 text-center text-danger">
        Welcome to UR-Store Assessment
      </h1>

      {/* --> Import TransactionsFilterForm Component */}
      <TransactionsFilterForm
        groupBy={groupBy}
        setGroupBy={setGroupBy}
        customerId={customerId}
        setCustomerId={setCustomerId}
        itemId={itemId}
        setItemId={setItemId}
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        handleSearch={fetchData}
      />

      {loading && (
        <div className="text-center my-4">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      {error && (
        <div className="alert alert-danger text-center" role="alert">
          {error}
        </div>
      )}

      {/* --> Display Transactions Table */}
      <TransactionsTable data={data} groupBy={groupBy} setGroupBy={setGroupBy} />
    </div>
  );
};

export default App;
