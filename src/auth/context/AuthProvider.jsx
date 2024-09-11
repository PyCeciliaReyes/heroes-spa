import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authRedudcer";


const initialState = {
    logged: false,
}

export const AuthProvider = ({children}) => {
    
    const [authSate, dispatch] = useReducer(authReducer, initialState);

    return(
        <AuthContext.Provider value={{ }}>
            {children}
        </AuthContext.Provider>
    );
};