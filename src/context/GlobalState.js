import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'

//initial State
const initialState = {
    transactions:[ 
]
}

//Create Context

export const GlobalContext = createContext(initialState);

//Provider Component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] =useReducer(AppReducer, initialState);

    //Action
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transactions){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transactions
        });
    }

    return (<GlobalContext.Provider value={{transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
}