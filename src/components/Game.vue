<script setup lang="ts">
import GameHeader from './GameHeader.vue';
import GameMain from './GameMain.vue';
</script>

<template>
  <div class="game">
    <GameHeader />
    <GameMain />
  </div>
</template>

<style lang="scss" scoped>
.game {
  width: 920px;
}
</style>