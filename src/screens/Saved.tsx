import { Bookmark, Heart, MapPin } from 'lucide-react'
import StatusBar from '../components/StatusBar'
import PlaceCard from '../components/PlaceCard'
import { PLACES } from '../data/places'

const COLLECTIONS = [
  { id: 'fav', name: 'Favorites', count: 12, icon: Heart, gradient: 'from-violet-500/40 to-fuchsia-500/20' },
  { id: 'visit', name: 'Want to visit', count: 8, icon: MapPin, gradient: 'from-violet-700/40 to-indigo-500/20' },
  { id: 'saved', name: 'All saved', count: 24, icon: Bookmark, gradient: 'from-indigo-700/40 to-violet-500/20' },
]

export default function Saved() {
  const recent = PLACES.slice(0, 4)
  return (
    <div className="absolute inset-0 flex flex-col bg-bg">
      <StatusBar />
      <div className="flex-1 overflow-y-auto no-scrollbar px-5 pb-8">
        <div className="pt-3">
          <h1 className="text-[26px] font-bold text-white tracking-tight">Saved</h1>
          <p className="mt-1 text-[13px] text-text-3">Your places, your way.</p>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-2.5">
          {COLLECTIONS.map(c => (
            <button
              key={c.id}
              className={`
                relative aspect-[3/4] rounded-2xl border border-border-soft overflow-hidden p-3
                bg-gradient-to-br ${c.gradient} text-left
                hover:scale-[1.02] transition
              `}
            >
              <c.icon className="size-5 text-white" />
              <div className="absolute inset-x-3 bottom-3">
                <div className="text-[13px] font-semibold text-white leading-tight">{c.name}</div>
                <div className="text-[11px] text-white/60">{c.count} places</div>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-7">
          <h2 className="text-[15px] font-bold text-white tracking-tight">Recently saved</h2>
          <div className="mt-3 flex flex-col gap-2.5">
            {recent.map(p => (
              <PlaceCard key={p.id} place={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
