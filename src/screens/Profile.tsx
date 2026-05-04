import { useNavigate } from 'react-router-dom'
import { Bell, ChevronRight, HelpCircle, LogOut, Moon, Settings, Shield } from 'lucide-react'
import StatusBar from '../components/StatusBar'
import Avatar from '../components/Avatar'
import { useAuth } from '../lib/auth'

export default function Profile() {
  const { user, signOut } = useAuth()
  const navigate = useNavigate()

  function onSignOut() {
    signOut()
    navigate('/', { replace: true })
  }

  return (
    <div className="absolute inset-0 flex flex-col bg-bg">
      <StatusBar />
      <div className="flex-1 overflow-y-auto no-scrollbar px-5 pb-8">
        <div className="pt-3">
          <h1 className="text-[26px] font-bold text-white tracking-tight">Profile</h1>
        </div>

        <div className="mt-5 p-5 rounded-3xl bg-gradient-to-br from-violet-700/30 via-violet-500/10 to-bg-soft border border-border-soft flex items-center gap-4">
          <Avatar size={56} />
          <div className="flex-1 min-w-0">
            <div className="text-[16px] font-semibold text-white truncate">
              {user?.name ?? 'You'}
            </div>
            <div className="text-[12.5px] text-text-3 truncate">{user?.email ?? '—'}</div>
          </div>
          <button className="px-3 py-1.5 rounded-full bg-violet-500 text-white text-[12px] font-semibold hover:bg-violet-400 transition">
            Edit
          </button>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-2.5">
          <Stat label="Saved" value="24" />
          <Stat label="Visited" value="142" />
          <Stat label="Reviews" value="9" />
        </div>

        <Section title="Preferences">
          <Row icon={<Bell className="size-4.5" />} label="Notifications" right="On" />
          <Row icon={<Moon className="size-4.5" />} label="Appearance" right="Dark" />
          <Row icon={<Shield className="size-4.5" />} label="Privacy" />
        </Section>

        <Section title="Support">
          <Row icon={<HelpCircle className="size-4.5" />} label="Help center" />
          <Row icon={<Settings className="size-4.5" />} label="Settings" />
        </Section>

        <button
          onClick={onSignOut}
          className="mt-6 w-full py-3.5 rounded-2xl bg-surface border border-border-soft text-rose-300 hover:bg-surface-2 transition flex items-center justify-center gap-2 font-semibold text-[14px]"
        >
          <LogOut className="size-4.5" />
          Sign out
        </button>
      </div>
    </div>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-surface border border-border-soft p-3.5">
      <div className="text-[18px] font-bold text-white">{value}</div>
      <div className="text-[11.5px] text-text-3 mt-0.5">{label}</div>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-6">
      <h2 className="text-[12.5px] font-semibold text-text-3 uppercase tracking-wider mb-2 px-1">
        {title}
      </h2>
      <div className="rounded-2xl bg-surface border border-border-soft divide-y divide-border-soft overflow-hidden">
        {children}
      </div>
    </div>
  )
}

function Row({
  icon,
  label,
  right,
}: {
  icon: React.ReactNode
  label: string
  right?: string
}) {
  return (
    <button className="w-full flex items-center gap-3.5 px-4 py-3.5 hover:bg-surface-2 transition text-left">
      <span className="text-text-2">{icon}</span>
      <span className="flex-1 text-[14px] text-white">{label}</span>
      {right && <span className="text-[12.5px] text-text-3">{right}</span>}
      <ChevronRight className="size-4 text-text-3" />
    </button>
  )
}
