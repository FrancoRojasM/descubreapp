import { useContext } from 'react'
import { AuthContext } from '../context/authContext'
import { useNavigate } from 'react-router-dom'

export default function LoginView() {

  const { signInGoogle } = useContext(AuthContext)

  const Navigate=useNavigate()

  const loguear= async()=>{
      const rpta=await signInGoogle()
      if (rpta.user.uid) {
        Navigate('/')
      }
  }

  return (
    <div>
      <h1 className='mb-3'>Ingresa con Google!</h1>
      <button className='btn btn-danger btn-lg' onClick={loguear}>
        Ingresa
      </button>
    </div>
  )
}