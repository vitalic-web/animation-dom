<script setup lang="ts">
const cards = Array.from({ length: 80 }, (_, i) => i + 1);
</script>

<template>
  <div class="card-list">
    <div v-for="card in cards" :key="card" class="card-item">
      {{ card }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-list {
  display: grid;
  grid-template-columns: repeat(10, 50px);
  gap: 1px;
}

.card-item {
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('../assets/pictures/zone.png');
  background-size: cover;
  background-position: center;
  font-size: 20px;
  color: #fff;
  width: 50px;
  height: 40px;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;

  &:hover {
    background: url('../assets/pictures/zone-selected.png');
    background-size: cover;
    background-position: center;
    cursor: pointer;
  }
}
</style>
