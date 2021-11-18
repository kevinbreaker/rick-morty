<script setup lang="ts">
import { useUIStore } from '@/stores/ui'
import { useCharactersStore } from '@/stores/characters'

const ui = useUIStore()
const chacarters = useCharactersStore()
</script>

<template>
  <div>
    <Navbar :current-tab="ui.tab" :favorites-count="chacarters.favoritesCount" @update:current="ui.toggleTab($event)" />

    <div class="flex w-full">
      <router-view />
    </div>
  </div>
</template>
