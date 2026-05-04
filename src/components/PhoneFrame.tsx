import type { ReactNode } from 'react'

export default function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-full w-full bg-aurora flex items-center justify-center md:p-8">
      <div
        className="
          relative w-full h-[100dvh] overflow-hidden bg-bg
          md:h-[860px] md:max-h-[92vh] md:w-[420px]
          md:rounded-[44px] md:border md:border-border-soft
          md:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6),0_0_0_10px_#0a0a10,0_0_0_11px_#1c1c28]
        "
      >
        {children}
      </div>
    </div>
  )
}
