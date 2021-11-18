<script setup lang="ts">
</script>

<template>
  <main class="home-page">
    <section class="flex mb-8 items-center">
      <CharacterList />
    </section>
  </main>
</template>

<style lang="scss">
.home-page {
  @apply flex flex-col items-center
  min-h-screen w-screen pt-6 pb-10
  overflow-x-hidden bg-dark-200;

  &::before {
    content: "";
    pointer-events: none;
    position: fixed;
    display: inline-block;
    background-image: url("/rick-morty-portal.png");
    background-size: contain;
    height: 70vmin;
    width: 70vmin;
    background-repeat: no-repeat;

    // transition: all 2s;
    animation: portal 12s linear infinite;
    // filter: back0px 0px 2px 4px green;
    filter: drop-shadow(0px 0px 30px #ec0000);
    left: calc(50% - 35vmin);
    top: calc(50% - 35vmin);
  }
}

@keyframes portal {
  from {
    transform: rotateZ(0deg);
  }
  to {
    transform: rotateZ(360deg);
    filter: drop-shadow(10px 14px 1px #ac0000);
  }
}
</style>
