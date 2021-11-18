import { acceptHMRUpdate, defineStore } from 'pinia'

import type { Character } from '@/@types/character'

type State = {
  favorites: Character[]
}

export const useCharactersStore = defineStore('characters', {
  state: (): State => ({
    favorites: [],
  }),

  actions: {
    storeFavorite(character: Character) {
      const indexInState = this.favorites.findIndex(
        item => item.id === character.id,
      )

      if (indexInState !== -1)
        return this.favorites = this.favorites.filter((_, index) => index !== indexInState)

      this.favorites = [...this.favorites, character]
    },
  },

  getters: {
    favoritesCount: state => state.favorites.length,

    favoritesIndexed: state =>
      new Set(state.favorites.map(character => character.id)),
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useCharactersStore, import.meta.hot))
