import React from 'react'
import contextReducer from './contextReducer'

const initialState = JSON.parse(localStorage.getItem('transactions')) || [{ "amount": 1000, "category": "Clothes", "type": "Expense", "date": "2022-07-21", "id": "de3c95fe-ab45-44b9-9bd6-621fc9944fd2" }, { "amount": 800, "category": "Shopping", "type": "Expense", "date": "2022-07-28", "id": "5fca4bc7-d66b-4be5-993e-ef5fa9ec4658" }, { "amount": 500, "category": "Travel", "type": "Expense", "date": "2023-01-01", "id": "8b82560d-2c93-465c-a2d7-a1b0bc1f9087" }, { "amount": 1000, "category": "House", "type": "Expense", "date": "2022-07-26", "id": "ad7a2c77-1e46-4b86-b97c-baa2b42d0fff" }, { "amount": 1500, "category": "Extra income", "type": "Income", "date": "2022-08-21", "id": "41fd1ab3-3edb-434a-9bbb-8dc9fab9370a" }, { "amount": 2000, "category": "Business", "type": "Income", "date": "2022-09-21", "id": "380bdd69-2ccb-467f-bd1a-104c9ff6ab26" }, { "amount": 1000, "category": "Rental income", "type": "Income", "date": "2022-08-21", "id": "04ffaa2e-56ba-4ae7-8b9a-89cc3962eb3b" }, { "amount": 200, "category": "Salary", "type": "Income", "date": "2022-07-22", "id": "b98b91dd-224c-4563-9254-8efe0e693de0" }]

export const ExpenseAnalyzerContext = React.createContext(initialState)

export const Provider = ({ children }) => {
    const [transactions, dispatch] = React.useReducer(contextReducer, initialState)

    const deleteTransaction = (id) => dispatch({ type: 'DELETE_TRANSACTION', payload: id })
    const addTransaction = (transaction) => dispatch({ type: 'ADD_TRANSACTION', payload: transaction })

    const balance = transactions.reduce((acc, currVal) => (currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount), 0)

    return (
        <ExpenseAnalyzerContext.Provider value={{
            deleteTransaction,
            addTransaction,
            transactions,
            balance
        }}>
            {children}
        </ExpenseAnalyzerContext.Provider>
    )
}