import { NavLink } from 'react-router-dom'
import { Map, Bookmark, User } from 'lucide-react'

const items = [
  { to: '/app/map', label: 'Map', Icon: Map },
  { to: '/app/saved', label: 'Saved', Icon: Bookmark },
  { to: '/app/profile', label: 'Profile', Icon: User },
]

export default function BottomNav() {
  return (
    <nav className="relative z-30 bg-bg/90 backdrop-blur-xl border-t border-border-soft px-6 pt-2 pb-5">
      <ul className="flex items-center justify-between">
        {items.map(({ to, label, Icon }) => (
          <li key={to} className="flex-1">
            <NavLink
              to={to}
              className={({ isActive }) =>
                `flex flex-col items-center gap-1 py-1.5 transition ${
                  isActive ? 'text-violet-300' : 'text-text-3 hover:text-text-2'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon className="size-5.5" strokeWidth={isActive ? 2.5 : 2} />
                  <span className="text-[11px] font-semibold tracking-tight">{label}</span>
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
