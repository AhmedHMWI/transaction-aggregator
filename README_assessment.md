# 📝 JSON Data Aggregation & Filtering  

## 🎯 Objective  
Your task is to process a list of JSON objects (transaction records) in the backend app, and perform aggregate operations based on a specific field (e.g., `customer_id`, `date_range`, `item_id`). Additionally, you will implement **filtering** so that users can specify which subset of the data they want to analyze.  

---

This task will test your ability to:
- Parse and manipulate JSON data
- Perform aggregations using **Python classes & data structures** *(Bonus)*
- Use **React** components to render data and send requests *(Big Bonus)*
- Implement **filtering** based on user input
- Write efficient and readable Python code

---

## 📌 Task Instructions  

### ✅ Implement the Following Aggregations  

1. **Total Revenue per Customer**  
   - Sum of `total_amount` for each `customer_id`.  

2. **Total Sales per Item**  
   - Sum of all `quantity` sold for each `item_id`.  

3. **Revenue Over a Date Range**  
   - Sum of `total_amount` for transactions within a specified **date range**.  
#### 📊 Aggregation Parameter

The field to aggregate by will be specified in the `group_by` parameter. Example:

```json
{
    "group_by": "customer_id"
}
```

Your implementation should dynamically handle the aggregation based on the provided `group_by` field.

---

### 🎛 Implement Filtering Options  

The user should be able to **filter** the dataset based on:  
- **Customer ID** (`customer_id`)  
- **Item ID** (`item_id`)  
- **Date Range** (e.g., from `"2024-02-01"` to `"2024-02-10"`)  

### 📥 Filtering Input  

Filters will be provided in JSON format as a `**kwargs` dictionary. Example:

```json
{
    "customer_id": "C123",
    "item_id": "I456",
    "date_range": {
        "start": "2024-02-01",
        "end": "2024-02-10"
    }
}
```

Your implementation should handle these filters appropriately to return the desired subset of data.

---

### 💡 Expected Functionality  

1. **Allow users to choose a filter (or no filter at all).**  
2. **Perform aggregation on the filtered dataset.**  
3. **Return a JSON response with the aggregated results.**  

---

## 🔥 Bonus Challenge (Optional 🚀)  

1. **Use Object-Oriented Programming (OOP) in Python**  
    - Create a **class-based** approach to handle filtering and aggregation.  
    - Example:  
      ```python
      class TransactionAggregator:
            def __init__(self, transactions):
                 self.transactions = transactions
            
            def filter_by_customer(self, customer_id):
                 # Return filtered transactions for a given customer_id
                 pass
            
            def aggregate_total_revenue(self):
                 # Calculate revenue per customer
                 pass
      ```  

2. **Sort results by highest revenue or sales.**  

3. **Implement a React Component**  
    - Create a React component that fetches data from the API and displays the aggregated results.
    - The component should support filtering and aggregation based on user input.

    #### Task: 
    - Display API Results in an Unordered List (Easy Level)

    #### Objective:
    - Fetch data from the provided API in the React project and display the results in an unordered list (`<ul>`).

    #### Steps to Follow:
    - Fetch Data from API
    - Use fetch or axios to call the provided API.
    - Render Data in Unordered List
    - Map through the fetched data and display results in a `<ul>`.
    - Ensure each item has a unique key.
    
    #### Enhancements (Optional, but Huge Bonus)
    - Apply basic styling for better presentation.
    
---

## 📝 Sample JSON Data  

Please use the mock transactions as test data from the `backend/data.json` file for your implementation.

---

## 📦 Deliverables  

- A **Python script** implementing the aggregations and filtering.  
- A **README** explaining your approach.  
- **Bonus:** If using **OOP**, document your class methods.  
- **Bonus:** For using **React.js** to display and allow the user to select aggregate and filter fields.  

---

## 🔥 Extra Tips  

✅ Use **dictionaries** for efficient lookups.  
✅ Use **date parsing** (`datetime.strptime`) to handle date filtering.  
✅ Write **clean, modular functions** for better code readability.  

---
## 🛠 Setting Up the Development Environment

### 📦 Create a Virtual Environment

1. **Navigate to your project directory**:
    ```sh
    cd backend/
    ```

2. **Create a virtual environment**:
    ```sh
    python3 -m venv venv
    ```

3. **Activate the virtual environment**:
    - On macOS/Linux:
        ```sh
        source venv/bin/activate
        ```
    - On Windows:
        ```sh
        .\venv\Scripts\activate
        ```

### 📥 Install Dependencies

1. **Ensure you have `pip` updated**:
    ```sh
    pip install --upgrade pip
    ```

2. **Install required packages**:
    ```sh
    pip install -r requirements.txt
    ```

### 🚀 Running the Flask App

1. **Set the Flask app environment variable**:
    ```sh
    export FLASK_APP=app.py
    ```

2. **Run the Flask app**:
    ```sh
    flask run
    ```

3. **Access the app**:
    Open your web browser and go to `http://127.0.0.1:5000`.

---

### 🚀 Running the React App

1. **Navigate to your project directory**:
    ```sh
    cd frontend/
    ```

2. **Install the dependencies**:
    ```sh
    npm install
    ```

3. **Start the React app**:
    ```sh
    npm start
    ```

4. **Access the app**:
    Open your web browser and go to `http://localhost:3000`.

---
**Good luck! 🚀**