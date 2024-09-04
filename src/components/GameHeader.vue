<script setup lang="ts">
import UpdateIcon from '../assets/icons/updateIcon.svg';
import ControlFullIcon from '../assets/icons/controlFullIcon.svg';
import ControlWidthIcon from '../assets/icons/controlWidthIcon.svg';
import ControlCloseIcon from '../assets/icons/controlCloseIcon.svg';
</script>

<template>
  <div class="game-header">
    <p class="game-header__title">Keno 4 min vs1</p>
    <div class="game-header__info">
      <p class="game-header__info-text">Вы играете на демо счёт</p>
      <UpdateIcon class="game-header__info-icon" />
    </div>
    <div class="game-header__control-icons">
      <ControlFullIcon class="game-header__icon" />
      <ControlWidthIcon class="game-header__icon" />
      <ControlCloseIcon class="game-header__icon game-header__icon-close" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.game-header {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, .8);
  color: #d5b577;

  &__title {
    font-size: 24px;
    font-weight: 500;
  }

  &__info {
    display: flex;
    gap: 10px;
    align-items: center;

    &:hover {
      color: #fff;
      cursor: pointer;
    }

    &-text {
      font-size: 14px;
    }

    &-icon {
      width: 17px;
      height: 17px;
    }
  }

  &__control-icons {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  &__icon {
    width: 24px;
    height: 24px;
    cursor: pointer;

    &-close {
      fill: #d5b577;
    }
  }
}

p {
  margin: 0;
}
</style>
