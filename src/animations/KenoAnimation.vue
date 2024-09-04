<script setup lang="ts">
import { getImgUrl } from '../utils';
import gsap from 'gsap';
import { ref, onMounted } from 'vue';

const kenoLetters = ref([
  { img: getImgUrl('K.png'), name: "KLetter", rotationY: 0 },
  { img: getImgUrl('E.png'), name: "ELetter", rotationY: 0 },
  { img: getImgUrl('N.png'), name: "NLetter", rotationY: 0 },
  { img: getImgUrl('O.png'), name: "OLetter", rotationY: 0 },
  { img: getImgUrl('4min.png'), name: "4min", rotationY: 0 },
]);

const check4minImg = (name: string): boolean => name === '4min';

onMounted(() => {
  const letters = document.querySelectorAll('.keno-animation__letter') as NodeListOf<HTMLElement>;

  gsap.to(kenoLetters.value, {
    duration: 1.0,
    rotationY: 180,
    repeat: -1,
    ease: "power2.inOut",
    stagger: 0.2,
    onUpdate: () => {
      letters.forEach((letter, i) => {
        const rotation = kenoLetters.value[i].rotationY;
        letter.style.transform = `rotateY(${rotation}deg) scaleX(${rotation > 90 && rotation < 270 ? -1 : 1})`;
      });
    }
  });
});
</script>

<template>
  <div class="keno-animation">
    <img
      :class="[
        'keno-animation__letter',
        {'keno-animation__letter-4min': check4minImg(image.name)}
      ]"
      v-for="(image, index) in kenoLetters"
      :src="image.img"
      :alt="image.name"
      :key="index + 'k'"
    >
  </div>
</template>

<style lang="scss" scoped>
.keno-animation {
  display: flex;
  align-items: center;
  gap: 1px;
  height: fit-content;

  &__letter {
    width: 17px;
    height: 17px;

    &-4min {
      width: 22px;
      height: 22px;
      margin-left: 3px;
    }
  }
}
</style>
