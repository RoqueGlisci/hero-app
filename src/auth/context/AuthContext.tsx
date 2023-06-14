import {createContext} from 'react';

interface User {
    user?: {
        id: string
        name: string
    },
    login: (name?: string) => void,
    logout: () => void
}

export const AuthContext = createContext<User>({} as User) 