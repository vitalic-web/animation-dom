<script setup lang="ts">
import { ref } from 'vue';
import { getImgUrl } from '../utils';

const items = Array.from({ length: 5 }, (_, i) => {
  return { number: `number${i + 1}`, balls: `balls${i + 1}` }
});

const items2 = Array.from({ length: 6 }, (_, i) => {
  return { 
    balls: `balls${i + 1}`,
    bet: `bet${i + 1}`,
    x: `x${i + 1}`,
    winnings: `winnings${i + 1}`,
  }
});

console.log('items2', items2);

const isTableExpanded = ref(true);

const toggleTable = () => {
  isTableExpanded.value = !isTableExpanded.value;
};
</script>

<template>
  <div class="info-panel">
    <div class="info-panel__jackpot">
      <img class="info-panel__jackpot-img" :src="getImgUrl('JackPot.png')" alt="JackPot">
      <p class="info-panel__jackpot-sum">8 380</p>
    </div>
    <div class="info-panel__green-squares">
      <div
        v-for="(_item, index) in 5"
        class="info-panel__green-squares-item"
        :key="index + 'gs'"
      />
    </div>
    <div class="info-panel__table">
      <div class="info-panel__table-header" colspan="2">
        <img class="info-panel__table-img" :src="getImgUrl('table-header.png')" alt="Header Image">
        <p class="info-panel__table-title">ИСТОРИЯ</p>
        <img class="info-panel__table-arrow" :src="getImgUrl('expand.png')" alt="Expand Image">
        <div class="info-panel__table-click-area" @click="toggleTable" />
      </div>
      <div class="info-panel__table-inner">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th class="info-panel__table-header-text">Шары</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in (isTableExpanded ? items : [items[0]])"
              :key="index + 'tr'"
              :class="{ 
                'info-panel__table-odd-row': index % 2 === 0,
                'info-panel__table-even-row': index % 2 !== 0,
              }"
            >
              <td>{{ item.number }}</td>
              <td class="info-panel__table-row-value">{{ item.balls }}</td>
            </tr>
          </tbody>
        </table>
      </div>
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

  &__green-squares {
    display: flex;
    gap: 1.5px;

    &-item {
      width: 5.5px;
      height: 2px;
      background: #00ff00;
    }
  }

  &__table {
    display: flex;
    margin-top: 8px;
    position: relative;

    &-inner {
      position: absolute;
      left: 0;
      top: 22px;
      width: 100%;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      overflow: hidden;
    }

    &-header {
      width: 279px;
      position: relative;
      padding: 0;
      margin: 0;
      border: none;
      background: #fff;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }

    &-header-text {
      text-align: start;
      padding-left: 6px;
    }

    &-click-area {
      width: 279px;
      height: 21px;
      position: absolute;
      top: 0;
      left: 0;

      &:hover {
        cursor: pointer;
      }
    }

    &-img {
      width: 100%;
      height: auto;
      display: block;
    }

    &-arrow {
      position: absolute;
      top: 5px;
      right: 10px;
      width: 5px;
    }

    &-title {
      position: absolute;
      top: 2px;
      left: 9px;
      color: #000;
      margin: 0;
      font-size: 15px;
      font-weight: 400;
      letter-spacing: 0px;
    }

    &-odd-row {
      background: #99ceb3;
      opacity: 0.7;
    }

    &-even-row {
      background: #c8e6d7;
      opacity: 0.7;
    }

    &-row-value {
      text-align: start;
      padding-left: 6px;
    }
  }
}

table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
}

thead th {
  padding: 0;
  margin: 0;
  border: none;
  color: #484747;
}

tbody td {
  padding: 0;
  text-align: center;
  box-shadow: none;
  box-sizing: border-box;
}

th:first-child, td:first-child {
  border-spacing: 0;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border-right: 1px solid #ccc;
  width: 48px;
}

td, th {
  height: 12px;
  text-align: center;
  vertical-align: middle;
  font-size: 10px;
  height: 16px;
  font-weight: 400;
  color: #000;
}
</style>