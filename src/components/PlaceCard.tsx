import { Star } from 'lucide-react'
import type { Place } from '../data/places'

export default function PlaceCard({ place, onClick }: { place: Place; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="
        w-full flex items-center gap-3.5 p-3 rounded-2xl
        bg-surface border border-border-soft
        hover:bg-surface-2 active:scale-[0.99] transition text-left
      "
    >
      <div className="size-12 rounded-xl bg-surface-3 flex items-center justify-center text-2xl shrink-0">
        {place.emoji}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2">
          <span className="font-semibold text-white text-[14.5px] truncate">{place.name}</span>
          <span className="text-[11.5px] text-text-3 shrink-0">{place.distance}</span>
        </div>
        <div className="mt-0.5 flex items-center gap-1.5 text-[12px] text-text-3">
          <span>{place.category}</span>
          <span className="size-0.75 rounded-full bg-text-4" />
          <Star className="size-3 fill-violet-400 text-violet-400" />
          <span>{place.rating.toFixed(1)}</span>
          <span className="size-0.75 rounded-full bg-text-4" />
          <span className={place.open ? 'text-emerald-400' : 'text-amber-400'}>
            {place.open ? 'Open' : 'Closed'}
          </span>
        </div>
      </div>
    </button>
  )
}
