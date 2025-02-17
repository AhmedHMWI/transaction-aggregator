# 🛒 Transaction Aggregation System

A **Flask + React application** that processes **transaction records**, applies **filters**, and performs **dynamic aggregation**.

## 🚀 Features
✅ **Filter Transactions** by Customer, Item, or Date  
✅ **Group Data** by Customer ID, Item ID, or Date  
✅ **Sort Results** by Total Revenue or Quantity Sold  
✅ **Dynamic React UI** with Live Search  
✅ **Fast & Scalable Backend** with Flask  

---

## 📦 Setup & Installation

### 1️⃣ Backend (Flask)
#### Install & Run Flask API
```sh
# Navigate to the backend directory
cd backend/

# Create & activate a virtual environment
python3 -m venv venv
source venv/bin/activate  # macOS/Linux
venv\Scripts\activate     # Windows

# Install dependencies
pip install -r requirements.txt

# Run Flask server
flask run
```
✅ **API will be available at:** `http://127.0.0.1:5000`

---

### 2️⃣ Frontend (React)
#### Install & Run React App
```sh
# Navigate to the frontend directory
cd frontend/

# Install dependencies
npm install

# Start the React app
npm start
```
✅ **Frontend will be available at:** `http://localhost:3000`

---

## 📊 API Endpoints
### 🔹 `POST /transactions`
Processes transactions and applies **filters & aggregation**.

#### 📥 Request Body (JSON)
```json
{
  "group_by": "customer_id",
  "filters": {
    "customer_id": 2001,
    "item_id": 3001,
    "date_range": {
      "start": "2024-02-10",
      "end": "2024-02-12"
    }
  }
}
```

#### 📤 Response Example
```json
[
  {
    "group": 2001,
    "total_amount": 2050.0,
    "order_count": 2
  }
]
```
✅ **Supports Filtering By:** `customer_id`, `item_id`, and `date_range`.  
✅ **Supports Aggregation By:** `customer_id`, `item_id`, or `date`.

---

## 🛠 Technologies Used
- **Backend:** Flask (Python)
- **Frontend:** React (JavaScript)
- **Database:** JSON file-based transactions
- **UI Framework:** Bootstrap

---

## 👨‍💻 Contributors
- **Developer:** Ahmed Hamwi

---

## 📜 License
This project is **MIT licensed**. Feel free to modify and use it. 🚀"# transaction-aggregator" 
