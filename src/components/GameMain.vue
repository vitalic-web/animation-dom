<script setup lang="ts">
import KenoAnimation from '../animations/KenoAnimation.vue';
import BallsAnimation from '../animations/BallsAnimation.vue';
import TimerBarAnimation from '../animations/TimerBarAnimation.vue';
import CardsLIst from './CardsList.vue';
import Statistics from './Statistics.vue';
import Tabs from './Tabs.vue';
import InfoPanel from './InfoPanel.vue';
import { storeToRefs } from 'pinia';
import { useTabsStore } from '../stores/tabsStore';
import { getImgUrl } from '../utils';
import { ref, watch } from 'vue';
import { gsap } from 'gsap';

const { selectedTabName } = storeToRefs(useTabsStore());
const animatedContentRef = ref(null);
const currentTab = ref(selectedTabName.value);

watch(selectedTabName, (newTab, oldTab) => {
  if (newTab !== oldTab) {
    const container = animatedContentRef.value;

    gsap.to(container, {
      rotateX: 90,
      duration: 0.1,
      onComplete: () => {
        // Меняем активный таб только после завершения первой анимации
        currentTab.value = newTab;

        // Поворачиваем новый контент обратно
        gsap.fromTo(container, { rotateX: -90 }, { rotateX: 0, duration: 0.1 });
      }
    });
  }
});
</script>

<template>
  <div class="game-main">
    <div class="game-main__header">
      <div class="game-main__header-balls">
        <div class="game-main__header-title-container">
          <KenoAnimation />
          <p class="game-main__header-title-text">#799813</p>
        </div>
        <BallsAnimation />
      </div>
      <TimerBarAnimation class="game-main__header-timer" />
    </div>
    <div class="game-main__field">
      <div class="game-main__field-content" ref="animatedContentRef">
        <CardsLIst
          v-if="currentTab === 'ИГРА'"
          class="game-main__field-cards"
        />
        <div v-if="currentTab === 'ВИДЕО'" class="game-main__video-tab">
          <img
            class="game-main__video-tab-img"
            :src="getImgUrl('unavailable.png')"
            alt="Unavailable Image"
          />
        </div>
        <div v-if="currentTab === 'ИСТОРИЯ'" style="color: white;">
          <Test />
        </div>
        <div v-if="currentTab === 'СТАТИСТ'" class="game-main__statistics-tab">
          <p class="game-main__statistics-tab-title">Рейтинг выпадения шаров за последние 100 раундов</p>
          <Statistics />
        </div>
      </div>
      <Tabs class="game-main__field-tabs" />
      <InfoPanel class="game-main__field-info" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.game-main {
  width: 100%;
  height: 520px;
  background-image: url('../assets/pictures/bg-window.jpg');
  background-size: cover;
  background-position: center;

  &__header {
    width: 100%;
    height: 90px;
    display: flex;
    flex-direction: column;
    background-image: url('../assets/pictures/header.png');
    background-size: cover;
    background-position: center;
  }

  &__header-balls {
    width: 100%;
    display: flex;
  }

  &__header-title-container {
    margin: 8px 0 0 7px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__header-title-text {
    font-size: 15px;
    color: #FFA500;
  }

  &__header-timer {
    margin-top: 8px;
  }

  &__field {
    display: flex;
    margin: -4px 0 0 25px;
    position: relative;
    align-items: center;
    height: 327px;
    perspective: 1000px; /* Перспектива для 3D-эффекта */
  }

  &__field-content {
    width: 529px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  &__field-cards {
    margin-right: 5px;
  }

  &__field-tabs {
    position: absolute;
    left: 514px;
    top: 21px;
  }

  &__field-info {
    position: absolute;
    left: 596px;
    top: 6px;
  }

  &__video-tab {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 529px;
    height: 327px;
    margin-right: 5px;

    &-img {
      width: 80%;
    }
  }

  &__statistics-tab {
    width: 529px;
    height: 322px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    box-shadow: inset 0 0 0 3px rgba(0, 0, 0, 0.3);
    background: rgba(0, 0, 0, 0.5);
    border-radius: 3px;
    box-sizing: border-box;
    padding: 5px;

    &-title {
      color: #fff;
      text-transform: uppercase;
      font-size: 15.5px;
      font-weight: 400;
    }
  }
}
</style>
