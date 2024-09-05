<script setup lang="ts">
import { ref } from 'vue';

const tabs = ['ИГРА', 'ВИДЕО', 'ИСТОРИЯ', 'СТАТИСТ'];
const cardRefs = ref<Array<HTMLElement | null>>([]);
</script>

<template>
  <div class="tabs">
    <div
      class="tabs__item"
      v-for="(tab, index) in tabs"
      :key="index + 't'"
      ref="cardRefs"
    >
      {{ tab }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tabs {
  display: flex;
  flex-direction: column;
  gap: 45px;
  margin-left: -17px;
  margin-top: 20px;
  width: 38px;

  &__item {
    color: #000;
    width: 78px;
    height: 38px;
    background: url('/src/assets/pictures/tab.png');
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: rotate(-90deg);
    transform-origin: center center;
    font-size: 11px;
    font-weight: 400;

    &:hover {
      cursor: pointer;
      background: url('/src/assets/pictures/tab-selected.png');
      background-size: cover;
      background-position: center;
    }
  }
}
</style>