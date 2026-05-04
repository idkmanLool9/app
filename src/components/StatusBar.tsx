import { Signal, Wifi, BatteryFull } from 'lucide-react'

export default function StatusBar({ light = true }: { light?: boolean }) {
  const color = light ? 'text-white' : 'text-text-2'
  return (
    <div className={`flex items-center justify-between px-7 pt-4 pb-1 text-sm font-semibold ${color}`}>
      <span className="tracking-tight">12:45</span>
      <div className="flex items-center gap-1.5 opacity-90">
        <Signal className="size-3.5" strokeWidth={2.5} />
        <Wifi className="size-3.5" strokeWidth={2.5} />
        <BatteryFull className="size-4" strokeWidth={2.5} />
      </div>
    </div>
  )
}
