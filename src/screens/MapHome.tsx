import { useEffect, useMemo, useState } from 'react'
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet'
import { Search, SlidersHorizontal, Locate, Layers } from 'lucide-react'
import { PLACES, USER_LOCATION, type Place } from '../data/places'
import { placeIcon, userIcon } from '../components/MapMarkers'
import BottomSheet from '../components/BottomSheet'
import PlaceCard from '../components/PlaceCard'
import PlaceDetail from '../components/PlaceDetail'
import { useAuth } from '../lib/auth-context'

const CATEGORIES = ['Nearby', 'Food', 'Coffee', 'Museums', 'Parks', 'Nightlife']

function FlyTo({ target }: { target: [number, number] | null }) {
  const map = useMap()
  useEffect(() => {
    if (target) map.flyTo(target, 15, { duration: 0.8 })
  }, [target, map])
  return null
}

export default function MapHome() {
  const { user } = useAuth()
  const [query, setQuery] = useState('')
  const [activeCat, setActiveCat] = useState('Nearby')
  const [selected, setSelected] = useState<Place | null>(null)
  const [expanded, setExpanded] = useState(false)
  const [flyTarget, setFlyTarget] = useState<[number, number] | null>(null)

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim()
    if (!q) return PLACES
    return PLACES.filter(
      p => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q),
    )
  }, [query])

  function selectPlace(p: Place) {
    setSelected(p)
    setExpanded(true)
    setFlyTarget([p.position[0], p.position[1]])
  }

  function locateMe() {
    setFlyTarget([USER_LOCATION[0] + Math.random() * 0.00001, USER_LOCATION[1]])
  }

  return (
    <div className="absolute inset-0 bg-bg">
      <div className="absolute inset-0">
        <MapContainer
          center={USER_LOCATION}
          zoom={14}
          zoomControl={false}
          attributionControl={true}
          className="h-full w-full"
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            attribution='&copy; OpenStreetMap &copy; CARTO'
            subdomains="abcd"
            maxZoom={20}
          />
          <Marker position={USER_LOCATION} icon={userIcon()} />
          {PLACES.map(p => (
            <Marker
              key={p.id}
              position={p.position}
              icon={placeIcon(p.emoji, selected?.id === p.id)}
              eventHandlers={{ click: () => selectPlace(p) }}
            />
          ))}
          <FlyTo target={flyTarget} />
        </MapContainer>
      </div>

      <div className="absolute inset-x-0 top-0 z-10 px-5 pt-3 pointer-events-none">
        <div className="pointer-events-auto flex items-center gap-2.5">
          <div className="flex-1 flex items-center gap-2.5 px-3 py-2.5 rounded-full bg-bg/80 backdrop-blur-xl border border-border-soft shadow-lg">
            <div className="size-8 rounded-full bg-violet-500/20 border border-violet-400/30 flex items-center justify-center text-[12px] font-bold text-violet-200">
              {(user?.name?.[0] ?? 'U').toUpperCase()}
            </div>
            <div className="relative flex-1">
              <Search className="absolute left-0 top-1/2 -translate-y-1/2 size-4 text-text-3" />
              <input
                value={query}
                onChange={e => {
                  setQuery(e.target.value)
                  setExpanded(true)
                  setSelected(null)
                }}
                placeholder="Search places, food, vibes…"
                className="w-full pl-6 bg-transparent text-[14px] text-white placeholder:text-text-3 outline-none"
              />
            </div>
          </div>
          <button
            aria-label="Filters"
            className="size-11 rounded-full bg-bg/80 backdrop-blur-xl border border-border-soft flex items-center justify-center text-text-2 hover:text-white pointer-events-auto"
          >
            <SlidersHorizontal className="size-4.5" />
          </button>
        </div>

        <div className="pointer-events-auto mt-3 flex gap-2 overflow-x-auto no-scrollbar pb-1">
          {CATEGORIES.map(c => (
            <button
              key={c}
              onClick={() => setActiveCat(c)}
              className={`
                shrink-0 px-3.5 py-1.5 rounded-full text-[12.5px] font-semibold transition border
                ${
                  activeCat === c
                    ? 'bg-violet-500 border-violet-400 text-white shadow-[0_6px_20px_-6px_rgba(108,92,231,0.6)]'
                    : 'bg-bg/70 backdrop-blur border-border-soft text-text-2 hover:text-white'
                }
              `}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="absolute right-4 z-10 flex flex-col gap-2.5"
        style={{ bottom: expanded ? 'calc(78% + 16px)' : 'calc(260px + 16px)' }}
      >
        <button
          aria-label="Layers"
          className="size-11 rounded-full bg-bg/85 backdrop-blur-xl border border-border-soft flex items-center justify-center text-text-2 hover:text-white shadow-lg transition"
        >
          <Layers className="size-4.5" />
        </button>
        <button
          onClick={locateMe}
          aria-label="Locate me"
          className="size-12 rounded-full bg-violet-500 hover:bg-violet-400 flex items-center justify-center text-white glow-violet active:scale-95 transition"
        >
          <Locate className="size-5" strokeWidth={2.5} />
        </button>
      </div>

      <BottomSheet expanded={expanded} onToggle={() => setExpanded(e => !e)}>
        {selected ? (
          <PlaceDetail
            place={selected}
            onClose={() => {
              setSelected(null)
              setExpanded(false)
            }}
            onDirections={() => {}}
          />
        ) : (
          <div className="px-5 pb-6">
            <div className="flex items-baseline justify-between">
              <h2 className="text-[17px] font-bold text-white tracking-tight">
                {query ? `Results for "${query}"` : 'Nearby you'}
              </h2>
              <span className="text-[12px] text-text-3">{filtered.length} places</span>
            </div>
            <p className="mt-0.5 text-[12.5px] text-text-3">
              {query ? 'Tap a place to fly there' : 'Curated spots within walking distance'}
            </p>
            <div className="mt-4 flex flex-col gap-2.5">
              {filtered.map(p => (
                <PlaceCard key={p.id} place={p} onClick={() => selectPlace(p)} />
              ))}
              {filtered.length === 0 && (
                <div className="py-10 text-center text-text-3 text-[13px]">
                  No matches. Try a different search.
                </div>
              )}
            </div>
          </div>
        )}
      </BottomSheet>
    </div>
  )
}
