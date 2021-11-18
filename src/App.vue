<script setup lang="ts">

import { DefaultApolloClient } from '@vue/apollo-composable'
import { apolloClient } from '@services/index'

useHead({
  title: 'Rick and morty',
  meta: [
    { name: 'description', content: 'Using graphql API' },
  ],
})

provide(DefaultApolloClient, apolloClient)

</script>

<template>
  <div>
    <router-view />
  </div>
</template>

<style lang="scss">

</style>
