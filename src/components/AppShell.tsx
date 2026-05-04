import { Outlet } from 'react-router-dom'
import BottomNav from './BottomNav'

export default function AppShell() {
  return (
    <div className="h-full flex flex-col bg-bg">
      <div className="flex-1 relative overflow-hidden">
        <Outlet />
      </div>
      <BottomNav />
    </div>
  )
}
