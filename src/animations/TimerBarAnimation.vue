<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import gsap from 'gsap';
import { formatTime } from '../utils';

const initialTime = 45; // начальное время
let remainingTime = ref(initialTime);
let progressWidth = ref(0);

const progressBar = ref<HTMLDivElement | null>(null);
const progressText = ref<HTMLSpanElement | null>(null);
const timeText = ref<HTMLSpanElement | null>(null);

const formattedTime = computed(() => formatTime(remainingTime.value));

const applyTextGradient = (element: HTMLElement | null, barWidth: number, elementStartX: number, elementWidth: number) => {
  if (barWidth > elementStartX) {
    const overlapWidth = Math.min(barWidth - elementStartX, elementWidth);
    const overlapPercentage = overlapWidth / elementWidth;

    element!.style.backgroundImage = `linear-gradient(
      to right,
      #000 ${overlapPercentage * 100}%,
      #fff ${overlapPercentage * 100}%
    )`;
    element!.style.backgroundClip = 'text';
    element!.style.backgroundClip = 'text';
    element!.style.color = 'transparent';
  } else {
    element!.style.color = '#fff';
    element!.style.backgroundImage = '';
  }
};

const updateTextColor = () => {
  const barWidth = progressBar.value?.offsetWidth || 0;

  // Окрашиваем текст
  const textStartX = progressText.value?.offsetLeft || 0;
  const textWidth = progressText.value?.offsetWidth || 0;
  applyTextGradient(progressText.value, barWidth, textStartX, textWidth);

  // Окрашиваем таймер
  const timeStartX = timeText.value?.offsetLeft || 0;
  const timeWidth = timeText.value?.offsetWidth || 0;
  applyTextGradient(timeText.value, barWidth, timeStartX, timeWidth);
};

// Анимация прогресс-бара
const animateProgressLine = () => {
  gsap.to({ progress: 0 }, {
    duration: initialTime,
    progress: 1,
    onUpdate: function () {
      const progress = this.targets()[0].progress as number;
      progressWidth.value = progress * 100; // значение в процентах
      remainingTime.value = Math.ceil(initialTime - initialTime * progress);

      // Обновление ширины прогресс-бара
      if (progressBar.value) {
        progressBar.value.style.width = `${progressWidth.value}%`;
      }

      updateTextColor(); // Обновляем цвет текста при каждом обновлении анимации
    },
    onComplete: () => {
      remainingTime.value = 0;
      // Окрашиваем полоску в красный и убираем текст
      if (progressBar.value && progressText.value) {
        progressBar.value.style.backgroundColor = '#bf362d';
        // progressText.value.style.visibility = 'hidden';
      }
    },
  });
};

onMounted(() => {
  animateProgressLine();
});
</script>

<template>
  <div class="timer-bar-animation">
    <div class="timer-bar-animation__progress-bar" ref="progressBar"></div>
    <div class="timer-bar-animation__text-container">
      <span
        ref="progressText"
        class="timer-bar-animation__progress-text"
      >
        ДEЛАЙТЕ ВАШИ СТАВКИ
      </span>
      <span ref="timeText" class="timer-bar-animation__time-text">{{ formattedTime }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.timer-bar-animation {
  position: relative;
  width: 100%;
  height: 15px;
  background-color: #000;
  display: flex;
  align-items: center;

  &__progress-bar {
    position: absolute;
    height: 88%;
    background-color: #02a651;
    width: 0;
  }

  &__text-container {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    transform: translateY(-50%);
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0 10px;
  }

  &__progress-text {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-family: Arial, sans-serif;
    font-size: 12px;
    color: #fff;
    text-align: center;
    background-clip: text;
  }

  &__time-text {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    font-family: Arial, sans-serif;
    font-size: 12px;
    color: #fff;
    white-space: nowrap;
    background-clip: text;
  }
}
</style>
