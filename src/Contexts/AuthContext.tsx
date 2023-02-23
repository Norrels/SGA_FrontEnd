import { fromUnixTime, toDate } from "date-fns"
import { createContext, ReactNode, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { z } from "zod"
import { API } from "../lib/axios"
import { useLocation } from 'react-router-dom'

export interface LoginProps {
  nif: string,
  senha: string,
}


interface AuthContextType {
  autheticated: boolean
  login: (data: LoginProps) => void
  logout: () => void
  userAutheticated: UserType
}


interface AuthProviderProvideProps {
  children: ReactNode
}

export const userInput = z.object({
  id: z.string(),
  nif: z.string().min(3, { message: "* Deve ter mais de 3 caracteres..." }),
  nome: z.string().max(30, { message: "* O nome não deve ter mais de 20 caracteres..." }),
  email: z.string().email({ message: "* Informe um email válido..." }),
  senha: z.string().optional(),
  tipoUsuario: z.string()
})

export type UserType = z.infer<typeof userInput>;

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: AuthProviderProvideProps) {
  const [autheticated, setAutheticated] = useState(false)
  const [userAutheticated, setuserAutheticated] = useState<UserType>({
    email: "", nome: "", senha: undefined, nif: "", id: "", tipoUsuario: "usuario"
  });

  const navigate = useNavigate()
  const paginaAtual = useLocation()
  
  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      const object = JSON.parse(atob(token.split('.')[1]))
      setuserAutheticated(object)
      setAutheticated(true)
      paginaAtual.pathname === "/" &&
        navigate('/inicio', { replace: true })
    }
  }, [])

  async function login(user: LoginProps) {
    const { nif, senha } = user
    const { data: { token } } = await API.post('usuario/login', {
      nif,
      senha
    })

    if (token !== null) {
      localStorage.setItem('token', JSON.stringify(token))
      setAutheticated(true)
      const object = JSON.parse(atob(token.split('.')[1]))
      setuserAutheticated(object)
      API.defaults.headers.common['Authorization'] = token;
      navigate('/inicio', { replace: true })
    }
  }

  function logout() {
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
        logout,
        userAutheticated
      }}>
      {children}
    </AuthContext.Provider>
  )
}