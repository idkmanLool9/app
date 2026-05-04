export type Place = {
  id: string
  name: string
  category: string
  emoji: string
  address: string
  distance: string
  rating: number
  reviews: number
  open: boolean
  hours: string
  position: [number, number]
}

export const PLACES: Place[] = [
  {
    id: 'vondelpark',
    name: 'Vondelpark',
    category: 'Park',
    emoji: '🌳',
    address: 'Vondelpark 1, Amsterdam',
    distance: '0.8 km',
    rating: 4.8,
    reviews: 41203,
    open: true,
    hours: 'Open 24 hours',
    position: [52.3580, 4.8686],
  },
  {
    id: 'rijks',
    name: 'Rijksmuseum',
    category: 'Museum',
    emoji: '🖼️',
    address: 'Museumstraat 1, Amsterdam',
    distance: '1.2 km',
    rating: 4.7,
    reviews: 89712,
    open: true,
    hours: 'Open until 17:00',
    position: [52.3600, 4.8852],
  },
  {
    id: 'foodhallen',
    name: 'Foodhallen',
    category: 'Food court',
    emoji: '🍜',
    address: 'Bellamyplein 51, Amsterdam',
    distance: '1.5 km',
    rating: 4.4,
    reviews: 12834,
    open: true,
    hours: 'Open until 23:30',
    position: [52.3653, 4.8728],
  },
  {
    id: 'anne-frank',
    name: 'Anne Frank House',
    category: 'Museum',
    emoji: '📖',
    address: 'Westermarkt 20, Amsterdam',
    distance: '2.0 km',
    rating: 4.6,
    reviews: 75321,
    open: true,
    hours: 'Open until 22:00',
    position: [52.3752, 4.8840],
  },
  {
    id: 'cuyp',
    name: 'Albert Cuyp Markt',
    category: 'Market',
    emoji: '🍅',
    address: 'Albert Cuypstraat, Amsterdam',
    distance: '2.4 km',
    rating: 4.5,
    reviews: 24011,
    open: false,
    hours: 'Opens 9:00',
    position: [52.3556, 4.8932],
  },
  {
    id: 'adam',
    name: "A'DAM Lookout",
    category: 'Viewpoint',
    emoji: '🌆',
    address: 'Overhoeksplein 5, Amsterdam',
    distance: '3.1 km',
    rating: 4.6,
    reviews: 18402,
    open: true,
    hours: 'Open until 22:00',
    position: [52.3845, 4.9027],
  },
]

export const USER_LOCATION: [number, number] = [52.3676, 4.8852]
