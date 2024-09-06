<script setup lang="ts">
import { ref } from 'vue';
import { getImgUrl } from '../utils';
import { IHistory, ICoupon } from '../types';

const items: IHistory[] = Array.from({ length: 5 }, (_, i) => {
  return { number: `number${i + 1}`, balls: `balls${i + 1}` }
});

const items2: ICoupon[] = Array.from({ length: 6 }, (_, i) => {
  return { 
    balls: `balls${i + 1}`,
    bet: `bet${i + 1}`,
    x: `x${i + 1}`,
    winnings: `winnings${i + 1}`,
  }
});

const isTableExpanded = ref(true);
const isTable2Expanded = ref(true);
const isVisible = ref(true);

const toggleTable = () => {
  isTableExpanded.value = !isTableExpanded.value;
};

const toggleTable2 = () => {
  console.log('toggleTable2');
};

const toggleVisibility = () => {
  isVisible.value = !isVisible.value;
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
        <img
          :class="[
            'info-panel__table-arrow',
            { 'info-panel__table-arrow_expanded': isTableExpanded }
          ]"
          :src="getImgUrl('expand.png')"
          alt="Arrow Image"
        >
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

    <div class="info-panel__table">
      <div class="info-panel__table-header" colspan="2">
        <img class="info-panel__table-img" :src="getImgUrl('table-header.png')" alt="Header Image">
        <p class="info-panel__table-title">КУПОН</p>
        <img
          :class="[
            'info-panel__table-arrow',
            { 'info-panel__table-arrow_expanded': isTable2Expanded }
          ]"
          :src="getImgUrl('expand.png')"
          alt="Arrow2 Image"
        >
        <div class="info-panel__table-click-area" @click="toggleTable2" />
        <img
          class="info-panel__table-eye"
          :src="getImgUrl(isVisible ? 'eye-icon-min.png' : 'eye-closed-icon-min.png')"
          alt="Eye Icon"
          @click="toggleVisibility"
        >
      </div>
      <div class="info-panel__table-inner">
        <table>
          <thead>
            <tr>
              <th class="info-panel__table-header-text">Шары</th>
              <th>Ставка</th>
              <th>Х</th>
              <th>Выигрыш</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item2, index2) in (isTable2Expanded ? items2 : [items2[0]])"
              :key="index2 + 'tr2'"
              :class="{ 
                'info-panel__table-odd-row': index2 % 2 === 0,
                'info-panel__table-even-row': index2 % 2 !== 0,
              }"
            >
              <td>{{ item2.balls }}</td>
              <td class="info-panel__table-row-value">{{ item2.bet }}</td>
              <td> {{ item2.x }}</td>
              <td>{{ item2.winnings }}</td>
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
    flex-direction: column;
    margin-top: 8px;
    position: relative;
    border-radius: 4px;
    overflow: hidden;

    &-inner {
      overflow: hidden;
      margin-top: -16px;
      z-index: 1;
      width: 100%;
    }

    &-header {
      width: 279px;
      position: relative;
      padding: 0;
      margin: 0;
      border: none;
      background: #fff;
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

      &_expanded {
        transform: rotate(90deg);
      }
    }

    &-eye {
      position: absolute;
      top: 4px;
      right: 101px;
      width: 21px;

      &:hover {
        cursor: pointer;
      }
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