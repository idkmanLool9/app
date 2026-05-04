import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import StatusBar from '../components/StatusBar'
import Avatar from '../components/Avatar'
import Input from '../components/Input'
import PrimaryButton from '../components/PrimaryButton'
import SocialButton from '../components/SocialButton'
import { AppleIcon, GoogleIcon } from '../components/SocialIcons'
import { useAuth } from '../lib/auth'

export default function Login() {
  const { signIn } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!email) return
    signIn(email)
    navigate('/app/map', { replace: true })
  }

  return (
    <div className="h-full flex flex-col bg-bg">
      <StatusBar />

      <div className="flex-1 flex flex-col px-7 pt-6 pb-8 overflow-y-auto no-scrollbar">
        <div className="flex justify-center mb-6">
          <Avatar size={64} />
        </div>

        <h1 className="text-[26px] leading-tight font-bold text-white text-center tracking-tight">
          Sign in to your<br />Account
        </h1>
        <p className="mt-2 text-[13px] text-text-3 text-center leading-relaxed max-w-[260px] mx-auto">
          Please fill in the details to login to continue
        </p>

        <form onSubmit={onSubmit} className="mt-7 flex flex-col gap-4">
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
            autoComplete="current-password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <div className="-mt-1 flex justify-end">
            <button type="button" className="text-[12.5px] font-medium text-text-2 hover:text-white">
              Forgot Password?
            </button>
          </div>

          <PrimaryButton type="submit" className="mt-2">Login</PrimaryButton>
        </form>

        <div className="mt-7 flex items-center gap-3 text-[12px] text-text-3">
          <span className="flex-1 h-px bg-border-soft" />
          <span>Or sign up with</span>
          <span className="flex-1 h-px bg-border-soft" />
        </div>

        <div className="mt-5 flex justify-center gap-4">
          <SocialButton aria-label="Continue with Apple">
            <AppleIcon className="size-6 text-white" />
          </SocialButton>
          <SocialButton aria-label="Continue with Google">
            <GoogleIcon className="size-6" />
          </SocialButton>
        </div>

        <p className="mt-auto pt-8 text-center text-[13px] text-text-3">
          Don&apos;t have account?{' '}
          <Link to="/register" className="font-semibold text-violet-300 hover:text-violet-200">
            Register
          </Link>
        </p>
      </div>
    </div>
  )
}
