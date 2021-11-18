<script setup lang="ts">
import type { HomeTabs } from '@/@types/tabs'

defineProps<{
  currentTab: HomeTabs
  favoritesCount: number
}>()

const emit = defineEmits<{
  (e: 'update:current', value: HomeTabs): void
}>()
</script>

<template>
  <section class="navbar-layout">
    <div class="start">
      <p class="panel-text">
        <router-link to="/">
          Rick and Morty
        </router-link>
      </p>
    </div>

    <div class="middle">
      <Search placeholder="Pesquisar personagem..." class />
    </div>

    <div class="end">
      <Tabs
        class="tab"
        :data-count="favoritesCount"
        :current="currentTab"
        @update:current="emit('update:current', $event as HomeTabs)"
      />
    </div>
  </section>
</template>

<style lang="scss">
.navbar-layout {
  @apply flex justify-between items-center sticky
    top-0
    h-14 w-full px-6
    bg-white z-10;

  > .start,
  > .middle,
  > .end {
    @apply flex;
  }
  > .start > .panel-text {
    @apply font-bold text-xl;
  }

  > .end > .tab {
    &::before {
      content: attr(data-count);

      @apply flex justify-center items-center absolute
        left-0
        h-6 w-6 rounded-xl
        bg-brand-primary-dark font-mono text-sm text-indigo-50;
    }
  }
}
</style>
