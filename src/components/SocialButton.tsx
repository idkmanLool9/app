import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Props = {
  children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

export default function SocialButton({ children, className = '', ...rest }: Props) {
  return (
    <button
      className={`
        size-14 rounded-full bg-surface border border-border-soft
        flex items-center justify-center
        hover:bg-surface-2 active:scale-95 transition
        ${className}
      `}
      {...rest}
    >
      {children}
    </button>
  )
}
