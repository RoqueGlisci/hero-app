import { types } from '../types/types';

interface AuthState {
    logged?: boolean,
    user?: { id: string, name: string}
}

type ActionType = {
    type: string, 
    payload?: {
        id: string,
        name: string
    }
}
    
export const authReducer = (state: AuthState , action: ActionType) => {
   
  switch(action.type){
    case types.login:
        // console.log(types.login);
        // console.log(action.payload);
        return {
            ...state,
            logged: true,
            user: action.payload
  
        }
    
    case types.logout:
        return {
            logged: false
        }
    
    default:
        return state
  }
}
