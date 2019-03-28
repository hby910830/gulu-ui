<template>
  <div class="toast" ref="toast" :class="toastClasses">
    <slot v-if="!enableHtml"></slot>
    <div v-else v-html="$slots.default"></div>
    <template v-if="closeButton">
      <div class="line" ref="line"></div>
      <div class="close" @click="onClickClose">{{closeButton.text}}</div>
    </template>
  </div>
</template>

<script>
  export default {
    name: "GuluToast",
    props: {
      autoClose: {
        type: Boolean,
        default: true
      },
      autoCloseDelay: {
        type: Number,
        default: 10
      },
      closeButton: {
        type: Object,
        default: () => {
          return {
            text: '关闭',
            callback: undefined
          }
        }
      },
      enableHtml: {
        type: Boolean,
        default: false
      },
      position: {
        type: String,
        default: 'top',
        validator(value) {
          return ['top', 'bottom', 'middle'].indexOf(value) > -1
        }
      }
    },
    computed: {
      toastClasses() {
        return {
          [`position-${this.position}`]: true
        }
      }
    },
    mounted() {
      this.updateStyle()
      this.exeAutoClose()
    },
    methods: {
      updateStyle() {
        this.$nextTick(() => {
          this.$refs.line.style.height = `${this.$refs.toast.getBoundingClientRect().height}px`
        })
      },
      exeAutoClose() {
        if (this.autoClose) {
          setTimeout(() => {
            this.close()
          }, this.autoCloseDelay * 1000)
        }
      },
      close() {
        this.$el.remove()
        this.$emit('close')
        this.$destroy()
      },
      onClickClose() {
        this.close()
        //防御性编程
        this.closeButton &&
        typeof this.closeButton.callback === 'function' &&
        this.closeButton.callback()
      }
    }
  }
</script>

<style lang="scss" scoped>
  .toast {
    padding: 0 16px;
    color: #fff;
    display: flex;
    align-items: center;
    position: fixed;
    left: 50%;
    font-size: 14px;
    line-height: 1.8;
    min-height: 40px;
    border-radius: 4px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, .5);
    background-color: rgba(0, 0, 0, .75);
    .close {
      padding-left: 16px;
      flex-shrink: 0;
    }
    .line {
      height: 100%;
      border-left: 1px solid #666;
      margin-left: 16px;
    }
    &.position-top {
      top: 0;
      transform: translateX(-50%);
    }
    &.position-bottom {
      bottom: 0;
      transform: translateX(-50%);
    }
    &.position-middle {
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
</style>