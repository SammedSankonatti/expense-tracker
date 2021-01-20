import React, { useReducer, createContext } from 'react';
import contextReducer from './contextReducer';

const initalState= JSON.parse(localStorage.getItem('transactions')) || [{"amount":3400,"category":"Clothes","type":"Expense","date":"2021-01-20","id":"483ac653-d1c6-44e9-96c7-7dc9d226790c"}];

export const ExpenseTrackerContext = createContext(initalState);

export const Provider = ({children})=>{
    const [transactions, dispatch] = useReducer(contextReducer, initalState);

    //action creators

    const deleteTransaction =(id)=>{
        dispatch({type:'DELETE_TRANSACTION', payload: id});
    }

    const addTransaction =(transaction)=>{
        dispatch({type:'ADD_TRANSACTION', payload: transaction});
    }

    console.log(transactions);

    return (
        <ExpenseTrackerContext.Provider value={{deleteTransaction, addTransaction, transactions}} >
            {children}
        </ExpenseTrackerContext.Provider>
    )
}