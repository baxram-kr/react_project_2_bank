import React ,{createContext,useReducer} from "react";
import AppReducer from "./AppReducer";

// Initial state

const initialState = {
    transactions:[]
}

// create context
export const GlobleContext = createContext(initialState);

// provider component
export const GlobleProvider = ({children})=>{
    const [state,dispatch] = useReducer(AppReducer, initialState);

//Action
    function deleteTransaction(id){
        dispatch({
            type:'DELETE_TRANSACTION',
            payload: id
        })
    }
    function addTransaction(transaction){
        dispatch({
            type:'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return(<GlobleContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobleContext.Provider>)
}