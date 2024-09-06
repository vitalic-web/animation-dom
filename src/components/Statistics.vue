<script setup lang="ts">
import { getImgUrl, getRandomNumber } from '../utils';
import ProgressAnimation from '../animations/ProgressAnimation.vue';

const progressBarsHot = [
  { targetPercentage: getRandomNumber(100), offset: 45, type: 'hot', },
  { targetPercentage: getRandomNumber(100), offset: 125, type: 'hot', },
  { targetPercentage: getRandomNumber(100), offset: 204.5, type: 'hot', },
  { targetPercentage: getRandomNumber(100), offset: 284, type: 'hot', },
  { targetPercentage: getRandomNumber(100), offset: 364, type: 'hot', },
  { targetPercentage: getRandomNumber(100), offset: 443.5, type: 'hot', },
  { targetPercentage: getRandomNumber(100), offset: 45, type: 'cold', },
  { targetPercentage: getRandomNumber(100), offset: 125, type: 'cold', },
  { targetPercentage: getRandomNumber(100), offset: 204.5, type: 'cold', },
  { targetPercentage: getRandomNumber(100), offset: 284, type: 'cold', },
  { targetPercentage: getRandomNumber(100), offset: 364, type: 'cold', },
  { targetPercentage: getRandomNumber(100), offset: 443.5, type: 'cold', },
];

const numsData = [
  { value: getRandomNumber(100), top: 92, left: 45, },
  { value: getRandomNumber(100), top: 92, left: 125, },
  { value: getRandomNumber(100), top: 92, left: 204, },
  { value: getRandomNumber(100), top: 92, left: 283, },
  { value: getRandomNumber(100), top: 92, left: 363, },
  { value: getRandomNumber(100), top: 92, left: 443, },
  { value: getRandomNumber(100), top: 241, left: 45, },
  { value: getRandomNumber(100), top: 241, left: 125, },
  { value: getRandomNumber(100), top: 241, left: 204, },
  { value: getRandomNumber(100), top: 241, left: 283, },
  { value: getRandomNumber(100), top: 241, left: 363, },
  { value: getRandomNumber(100), top: 241, left: 443, },
];
</script>

<template>
  <div class="statistics">
    <img
      class="statistics__background"
      :src="getImgUrl('hotcold-bg.png')"
      alt="Game statistics image"
    />
    <ProgressAnimation
      v-for="(bar, index) in progressBarsHot"
      :key="index + 'pb'"
      :class="`statistics__progress-${bar.type}`"
      :style="{ left: `${bar.offset}px` }"
      :target-percentage="bar.targetPercentage"
      :is-cold="bar.type === 'cold'"
    />
    <div
      v-for="(num, index) in numsData"
      :key="index + 'pb'"
      class="statistics__num"
      :style="{ top: `${num.top}px`, left: `${num.left}px` }"
    >
      {{ num.value }}
    </div>
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

  &__progress-hot {
    position: absolute;
    top: 0;
  }

  &__progress-cold {
    position: absolute;
    top: 148px;
  }

  &__num {
    position: absolute;
    color: #fff;
    font-size: 31px;
    font-weight: 400;
    width: 74px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
