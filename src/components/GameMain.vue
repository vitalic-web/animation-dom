<script setup lang="ts">
import KenoAnimation from '../animations/KenoAnimation.vue';
</script>

<template>
  <div class="game-main">
    <div class="game-main__header">
      <KenoAnimation class="game-main__header-animation" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.game-main {
  width: 100%;
  height: 520px;
  background-image: url('../assets/pictures/bg-window.jpg');
  background-size: cover;
  background-position: center;

  &__header {
    width: 100%;
    height: 90px;
    display: flex;
    background-image: url('../assets/pictures/header.png');
    background-size: cover;
    background-position: center;
  }

  &__header-animation {
    margin: 8px 0 0 7px;
  }
}
</style>