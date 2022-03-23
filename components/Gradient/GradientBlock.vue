<template>
  <section id="gradient" class="gradient" :style="style">
    <div class="container">
      <div class="gradient__flex">
        <div class="gradient-head">
          <p>Клавиатуры с RGB подсветкой</p>
          <nuxt-link to="/" class="gradient-head__link">
            Подробнее
          </nuxt-link>
        </div>
        <div class="gradient__btn" :class="buttonClass" @click.stop="pauseGradient">
          <span>
            Остановить
          </span>
          <span class="pause">
            Продолжить
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'GradientBlock',
  data () {
    return {
      gradient: null,
      colors: [
        [62, 35, 255],
        [60, 255, 60],
        [255, 35, 98],
        [45, 175, 230],
        [255, 0, 255],
        [255, 128, 0]
      ],
      step: 0,
      colorIndices: [0, 1, 2, 3],
      gradientSpeed: 0,
      style: {},
      buttonClass: ''
    }
  },
  mounted () {
    this.startGradient()
  },
  unmounted () {
    this.destroyGradient()
  },
  methods: {
    startGradient () {
      this.gradientSpeed = 0.005
      this.gradient = setInterval(this.updateGradient, 10)
    },
    destroyGradient () {
      this.gradientSpeed = 0
      this.gradient = null
    },
    pauseGradient () {
      if (this.buttonClass === 'pause') {
        this.gradientSpeed = 0.005
        this.buttonClass = ''
      } else {
        this.gradientSpeed = 0
        this.buttonClass = 'pause'
      }
    },
    updateGradient () {
      const colorFirstToFirst = this.colors[this.colorIndices[0]]
      const colorFirstToSecond = this.colors[this.colorIndices[1]]
      const colorSecondToFirst = this.colors[this.colorIndices[2]]
      const colorSecondToSecond = this.colors[this.colorIndices[3]]

      const istep = 1 - this.step

      const r1 = Math.round(istep * colorFirstToFirst[0] + this.step * colorFirstToSecond[0])
      const g1 = Math.round(istep * colorFirstToFirst[1] + this.step * colorFirstToSecond[1])
      const b1 = Math.round(istep * colorFirstToFirst[2] + this.step * colorFirstToSecond[2])
      const color1 = `rgb(${r1}, ${g1}, ${b1})`

      const r2 = Math.round(istep * colorSecondToFirst[0] + this.step * colorSecondToSecond[0])
      const g2 = Math.round(istep * colorSecondToFirst[1] + this.step * colorSecondToSecond[1])
      const b2 = Math.round(istep * colorSecondToFirst[2] + this.step * colorSecondToSecond[2])
      const color2 = `rgb(${r2}, ${g2}, ${b2})`
      this.style = {}
      this.style.background = `-webkit-gradient(linear, left top, right top, from(${color1}), to(${color2}))`

      this.step += this.gradientSpeed
      if (this.step >= 1) {
        this.step %= 1
        this.colorIndices[0] = this.colorIndices[1]
        this.colorIndices[2] = this.colorIndices[3]

        this.colorIndices[1] = (this.colorIndices[1] + Math.floor(1 + Math.random() * (this.colors.length - 1))) % this.colors.length
        this.colorIndices[3] = (this.colorIndices[3] + Math.floor(1 + Math.random() * (this.colors.length - 1))) % this.colors.length
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.gradient {
  padding: 100px 0;
  &__flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &-head {
    display: flex;
    align-items: center;
    p {
      color: #fff;
      font-weight: 600;
      font-size: 40px;
      line-height: 48px;
      margin-right: 50px;
    }
    &__link {
      display: inline-block;
      color: #fff;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 16px;
      line-height: 19px;
      padding: 15px 40px;
      border: 1px solid #fff;
      border-radius: 3px;
      transition: all 175ms ease-out;
      &:hover {
        color: #fff;
        border-color: transparent;
        background-color: rgba(255, 255, 255, 0.1);
      }
    }
  }
  &__btn {
    text-transform: uppercase;
    color: #fff;
    padding: 15px 40px;
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 210px;
    height: 50px;
    border: 1px solid #fff;
    border-radius: 3px;
    cursor: pointer;
    opacity: 0.5;
    transition: opacity 175ms ease-out;
    position: relative;
    overflow: hidden;
    &:before {
      content: "";
      display: block;
      width: 14px;
      height: 14px;
      background-color: #fff;
      border-radius: 2px;
      margin-right: 10px;
      position: absolute;
      top: 50%;
      left: 30px;
      transform: translateY(-50%);
      transition: all 175ms ease-out;
    }
    &:hover {
      opacity: 1;
    }
    span {
      font-weight: bold;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      transition: all 175ms ease-out;
      &.pause {
        top: 150%;
      }
    }
    &.pause {
      span {
        top: -150%;
        &.pause {
          top: 50%;
        }
      }
      &:before {
        height: 0;
        width: 0;
        background-color: transparent;
        border: 8px solid rgba(0,0,0,0);
        border-left: 14px solid #fff;
        margin-right: 2px;
      }
    }
  }
}

@media screen and (max-width: 1170px) {
  .gradient {
    &-head {
      display: block;
      p {
        margin: 0;
      }
      &__link {
        display: block;
        width: max-content;
        margin-top: 20px;
      }
    }
    &__btn {
      &:hover {
        opacity: 0.5;
      }
    }
  }
}

@media screen and (max-width: 890px) {
  .gradient {
    padding: 70px 0 50px;
    &__flex {
      display: block;
    }
    &-head {
      p {
        text-align: center;
      }
      &__link {
        margin: 20px auto 30px;
      }
    }
    &__btn {
      margin: 0 auto;
    }
  }
}

@media screen and (max-width: 650px) {
  .gradient {
    &-head {
      p {
        font-size: 30px;
        line-height: 36px;
      }
    }
  }
}

@media screen and (max-width: 460px) {
  .gradient {
    &-head {
      p {
        font-size: 28px;
        line-height: 33px;
      }
    }
  }
}
</style>
