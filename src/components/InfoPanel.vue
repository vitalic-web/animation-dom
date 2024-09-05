<script setup lang="ts">
import { getImgUrl } from '../utils';

const items = [
  {
    name: 'name1',
    value: 'value1',
  },
  {
    name: 'name2',
    value: 'value2',
  },
  {
    name: 'name3',
    value: 'value3',
  },
  {
    name: 'name4',
    value: 'value4',
  },
  {
    name: 'name5',
    value: 'value5',
  },
];
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
      </div>
      <table class="info-panel__table-inner">
        <thead>
          <tr>
            <th>#</th>
            <th>Шары</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in items"
            :key="index + 'tr'"
            :class="{ 
              'info-panel__table-odd-row': index % 2 === 0,
              'info-panel__table-even-row': index % 2 !== 0,
            }"
          >
            <td>{{ item.name }}</td>
            <td>{{ item.value }}</td>
          </tr>
        </tbody>
      </table>
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

    &-img {
      width: 100%;
      height: auto;
      display: block;
    }

    &-title {
      position: absolute;
      top: 0;
      left: 9px;
      color: #000;
      margin: 0;
    }

    &-odd-row {
      background: #99ceb3;
      opacity: 0.7;
    }

    &-even-row {
      background: #c8e6d7;
      opacity: 0.7;
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
}
</style>