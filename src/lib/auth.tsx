import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react'

type User = {
  name: string
  email: string
}

type AuthContextValue = {
  user: User | null
  signIn: (email: string) => void
  signUp: (name: string, email: string) => void
  signOut: () => void
}

const AuthContext = createContext<AuthContextValue | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    try {
      const raw = localStorage.getItem('drift.user')
      return raw ? (JSON.parse(raw) as User) : null
    } catch {
      return null
    }
  })

  const persist = useCallback((u: User | null) => {
    setUser(u)
    if (u) localStorage.setItem('drift.user', JSON.stringify(u))
    else localStorage.removeItem('drift.user')
  }, [])

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      signIn: (email: string) => persist({ name: email.split('@')[0] || 'You', email }),
      signUp: (name: string, email: string) => persist({ name: name || 'You', email }),
      signOut: () => persist(null),
    }),
    [user, persist],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider')
  return ctx
}
