import { Eye, EyeOff } from 'lucide-react'
import { useState, type InputHTMLAttributes } from 'react'

type Props = {
  label: string
  type?: 'text' | 'email' | 'password'
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>

export default function Input({ label, type = 'text', className = '', ...rest }: Props) {
  const [show, setShow] = useState(false)
  const isPwd = type === 'password'
  const inputType = isPwd ? (show ? 'text' : 'password') : type

  return (
    <label className="block">
      <span className="mb-2 block text-[13px] font-medium text-text-2">{label}</span>
      <div className="relative">
        <input
          type={inputType}
          className={`
            w-full rounded-2xl bg-surface border border-border-soft
            px-4 py-3.5 text-[15px] text-white placeholder:text-text-4
            outline-none transition
            focus:border-violet-500/70 focus:bg-surface-2
            ${className}
          `}
          {...rest}
        />
        {isPwd && (
          <button
            type="button"
            onClick={() => setShow(s => !s)}
            className="absolute inset-y-0 right-3.5 flex items-center text-text-3 hover:text-text-2"
            tabIndex={-1}
            aria-label={show ? 'Hide password' : 'Show password'}
          >
            {show ? <EyeOff className="size-4.5" /> : <Eye className="size-4.5" />}
          </button>
        )}
      </div>
    </label>
  )
}
