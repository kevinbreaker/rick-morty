<script lang="ts" setup>
import type { Tabs } from '@/@types/tabs'

interface Props {
  tabs?: Tabs[]
  current: Tabs['value']
}

const emit = defineEmits<{
  (e: 'update:current', value: Props['current']): void
}>()

withDefaults(defineProps<Props>(), {
  tabs: () => [
    {
      text: 'Favorites',
      value: 'favorites',
    },
    {
      text: 'Alls',
      value: 'all',
    },
  ],

  current: 'all',
})
</script>

<template>
  <ul class="tabs-list">
    <li
      v-for="(tab, index) in tabs"
      :key="index"
      class="itemlist"
      :data-active="current === tab.value"
    >
      <button class="button-tab" @click="emit('update:current', tab.value)">
        <slot :item="tab">
          {{ tab.text }}
        </slot>
      </button>
    </li>
  </ul>
</template>

<style lang="scss">
.tabs-list {
  @apply flex relative;

  > .itemlist {
    @apply relative mx-4;

    &::before {
      @apply absolute
        bottom-0 w-0 h-1
      bg-brand-primary-medium;

      content: "";
      transition: width 250ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    &[data-active="true"]::before {
      width: 100%;
    }

    &[data-active="true"] > .button-tab {
      @apply font-bold;
    }
  }

  > .itemlist > .button-tab {
    @apply py-3 px-2
      bg-transparent border-none cursor-pointer;

    transition: color 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
}
</style>
