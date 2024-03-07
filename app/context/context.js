'use client';
import { useReducer, createContext } from "react";
import { GlobalReducer, INITIAL_STATE} from "@/reducers/reducers";

// Create the context/provider
export const globalContext = createContext();

export default globalContext;

export const GlobalStateProvider = ({ children }) => {

    // Create the reducer
    const [state, dispatch] = useReducer(GlobalReducer, INITIAL_STATE);

    const values = {
        state,
        dispatch
      };


    return <globalContext.Provider value={values}>{children}</globalContext.Provider>;
};