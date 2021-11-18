<script lang="ts" setup>
import Textfield from './Textfield.vue'

const emit = defineEmits<{
  (e: 'search', value: string): void
}>()

function search() {
  const input = document.getElementById('input-search') as HTMLInputElement
  emit('search', input.value)
}
</script>

<template>
  <Textfield id="search" required placeholder="Pesquisar.." @keyup.enter.stop="search">
    <template #icon>
      <button type="button" data-testid="search-button" @click="search">
        <fa:search />
      </button>
    </template>
  </Textfield>
</template>
