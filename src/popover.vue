<template>
  <div class="popover">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible" @click.stop>
      <slot name="content"></slot>
    </div>
    <div ref="triggerWrapper" @click="xxx">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GuluPopover",
    data() {
      return {
        visible: false
      }
    },
    mounted(){
    },
    methods: {
      xxx() {
        this.visible = !this.visible
        if (this.visible) {
          setTimeout(() => {
            document.body.appendChild(this.$refs.contentWrapper)
            let {width,left,top} = this.$refs.triggerWrapper.getBoundingClientRect()
            console.log(width, left, top);
            this.$refs.contentWrapper.style.left = `${left + window.scrollX}px`
            this.$refs.contentWrapper.style.top = `${top + window.scrollY}px`
            let eventHandler = () => {
              this.visible = false
              document.removeEventListener('click', eventHandler)
            }
            document.addEventListener('click', eventHandler)
          }, 300)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .popover {
    display: inline-block;
    vertical-align: top;
    position: relative;
  }
  .content-wrapper {
    position: absolute;
    border: 1px solid red;
    box-shadow: 0 0 3px rgba(0, 0, 0, .5);
    transform: translateY(-100%);
  }
</style>