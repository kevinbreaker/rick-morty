<route lang="yaml">
name: Character
</route>

<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable'

import { getCharacterDetails, GetCharacter } from '@services/characters'

import { UnionToTuple } from '@/@types/utils'

type RenderSections = UnionToTuple<keyof typeof informations>

const route = useRoute()
const character = ref<Partial<GetCharacter>>({
  id: '1',
})

const renderSections: RenderSections = ['personal', 'origin', 'location']

const informations = reactive({
  personal: computed(() => {
    const { name, species, gender, status } = character.value
    return { name, species, gender, status }
  }),

  origin: computed(() => {
    if (character.value.origin) {
      const { name, type, dimension } = character.value.origin
      return { name, dimension, type }
    }
    return { name: 'unknown' }
  }),

  location: computed(() => {
    if (character.value.location) {
      const { name, type, dimension } = character.value.location
      return { name, dimension, type }
    }
    return { name: 'unknown' }
  }),
})

const { onResult } = useQuery<{ character: GetCharacter }>(
  getCharacterDetails,
  () => ({
    id: route.params.character,
  }),
  {
    fetchPolicy: 'cache-and-network',
  },
)
onResult(({ data, networkStatus }) => {
  if (networkStatus === 7)
    character.value = data.character
})
</script>

<template>
  <main class="character-detail-page">
    <figure class="avatar">
      <!-- <Favorite
        :favorited="favorite.favoritesIndexed.has(character.id!)"
        class="absolute right-5 top-5 cursor-pointer"
        width="32"
        @click="favorite.storeFavorite(character)"
      /> -->

      <img width="310" :src="character.image" />
    </figure>

    <section v-for="section in renderSections" :key="section" :class="`${section}-info`">
      <span class="inline-block font-bold uppercase mx-4 pt-3 pb-6">
        {{
          section
        }}
      </span>

      <ul class="list col-span-full">
        <li v-for="(value, key, index) in informations[section]" :key="index" class="item">
          <span class="label">{{ key }}:</span>
          <span class="description">{{ value }}</span>
        </li>
      </ul>
    </section>

    <ul class="episode-list">
      <li class="header">
        <span class="-episode">Episode</span>
        <span class="-name">Name</span>
        <span class="-date">Date</span>
      </li>
      <li v-for="(episode, index) in character.episode" :key="index" class="content">
        <span class="-episode">{{ episode.episode }}</span>

        <span class="-name">{{ episode.name }}</span>

        <time class="-date">{{ episode.air_date }}</time>
      </li>
    </ul>
  </main>
</template>

<style lang="scss">
.character-detail-page {
  @apply grid md:grid-cols-12 justify-self-center
    max-w-screen-xl mx-auto;
  > .avatar {
    @apply col-span-3 relative rounded-md;
  }
  [class$="-info"] {
    @apply col-span-3 mx-4
    bg-gray-300 rounded-md;
    > .list {
      @apply flex flex-col justify-start flex-wrap
        h-full;
    }
    > .list > .item {
      @apply flex flex-col
            mr-4 mb-2 px-4;
    }
    > .list > .item {
      > .label {
        @apply capitalize font-semibold;
      }
    }
  }
  > .episode-list {
    @apply col-span-full my-6;
    /* bg-gray-100; */
    > .content,
    > .header {
      @apply grid grid-cols-4
            mb-2 px-4 py-2 rounded-lg;
      /* bg-purple-400; */
    }
    > .header {
      .-name,
      .-episode,
      .-date {
        @apply px-2 py-1 rounded mr-4 font-bold;
      }
      .-name {
        @apply col-span-2;
      }
    }
    > .content {
      @apply bg-gray-300 hover:bg-green-700 hover:text-green-200 cursor-pointer transition-colors;
      .-name,
      .-episode,
      .-date {
        @apply px-2 py-2 rounded mr-4;
      }
      .-name {
        @apply col-span-2;
      }
    }
  }
}
</style>
