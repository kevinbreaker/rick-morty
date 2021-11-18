<script lang="ts" setup>
import { gsap } from 'gsap'
// import Favorite from '@icons/favorite.vue'
import type { Character } from '@/@types/character'

const props = defineProps<{
  character: Character
  favorited: boolean
  delay: number
}>()

const emit = defineEmits<{
  (e: 'favorite', value: Character): void
}>()

const id = ref<HTMLElement | null>(null)

function animateSliderEnter() {
  gsap.fromTo(
    id.value,
    { translateX: '100vw' },
    {
      delay: props.delay,
      translateX: 0,
      duration: 0.3,
      onStart() {
        id?.value?.classList.remove('-transition')
      },
      onComplete() {
        id?.value?.removeAttribute('style')
        id?.value?.classList.add('-transition')
      },
    },
  )
}
onMounted(() => {
  animateSliderEnter()
})

watch(() => props.character, animateSliderEnter)
</script>

<template>
  <aside ref="id" class="card-character" tabindex="0">
    <img width="288" :src="character.image" />

    <section class="content">
      <button class="fav-button" @click.stop="emit('favorite', character)">
        <zmdi:favorite class="favorite" :class="{ '-favorited': favorited }" />
      </button>

      <Status class="status" :status="character.status" />

      <dl class="group">
        <dt class="-definition"></dt>
        <dd class="-description">
          {{ character.name }}
        </dd>

        <dt class="-definition">
          Species
        </dt>

        <dd class="-description">
          {{ character.species }}
        </dd>

        <dt class="-definition">
          Gender
        </dt>

        <dd class="-description">
          {{ character.gender }}
        </dd>
      </dl>
    </section>
  </aside>
</template>

<style lang="scss">
.card-character {
  @apply flex flex-col
    w-44 h-420px
    shadow-md rounded-md bg-white
    overflow-hidden;

  @screen sm {
    @apply w-72 h-520px;
  }

  cursor: pointer;
  will-change: transform;

  &.-transition {
    transition: transform 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  &:hover {
    @apply transform-gpu sm:scale-125 z-2;
  }

  > .img {
    width: 280px;
  }

  > .content {
    @apply h-full p-4;
    position: relative;
  }

  > .content {
    > .status {
      @apply mb-2;
    }

    > .fav-button {
      @apply absolute right-4;
    }

    > .fav-button > .favorite {
      @apply h-6 w-6
        stroke-red-600 text-transparent;

      stroke-width: 1rem;

      &.-favorited {
        @apply text-red-600;
      }
    }

    > .group {
      @apply flex flex-col items-start
        mb-2 capitalize text-left;

      > .-definition {
        @apply text-xs;
      }

      > .-description {
        @apply font-bold mb-4;
      }
    }
  }
}
</style>
