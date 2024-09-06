<script setup lang="ts">
import { getImgUrl } from '../utils';
import ProgressAnimation from '../animations/ProgressAnimation.vue';
</script>

<template>
  <div class="statistics">
    <img
      class="statistics__background"
      :src="getImgUrl('hotcold-bg.png')"
      alt="Game statistics image"
    />
    <ProgressAnimation class="statistics__progress-1" :target-percentage="32" />
    <ProgressAnimation class="statistics__progress-2" :target-percentage="67" />
    <ProgressAnimation class="statistics__progress-3" :target-percentage="90" />
  </div>
</template>

<style lang="scss" scoped>
.statistics {
  width: 100%;
  height: 93.5%;
  position: relative;

  &__background {
    width: 100%;
    height: 100%;
  }

  &__progress-1 {
    position: absolute;
    top: 0;
    left: 0;
  }

  &__progress-2 {
    position: absolute;
    top: 0;
    left: 50px;
  }

  &__progress-3 {
    position: absolute;
    top: 0;
    left: 100px;
  }
}
</style>