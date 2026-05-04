import type { ReactNode } from 'react'

type Props = {
  expanded: boolean
  onToggle: () => void
  children: ReactNode
}

export default function BottomSheet({ expanded, onToggle, children }: Props) {
  return (
    <div
      className={`
        absolute left-0 right-0 bottom-0 z-20
        bg-bg-soft/95 backdrop-blur-xl
        rounded-t-[28px] border-t border-x border-border-soft
        shadow-[0_-20px_60px_-20px_rgba(0,0,0,0.7)]
        transition-[height] duration-300 ease-out
        ${expanded ? 'h-[78%]' : 'h-[260px]'}
        flex flex-col overflow-hidden
      `}
    >
      <button
        onClick={onToggle}
        aria-label={expanded ? 'Collapse' : 'Expand'}
        className="pt-3 pb-2 flex justify-center group"
      >
        <span className="block w-10 h-1.25 rounded-full bg-border group-hover:bg-text-3 transition" />
      </button>
      <div className="flex-1 overflow-y-auto no-scrollbar">{children}</div>
    </div>
  )
}
