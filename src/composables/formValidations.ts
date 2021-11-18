import { ref, computed } from 'vue'

export type InputEvent = {
  target: HTMLInputElement
}

export type ValidationMessages = {
  required?: string
  pattern?: string
  custom?: string
  min?: string
}

export function useValidation(messages?: ValidationMessages, withReport = false) {
  const error = ref('')
  const validationMessages = computed(() => messages ?? {})

  function validate(event: unknown) {
    const { target } = event as InputEvent

    const validity = target.validity

    const magicReferences: Record<keyof ValidityState, keyof ValidationMessages> = {
      tooShort: 'min',

      badInput: 'custom',
      customError: 'custom',

      valueMissing: 'required',

      patternMismatch: 'pattern',
      typeMismatch: 'pattern',

      valid: 'custom',
      tooLong: 'custom',
      stepMismatch: 'custom',
      rangeUnderflow: 'custom',
      rangeOverflow: 'custom',
    }

    Object.keys(magicReferences).forEach((_key) => {
      const key = _key as keyof ValidityState

      if (validity[key]) {
        const propMessage = magicReferences[key]
        error.value = validationMessages.value[propMessage] ?? messages?.[propMessage] ?? target.validationMessage
      }
    })
  }

  function checkValidity(event: unknown) {
    const { target } = event as InputEvent

    target.checkValidity()
      ? (error.value = '')
      : withReport ? target.reportValidity() : validate(event)
  }

  return {
    error,
    validate,
    checkValidity,
  }
}
