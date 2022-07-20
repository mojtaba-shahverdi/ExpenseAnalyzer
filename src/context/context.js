import React from 'react'
import contextReducer from './contextReducer'
const initialState = []

export const ExpenseAnalyzerContext = React.createContext(initialState)

export const Provider = ({ children }) => {
    const [transactions, dispatch] = React.useReducer(contextReducer, initialState)

    const deleteTransaction = (id) => dispatch({ type: 'DELETE_TRANSACTION', payload: id })
    const addTransaction = (transaction) => dispatch({ type: 'ADD_TRANSACTION', payload: transaction })

    return (
        <ExpenseAnalyzerContext.Provider value={{
            deleteTransaction, 
            addTransaction,
            transactions
        }}>
            {children}
        </ExpenseAnalyzerContext.Provider>
    )
}