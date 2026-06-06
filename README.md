# Personal Expense Tracker Backend

A REST API for managing personal expenses using Node.js, Express, and MongoDB.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the App](#running-the-app)
- [API Documentation](#api-documentation)
  - [Create Expense](#create-expense)
  - [Get All Expenses](#get-all-expenses)
  - [Update Expense](#update-expense)
  - [Delete Expense](#delete-expense)
  - [Filter Expenses by Category](#filter-expenses-by-category)
- [Expense Model](#expense-model)
- [Postman Collection](#postman-collection)
- [License](#license)

## Features

- Add a new expense
- Retrieve all expenses
- Update an existing expense
- Delete an expense
- Filter expenses by category

## Technologies

- Node.js
- Express
- MongoDB
- Mongoose
- dotenv
- cors

## Installation

Install dependencies:

```bash
npm install
```

## Environment Variables

Create a `.env` file in the project root with the following values:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/expenseTracker
```

If you use MongoDB Atlas, set `MONGO_URI` to your Atlas connection string.

## Running the App

Start the application in development mode:

```bash
npm run dev
```

The server will run on `http://localhost:5000` by default.

## API Documentation

### Create Expense

- Method: `POST`
- Endpoint: `/api/expenses`
- Description: Add a new expense to the database.
- Request body:

```json
{
  "amount": 500,
  "category": "Food",
  "date": "2026-06-06",
  "description": "Lunch"
}
```

- Success response:

```json
{
  "message": "Expense added successfully",
  "expense": {
    "_id": "...",
    "amount": 500,
    "category": "Food",
    "date": "2026-06-06T00:00:00.000Z",
    "description": "Lunch",
    "createdAt": "...",
    "updatedAt": "..."
  }
}
```

### Get All Expenses

- Method: `GET`
- Endpoint: `/api/expenses`
- Description: Retrieve all expenses sorted by date descending.
- Success response example:

```json
[
  {
    "_id": "...",
    "amount": 500,
    "category": "Food",
    "date": "2026-06-06T00:00:00.000Z",
    "description": "Lunch"
  }
]
```

### Update Expense

- Method: `PUT`
- Endpoint: `/api/expenses/:id`
- Description: Update fields for a specific expense by ID.
- Request body example:

```json
{
  "amount": 700
}
```

- Success response:

```json
{
  "message": "Expense updated",
  "expense": {
    "_id": "...",
    "amount": 700,
    "category": "Food",
    "date": "2026-06-06T00:00:00.000Z",
    "description": "Lunch"
  }
}
```

### Delete Expense

- Method: `DELETE`
- Endpoint: `/api/expenses/:id`
- Description: Delete an expense by ID.
- Success response:

```json
{
  "message": "Expense deleted"
}
```

### Filter Expenses by Category

- Method: `GET`
- Endpoint: `/api/expenses/category/:category`
- Description: Retrieve expenses for the given category.
- Example:

```http
GET /api/expenses/category/Food
```

- Success response example:

```json
[
  {
    "_id": "...",
    "amount": 500,
    "category": "Food",
    "date": "2026-06-06T00:00:00.000Z",
    "description": "Lunch"
  }
]
```

## Expense Model

| Field       | Type   | Required | Notes                      |
| ----------- | ------ | -------- | -------------------------- |
| amount      | Number | Yes      | Must be positive           |
| category    | String | Yes      | Expense category           |
| date        | Date   | Yes      | Date of the expense        |
| description | String | Yes      | Expense description        |

## Postman Collection

A Postman collection is available at `postman_collection.json` in the project root. Import it into Postman and use the `baseUrl` variable set to `http://localhost:5000`.

## License

This project is licensed under MIT.
