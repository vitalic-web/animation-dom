<script setup lang="ts">
import KenoAnimation from '../animations/KenoAnimation.vue';
import BallsAnimation from '../animations/BallsAnimation.vue';
</script>

<template>
  <div class="game-main">
    <div class="game-main__header">
      <div class="game-main__header-balls">
        <div class="game-main__header-title-container">
          <KenoAnimation />
          <p class="game-main__header-title-text">
            #799813
          </p>
        </div>
        <BallsAnimation />
      </div>
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

  &__header-balls {
    width: 100%;
    display: flex;
  }

  &__header-title-container {
    margin: 8px 0 0 7px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__header-title-text {
    font-size: 15px;
    color: #FFA500;
  }

  p {
    margin: 0;
  }
}
</style>