<script setup lang="ts">
import KenoAnimation from '../animations/KenoAnimation.vue';
import BallsAnimation from '../animations/BallsAnimation.vue';
import TimerBarAnimation from '../animations/TimerBarAnimation.vue';
import CardsLIst from './CardsList.vue';
import Tabs from './Tabs.vue';
import Info from './InfoPanel.vue';
import { storeToRefs } from 'pinia';
import { useTabsStore } from '../stores/tabsStore';

const { selectedTabName } = storeToRefs(useTabsStore());
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
      <TimerBarAnimation class="game-main__header-timer" />
    </div>
    <div class="game-main__field">
      <CardsLIst
        v-if="selectedTabName === 'ИГРА'"
        class="game-main__field-cards"
      />
      <div v-if="selectedTabName === 'ВИДЕО'" style="color: white;">
        ВИДЕО
      </div>
      <div v-if="selectedTabName === 'ИСТОРИЯ'" style="color: white;">
        ИСТОРИЯ
      </div>
      <div v-if="selectedTabName === 'СТАТИСТ'" style="color: white;">
        СТАТИСТ
      </div>
      <Tabs class="game-main__field-tabs" />
      <Info class="game-main__field-info" />
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
    flex-direction: column;
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

  &__header-timer {
    margin-top: 8px;
  }

  &__field {
    display: flex;
    margin: -4px 0 0 25px;
    position: relative;
  }

  &__field-cards {
    margin-right: 5px;
  }

  &__field-tabs {
    position: absolute;
    left: 500px;
    top: 21px;
  }

  &__field-info {
    position: absolute;
    left: 584px;
    top: 6px;
  }
}
</style>