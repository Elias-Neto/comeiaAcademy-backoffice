import { createContext, useContext, useEffect, useState } from "react"

import { User } from "../services/UserService"

interface AuthContextProps {
  user: User
  isLoading: boolean
  authenticated: boolean
  logout: () => Promise<void>
  login: (user: User) => Promise<void>
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>({} as User)
  const [isLoading, setIsLoading] = useState(true)
  const [authenticated, setAuthenticated] = useState(false)

  const logout = async () => {
    setUser({} as User)
    setAuthenticated(false)
    localStorage.removeItem("user")
  }

  const login = async (user: User) => {
    setUser(user)
    setAuthenticated(true)
    localStorage.setItem("user", JSON.stringify(user))
  }

  useEffect(() => {
    const user = localStorage.getItem("user")
    if (user) {
      setUser(JSON.parse(user))
      setAuthenticated(true)
    }
    setIsLoading(false)
  }, [])

  return (
    <AuthContext.Provider value={{ user, isLoading, authenticated, logout, login }}>
      {children}
    </AuthContext.Provider>
  )
}