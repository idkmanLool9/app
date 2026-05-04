import { User } from 'lucide-react'

export default function Avatar({ size = 56 }: { size?: number }) {
  return (
    <div
      className="rounded-full bg-surface-2 border border-border-soft flex items-center justify-center text-text-3"
      style={{ width: size, height: size }}
    >
      <User className="size-1/2" strokeWidth={1.5} />
    </div>
  )
}
