<script lang='ts' setup>

import { useValidation } from '@/composables/formValidations'
import type { ValidationMessages } from '@/composables/formValidations'

const props = defineProps<{
  id?: string
  class?: string
  label?: string
  hint?: string
  value?: string

  validationMessages?: ValidationMessages
}>()

const emit = defineEmits<{
  (e: 'update:value', event: string): void
}>()

const { error, validate, checkValidity } = useValidation(props?.validationMessages)

function showHint(hint?: string, error?: string): boolean {
  return !!hint && !error
}

function ariaDescribedby(hint?: string, error?: string): string | null {
  if (props.id) {
    if (error)
      return `error-${props.id}`

    if (showHint(hint, error))
      return `hint-${props.id}`
    return null
  }

  return null
}
</script>

<template>
  <div
    :id="id ? `textfield-${id}` : undefined"
    :data-testid="id ? `textfield-${id}` : undefined"
    :class="`${$props.class ?? ''}`"
    class="textfield-core"
  >
    <label v-if="label" :for="`input-${id}`" class="label">{{ label }}</label>

    <div class="container-input">
      <Input
        v-bind="$attrs"
        :id="id ? `input-${id}` : undefined"
        :data-testid="`input-${id}`"
        :class="error && '-error'"
        class="input"
        :value="value"
        :aria-invalid="!!error"
        :aria-describedby="ariaDescribedby(hint, error)"
        @invalid="validate"
        @change="checkValidity"
        @input="emit('update:value', $event.target.value)"
      />
      <slot name="icon"></slot>
    </div>

    <span v-if="showHint(hint, error)" class="hint">{{ hint }}</span>
    <span v-else-if="error" :id="`error-${id}`" class="error">{{ error }}</span>
  </div>
</template>

<style lang="scss">
.textfield-core {
  @apply flex flex-col;

  > .label {
    @apply mb-1 text-left text-xs;
  }

  > .container-input {
    @apply relative;

    > .input {
      @apply w-full;
    }

    > .input ~ * {
      @apply absolute;

      // The icon size is 24px so half size is 12px
      top: calc(50% - 10px);
      right: calc(24px - 12px);
    }
  }

  > .hint,
  > .error {
    @apply mt-1 text-xs text-left select-none;
  }

  > .error {
    @apply text-supports-negative-medium font-bold;
  }
}
</style>
