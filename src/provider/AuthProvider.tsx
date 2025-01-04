import { createContext, useContext, useState } from "react";

interface IAuthContext {
    isAuthenticated: boolean;
    login: (username: string, password: string) => void;
    logout: () => void;
}

const AuthContext = createContext<IAuthContext|undefined>(undefined);

interface IAuthProviderProps {
    children: React.ReactNode;
}

export const AuthProvider : React.FC<IAuthProviderProps> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState("");

    const login = (username: string, password: string) => {
        setIsAuthenticated(true);
        // TO DO: implement login logic
    }

    const logout = () => {
        setIsAuthenticated(false);
    }

    return <AuthContext.Provider value={{isAuthenticated, login, logout}}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}