import { useCallback, useMemo, useState, type ReactNode } from 'react'
import { AuthContext, type AuthContextValue, type User } from './auth-context'

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
    try {
      if (u) localStorage.setItem('drift.user', JSON.stringify(u))
      else localStorage.removeItem('drift.user')
    } catch {
      // localStorage may be unavailable (e.g. sandboxed iframe)
    }
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
