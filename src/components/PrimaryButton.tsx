import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Props = {
  children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

export default function PrimaryButton({ children, className = '', ...rest }: Props) {
  return (
    <button
      className={`
        glow-violet w-full rounded-full bg-violet-500 hover:bg-violet-400
        active:bg-violet-600 transition
        py-4 text-[15px] font-semibold text-white tracking-tight
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
      {...rest}
    >
      {children}
    </button>
  )
}
