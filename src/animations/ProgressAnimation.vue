<script setup lang="ts">
import { ref, computed, onMounted, toRefs } from 'vue';
import { gsap } from 'gsap';

const props = defineProps({
  targetPercentage: {
    type: Number,
    required: true,
    default: 0,
  }
});

const { targetPercentage } = toRefs(props);

// Локальный прогресс
const progress = ref(0);
const percentage = computed(() => Math.round(progress.value));

// Ссылка на элемент progress-bar
const progressBarRef = ref(null);

onMounted(() => {
  const progressBar = progressBarRef.value;

  const tl = gsap.timeline();

  // Анимация до targetPercentage + 2
  tl.to(progress, {
    value: targetPercentage.value + 2,
    duration: 1,
    onUpdate: () => {
      gsap.set(progressBar, { height: `${progress.value}%` });
    }
  });

  // Анимация возврата до targetPercentage
  tl.to(progress, {
    value: targetPercentage.value,
    duration: 0.5,
    onUpdate: () => {
      gsap.set(progressBar, { height: `${progress.value}%` });
    }
  });
});
</script>

<template>
  <div class="progress-bar-container">
    <div class="progress-bar" ref="progressBarRef"></div>
    <div class="progress-text">{{ percentage }}%</div>
  </div>
</template>

<style lang="scss" scoped>
.progress-bar-container {
  width: 50px;
  height: 150px;
  border: 1px solid #000;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  position: relative;
}

.progress-bar {
  width: 100%;
  height: 0%;
  background-color: #3498db;
  position: absolute;
  bottom: 0;
  left: 0;
}

.progress-text {
  position: relative;
  z-index: 1;
  font-size: 24px;
  color: #000;
}
</style>
