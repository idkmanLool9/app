import { createContext, useContext } from 'react'

export type User = {
  name: string
  email: string
}

export type AuthContextValue = {
  user: User | null
  signIn: (email: string) => void
  signUp: (name: string, email: string) => void
  signOut: () => void
}

export const AuthContext = createContext<AuthContextValue | null>(null)

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider')
  return ctx
}
