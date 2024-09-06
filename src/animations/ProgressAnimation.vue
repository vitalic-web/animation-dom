<script setup lang="ts">
import { ref, computed, onMounted, toRefs } from 'vue';
import { gsap } from 'gsap';

const props = defineProps({
  targetPercentage: {
    type: Number,
    required: true,
    default: 0,
  },
  isCold: {
    type: Boolean,
    required: true,
    default: false,
  },
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
    <div :class="['progress-bar', { 'progress-bar-cold': isCold }]" ref="progressBarRef" />
    <div :class="['progress-text', { 'progress-text-cold': isCold }]">{{ percentage }}%</div>
  </div>
</template>

<style lang="scss" scoped>
.progress-bar-container {
  width: 75px;
  height: 90px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  position: relative;
}

.progress-bar {
  width: 100%;
  height: 0%;
  background: #c30000;
  position: absolute;
  bottom: 0;
  left: 0;

  &-cold {
    background: #296fd5;
  }
}

.progress-text {
  position: relative;
  z-index: 1;
  font-size: 24px;
  color: #fe801b;
  font-weight: 400;

  &-cold {
    color: #9bcbff;
  }
}
</style>
