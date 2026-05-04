import { Navigate } from 'react-router-dom'
import { useAuth } from './auth'
import type { ReactNode } from 'react'

export default function RequireAuth({ children }: { children: ReactNode }) {
  const { user } = useAuth()
  if (!user) return <Navigate to="/" replace />
  return <>{children}</>
}
