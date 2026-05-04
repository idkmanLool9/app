import { Bookmark, Navigation, Phone, Share2, Star, Clock, MapPin, X } from 'lucide-react'
import type { Place } from '../data/places'

type Props = {
  place: Place
  onClose: () => void
  onDirections: () => void
}

export default function PlaceDetail({ place, onClose, onDirections }: Props) {
  return (
    <div className="px-5 pb-6">
      <div className="relative h-44 rounded-2xl overflow-hidden border border-border-soft bg-gradient-to-br from-violet-700/30 via-violet-500/10 to-bg-soft flex items-center justify-center">
        <span className="text-7xl">{place.emoji}</span>
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 size-9 rounded-full bg-bg/70 backdrop-blur border border-border-soft flex items-center justify-center text-white hover:bg-bg"
        >
          <X className="size-4.5" />
        </button>
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-bg/70 backdrop-blur border border-border-soft text-[11px] font-medium">
          <Star className="size-3 fill-violet-300 text-violet-300" />
          <span className="text-white">{place.rating.toFixed(1)}</span>
          <span className="text-text-3">· {place.reviews.toLocaleString()}</span>
        </div>
      </div>

      <div className="mt-4">
        <span className="text-[12px] font-medium text-violet-300 uppercase tracking-wider">{place.category}</span>
        <h2 className="mt-1 text-[22px] font-bold text-white tracking-tight">{place.name}</h2>
      </div>

      <ul className="mt-4 space-y-3 text-[13px]">
        <li className="flex items-start gap-3">
          <MapPin className="size-4 text-text-3 mt-0.5 shrink-0" />
          <span className="text-text-2">{place.address}</span>
        </li>
        <li className="flex items-start gap-3">
          <Clock className="size-4 text-text-3 mt-0.5 shrink-0" />
          <span className={place.open ? 'text-emerald-400' : 'text-amber-400'}>
            {place.open ? 'Open · ' : 'Closed · '}
            <span className="text-text-2">{place.hours}</span>
          </span>
        </li>
      </ul>

      <div className="mt-5 grid grid-cols-3 gap-2">
        <ActionButton icon={<Bookmark className="size-4.5" />} label="Save" />
        <ActionButton icon={<Share2 className="size-4.5" />} label="Share" />
        <ActionButton icon={<Phone className="size-4.5" />} label="Call" />
      </div>

      <button
        onClick={onDirections}
        className="
          glow-violet mt-4 w-full rounded-full bg-violet-500 hover:bg-violet-400
          py-4 text-[15px] font-semibold text-white tracking-tight
          flex items-center justify-center gap-2 transition
        "
      >
        <Navigation className="size-4.5" />
        Directions · {place.distance}
      </button>
    </div>
  )
}

function ActionButton({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button className="
      flex flex-col items-center gap-1.5 py-3 rounded-2xl
      bg-surface border border-border-soft text-text-2
      hover:bg-surface-2 hover:text-white transition
    ">
      {icon}
      <span className="text-[11.5px] font-medium">{label}</span>
    </button>
  )
}
