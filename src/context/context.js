import React, { useReducer, createContext } from 'react';
import contextReducer from './contextReducer';
const initalState= [ ];


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