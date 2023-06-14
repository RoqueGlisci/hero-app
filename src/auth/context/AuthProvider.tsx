import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"
import { types } from "../types/types"


// const initialState = {
//     logged: false
// }

const init = () => {
    const user = localStorage.getItem('user');
    const parsedUser = user ? JSON.parse(user) : null;
    
    return {
        logged: !!user,
        user: parsedUser
    }
}

interface Props {
    children: JSX.Element | JSX.Element[]// es para que pueda recibir 1 o mas elementos
}

export const AuthProvider = ({children}: Props) => {

   const [authState, dispatch] = useReducer(authReducer, {}, init)


    const login = (name = ''): void => {
        const user = {id: 'asd', name}
        const action = {
            type: types.login,
            payload: user
        }
        localStorage.setItem('user', JSON.stringify(user))
        dispatch(action)

    }

    const logout = () => {
        localStorage.removeItem('user');
        const action = { type: types.logout }
        dispatch(action);
    }
    
  return (
    <AuthContext.Provider value={{
        ...authState,
        //methods
        login,
        logout
    }}>
        {children}

    </AuthContext.Provider>
  )
}
