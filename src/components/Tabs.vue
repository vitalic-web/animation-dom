<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useTabsStore } from '../stores/tabsStore';

const { tabs } = storeToRefs(useTabsStore());
const { selectTab } = useTabsStore();
</script>

<template>
  <div class="tabs">
    <div
      :class="['tabs__item', { 'tabs__item_pressed': tab.isPressed }]"
      v-for="(tab, index) in tabs"
      :key="index + 't'"
      @click="selectTab(tab.name)"
    >
      {{ tab.name }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tabs {
  display: flex;
  flex-direction: column;
  gap: 45px;
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

    &_pressed {
      background: url('/src/assets/pictures/tab-pressed.png');
      background-size: cover;
      background-position: center;
      color: #fff;

      &:hover {
        cursor: pointer;
        background: url('/src/assets/pictures//tab-pressed.png');
        background-size: cover;
        background-position: center;
      }
    }
  }
}
</style>