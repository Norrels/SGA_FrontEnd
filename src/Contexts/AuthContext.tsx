import { createContext, ReactNode, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { API } from "../lib/axios"

export interface LoginProps {
  nif: string,
  senha: string,
}


interface AuthContextType {
  autheticated: boolean
  login: (data: LoginProps) => void
  logout: () => void
}


interface AuthProviderProvideProps {
  children: ReactNode
}



export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: AuthProviderProvideProps) {
  const [autheticated, setAutheticated] = useState(false)
  const navigate = useNavigate()

  // useEffect(() => {
  //   const token = localStorage.getItem("token")
  //   if (token) {
  //     API.defaults.headers.common['Authorization'] = token;
  //     setAutheticated(true)
  //   }
  // })

  async function login(user: LoginProps) {
    const {nif, senha} = user
    
    const { data: { token } } = await API.post('usuario/login', {
        nif,
        senha
        
    })
    
    if(token !== null){
      localStorage.setItem('token', JSON.stringify(token))
      setAutheticated(true)
      API.defaults.headers.common['Authorization'] = token;
      const object = JSON.parse(atob(token.split('.')[1]))
      navigate('/inicio', { replace: true })
    } 
}

async function logout() {
  setAutheticated(false)
  localStorage.removeItem('token')
  delete API.defaults.headers.common['Authorization']
  navigate('/', { replace: true })
}

  return (
    <AuthContext.Provider value={
      {
        login,
        autheticated,
        logout
      }}>
      {children}
    </AuthContext.Provider>
  )
}