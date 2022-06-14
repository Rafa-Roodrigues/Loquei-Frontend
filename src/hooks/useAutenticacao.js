import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthenticationContext = createContext();

export function AuthenticationProvider({ children }) {
    const [authentication, setAuthentication] = useState(() => {
        const authenticationExists = JSON.parse(localStorage.getItem('@AUTHENTICATION'));

        if(!authenticationExists) {
            return null;
        }

        return authenticationExists;
    });

    function createAuthentication(data) {
        delete data.cpf;

        setAuthentication(data);
        localStorage.setItem('@AUTHENTICATION', JSON.stringify(data));
    }

    function destroyAuthentication() {
        setAuthentication(null);
        localStorage.removeItem('@AUTHENTICATION');
    }

    return (
        <AuthenticationContext.Provider value={{authentication, createAuthentication, destroyAuthentication}}>
            {children}
        </AuthenticationContext.Provider>
    )
}

export function useAuthentication() {
    return useContext(AuthenticationContext);
}