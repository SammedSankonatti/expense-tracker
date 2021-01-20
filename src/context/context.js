import React, { useReducer, createContext } from 'react';
import contextReducer from './contextReducer';

const initalState= JSON.parse(localStorage.getItem('transactions')) ||[{"amount":2300,"category":"Entertainment","type":"Expense","date":"2021-01-21","id":"02bc4c29-e154-4d92-9146-e4853b708239"},{"amount":1000,"category":"Food","type":"Expense","date":"2021-01-21","id":"e45a3f4b-f010-4df3-a79e-f4feb53f4cfe"},{"amount":3000,"category":"House","type":"Expense","date":"2021-01-21","id":"924341db-325c-4643-90d7-248856ada95e"},{"amount":2000,"category":"Bills","type":"Expense","date":"2021-01-21","id":"af34b91a-22e7-4a26-bee6-6d17eea18be2"},{"amount":2000,"category":"Salary","type":"Income","date":"2021-01-21","id":"dd3dbb36-ee8f-4491-a61e-fb02f9a72111"},{"amount":1000,"category":"Deposits","type":"Income","date":"2021-01-21","id":"5c5e7542-15f1-469c-9cc0-c382636db08e"},{"amount":1000,"category":"Extra income","type":"Income","date":"2021-01-21","id":"9514dcfe-cf99-4f3f-8e06-9705ae700f09"},{"amount":1000,"category":"Investments","type":"Income","date":"2021-01-21","id":"c9ea901c-0580-43af-b22c-5a5e1664758f"},{"amount":1000,"category":"Business","type":"Income","date":"2021-01-21","id":"7f68a703-57be-4f75-9ee2-28aa7db49fa4"}] ;

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