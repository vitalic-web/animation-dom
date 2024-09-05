<script setup lang="ts">
import { ref, watch } from 'vue';
import { gsap } from 'gsap';

const cards = Array.from({ length: 80 }, (_, i) => i + 1);
const cardRefs = ref<Array<HTMLElement | null>>([]); // Массив для хранения рефов на карточки
const activeCardIndex = ref<number | null>(null); // Хранит индекс активной карточки

// TODO: Поворот влево и вправо с подергиванием в начале
const animateSwing = (el: HTMLElement) => {
  return gsap.fromTo(el,
    { rotation: 10 }, // Начальное положение (вправо на 10 градусов)
    {
      rotation: -10,
      duration: 0.5,
      yoyo: true,
      repeat: -1,
      ease: 'power1.inOut',
      transformOrigin: '50% 50%',
    });
};

// TODO: Плавный поворот только вправо
// const animateSwing = (el: HTMLElement) => {
//   return gsap.to(el, {
//     rotation: 10,            
//     duration: 0.5,             
//     yoyo: true,                
//     repeat: -1,               
//     ease: 'power1.inOut',      
//     transformOrigin: '50% 50%'
//   });
// };

// Обработчик кликов по карточке
const handleCardClick = (index: number) => {
  const previousActiveCardIndex = activeCardIndex.value;
  // Если та же карточка нажата снова — выключить анимацию
  if (previousActiveCardIndex === index) {
    stopSwingAnimation(index);
    activeCardIndex.value = null;
  } else {
    // Остановить анимацию предыдущей активной карточки, если она есть
    if (previousActiveCardIndex !== null) {
      stopSwingAnimation(previousActiveCardIndex);
    }
    // Запустить анимацию новой карточки
    startSwingAnimation(index);
    activeCardIndex.value = index;
  }
};

// Запуск анимации качания
const startSwingAnimation = (index: number) => {
  const el = cardRefs.value[index];
  if (el) {
    el.classList.add('hovered'); // Добавляем класс для изменения фона
    animateSwing(el);
  }
};

// Остановка анимации
const stopSwingAnimation = (index: number) => {
  const el = cardRefs.value[index];
  if (el) {
    el.classList.remove('hovered'); // Убираем класс
    gsap.killTweensOf(el); // Останавливаем анимацию
    gsap.set(el, { rotation: 0 }); // Сбрасываем вращение
  }
};

// Watcher для очистки анимации при размонтировании компонента
watch(activeCardIndex, (newIndex, oldIndex) => {
  if (oldIndex !== null && newIndex === null) {
    stopSwingAnimation(oldIndex);
  }
});
</script>

<template>
  <div class="card-list">
    <div
      v-for="(card, index) in cards"
      :key="card + 'c'"
      class="card-item"
      ref="cardRefs"
      @click="handleCardClick(index)"
    >
      {{ card }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-list {
  display: grid;
  grid-template-columns: repeat(10, 52px);
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
  width: 52px;
  height: 40px;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover,
  &.hovered {
    background: url('../assets/pictures/zone-selected.png');
    background-size: cover;
    background-position: center;
  }
}
</style>
