export type Character = {
  id: string
  name?: string
  status: 'Alive' | 'Dead' | 'unknown'
  species?: string
  type?: string
  gender?: string
  origin?: Location
  location?: Location
  image?: string
  episode?: Episode[]
}

export type Episode = {
  id: string
  name: string
  air_date: string
  episode: string
  characters: Character[]
}

export type Episodes = {
  info: Info
  results: Episode[]
}

export type Info = {
  count: number
  pages: number
  next: number
  prev: number
}

export type Location = {
  id?: number
  name?: string
  type?: string
  dimension?: string
  residents?: Character[]
}

export type Locations = {
  info: Info
  results: Location[]
}
