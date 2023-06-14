
import { useContext } from 'react';
import { AuthContext } from '../auth';
import { Navigate, useLocation } from 'react-router-dom';

// interface Props {
//     children: JSX.Element | JSX.Element[]// es para que pueda recibir 1 o mas elementos
// }

export const PrivateRoute = ({children}: any) => {
    const {logged}: any = useContext(AuthContext)
    console.log(logged);
    
    //para regresar a la pagina donde estaba cuando volves a logear
    const {pathname, search} = useLocation()
    // console.log(location);
    const lastPath = pathname + search
    localStorage.setItem('lastPath', lastPath)
    // console.log('re-render');
    
    
  return (logged)
    ? children
    : <Navigate to={'/login'}/>
}
