import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authRedudcer";
import { types } from "../types/types";


const initialState = {
    logged: false,
}

export const AuthProvider = ({children}) => {
    
    const [authSate, dispatch] = useReducer(authReducer, initialState);

    const login = (name = '') => {
        const action = {
            type: types.login,
            payload: {
                id: 'ABC',
                name: name
            }
        }
        dispatch(action);
    };

    return(
        <AuthContext.Provider value={{ 
            ...authSate,
            login:login 
        }}>
            {children}
        </AuthContext.Provider>
    );
};