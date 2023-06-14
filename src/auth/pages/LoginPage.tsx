import { useNavigate } from "react-router-dom"
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';


export const LoginPage = () => {

  const {login} = useContext(AuthContext)

  const navigate = useNavigate()
  
  //cuando se accede al login y se quiera regresar para ataras ya no se puede acceder. lo borra del historial
  const onLogin = () => {
    const lastPath = localStorage.getItem('lastPath') || '/'
    login('Toto Max')
    navigate(lastPath, {
      replace: true
    })
    // navigate('/', {
    //   replace: true
    // })
  }

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button 
        className="btn btn-primary"
        onClick={onLogin}>
        Login
      </button>

    </div>
  )
}
