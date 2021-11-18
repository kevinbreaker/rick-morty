<script lang="ts" setup>
import { ref, computed } from 'vue'

import Textfield from './Textfield.vue'

const passwordIsVisible = ref(false)
const inputType = computed(() => passwordIsVisible.value ? 'text' : 'password')
</script>

<template>
  <Textfield required :type="inputType" label="Sua senha" placeholder="Insira sua senha">
    <template #icon>
      <button
        type="button"
        data-testid="toggle-type-password"
        @click="passwordIsVisible = !passwordIsVisible"
      >
        <mdi:eye v-show="passwordIsVisible" />
        <mdi:eye-off v-show="!passwordIsVisible" />
      </button>
    </template>
  </Textfield>
</template>
