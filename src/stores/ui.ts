import { acceptHMRUpdate, defineStore } from 'pinia'

import type { HomeTabs } from '@/@types/tabs'

type State = {
  tab: HomeTabs
}

export const useUIStore = defineStore('ui', {
  state: (): State => ({
    tab: 'all',
  }),

  actions: {
    toggleTab(tab: HomeTabs) {
      this.tab = tab
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUIStore, import.meta.hot))
