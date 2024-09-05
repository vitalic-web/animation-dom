<script setup lang="ts">
import { getImgUrl } from '../utils';
</script>

<template>
  <div class="info-panel">
    <div class="info-panel__jackpot">
      <img class="info-panel__jackpot-img" :src="getImgUrl('JackPot.png')" alt="JackPot">
      <p class="info-panel__jackpot-sum">8 380</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.info-panel {
  display: flex;
  flex-direction: column;

  &__jackpot {
    display: flex;
    align-items: flex-end;
    gap: 8px;

    &-img {
      width: 128px;
    }

    &-sum {
      color: #d6d6d6;
      margin-bottom: 2px;
      font-size: 27px;
      font-weight: 400;
      line-height: 1;
    }
  }
}
</style>