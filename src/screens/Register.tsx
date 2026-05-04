import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'
import StatusBar from '../components/StatusBar'
import Input from '../components/Input'
import PrimaryButton from '../components/PrimaryButton'
import { useAuth } from '../lib/auth-context'

export default function Register() {
  const { signUp } = useAuth()
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeat, setRepeat] = useState('')

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!email || !password || password !== repeat) return
    signUp(name, email)
    navigate('/app/map', { replace: true })
  }

  return (
    <div className="h-full flex flex-col bg-bg">
      <StatusBar />

      <div className="px-5 pt-2">
        <button
          onClick={() => navigate(-1)}
          aria-label="Back"
          className="size-10 rounded-full bg-surface border border-border-soft flex items-center justify-center text-text-2 hover:text-white"
        >
          <ChevronLeft className="size-5" />
        </button>
      </div>

      <div className="flex-1 flex flex-col px-7 pt-4 pb-8 overflow-y-auto no-scrollbar">
        <h1 className="text-[24px] leading-tight font-bold text-white tracking-tight">
          Registration in to your<br />Account
        </h1>
        <p className="mt-2 text-[13px] text-text-3 leading-relaxed">
          Please fill in the details to create your account.
        </p>

        <form onSubmit={onSubmit} className="mt-6 flex flex-col gap-4">
          <Input
            label="Full Name"
            placeholder="Ubhaiek Patel"
            autoComplete="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <Input
            label="Email"
            type="email"
            placeholder="ubhayjoy@gmail.com"
            autoComplete="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Input
            label="Password"
            type="password"
            placeholder="••••••••"
            autoComplete="new-password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <Input
            label="Repeat Password"
            type="password"
            placeholder="••••••••"
            autoComplete="new-password"
            value={repeat}
            onChange={e => setRepeat(e.target.value)}
          />

          <PrimaryButton type="submit" className="mt-3">Register</PrimaryButton>
        </form>

        <p className="mt-auto pt-8 text-center text-[13px] text-text-3">
          I have account?{' '}
          <Link to="/" className="font-semibold text-violet-300 hover:text-violet-200">
            Log In
          </Link>
        </p>
      </div>
    </div>
  )
}
