<script setup lang="ts">
import { useUIStore } from '@stores/ui'
import { useCharactersStore } from '@stores/characters'

import { useQuery } from '@vue/apollo-composable'
import { getAllCharacters, GetAllCharacters } from '@services/characters'

const router = useRouter()
const ui = useUIStore()
const favorites = useCharactersStore()

type Filter = {
  search: string
  currentPage: number
  currentTab: 'all' | 'fav'
  renderList: GetAllCharacters['results']
}

const characters = ref<GetAllCharacters['results']>([])
const pagination = ref<GetAllCharacters['info']>({
  pages: 1,
  count: 1,
  next: 1,
  prev: 1,
})

const filter = reactive({
  search: '',
  currentPage: 1,
  currentTab: ui.tab,
}) as Filter

const renderCharacterList = computed(() => ui.tab === 'all' ? characters.value : favorites.favorites)

watch(
  () => filter.search,
  () => {
    filter.currentPage = 1
  },
)

const { onResult } = useQuery<{
  characters: GetAllCharacters
}>(
  getAllCharacters,
  () => ({
    page: filter.currentPage,
    name: filter.search,
  }),
  { fetchPolicy: 'cache-and-network' },
)

onResult(({ data, networkStatus }) => {
  if (networkStatus === 7) {
    characters.value = data.characters.results
    pagination.value = data.characters.info
  }
})

</script>

<template>
  <section class="character-container">
    <CharacterCard
      v-for="(character, index) in renderCharacterList"
      :key="index"
      :delay="index * 0.2"
      :character="character"
      :favorited="favorites.favoritesIndexed.has(character.id)"
      @favorite="favorites.storeFavorite"
      @click="router.push({ name: 'Character', params: { character: character.id } })"
    />
  </section>
</template>

<style lang="scss">
.character-container {
  @apply flex justify-center flex-wrap;
  gap: 8px;
}
</style>
