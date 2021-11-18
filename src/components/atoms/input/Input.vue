<template>
  <input class="input-core" />
</template>

<style lang="scss">
.input-core {
  @apply max-h-12 px-4 py-4
    bg-white
    box-border cursor-pointer rounded-md;

  border-width: 1px;
  border-color: #d4d4d4;
  border-style: solid;

  &.-small-input {
    @apply max-h-10;
  }

  &:focus {
    box-shadow: 0px 0px 0px 2px #afb0b240;
  }

  &:active {
    box-shadow: 0px 0px 0px 2px #2a55d940;
  }

  &.-error:invalid {
    @apply border-t-supports-negative-dark;
    box-shadow: 0px 0px 0px 2px #e5243d40;
  }

  &:disabled {
    @apply bg-light-grey-light;
  }
}
</style>
