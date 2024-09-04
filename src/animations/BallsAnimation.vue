<script setup lang="ts">
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import { IBall } from '../types';
import { generateUniqueRandomNumbers } from '../utils';

const ballContainer = ref<HTMLElement | null>(null);
const balls = ref<IBall[]>([]);

const createBalls = () => {
  const randomNumbers = generateUniqueRandomNumbers(20, 80);
  const startX = 817;
  const startY = 10.5;
  const ballSize = 37;

  balls.value.length = 0;
  
  randomNumbers.forEach((number, index) => {
    balls.value.push({
      x: startX + index * (ballSize + 2), // отступ между шариками
      y: startY,
      size: ballSize,
      number,
      rotation: 0,
    });
  });
};

const animateBalls = () => {
  const timeline = gsap.timeline();

  balls.value.forEach((ball, index) => {
    timeline.to(ball, {
      duration: 1.2,
      x: '-=800', // движение шариков влево
      rotation: -360,
      ease: "power2.inOut",
      onComplete: () => {
        // Запуск следующего шарика, если это не последний
        if (index < balls.value.length - 1) {
          timeline.play();
        }
      },
    });
  });
};

const getTransformString = (ball: IBall): string => `translate(${ball.x}px, ${ball.y}px) rotate(${ball.rotation}deg)`;

onMounted(() => {
  createBalls();
  animateBalls();
});
</script>

<template>
  <div ref="ballContainer" class="ball-animation">
    <div
      v-for="(ball, index) in balls"
      :key="index"
      class="ball-animation__item"
      :style="{ transform: getTransformString(ball) }"
    >
      {{ ball.number }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ball-animation {
  position: relative;
  width: 100%;
  height: 100px;
  overflow: hidden;

  &__item {
    position: absolute;
    width: 37px;
    height: 37px;
    background-image: url('../assets/pictures/ball.png');
    background-size: cover;
    background-position: center;
    color: #000;
    font-size: 18px;
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    user-select: none;
  }
}
</style>
