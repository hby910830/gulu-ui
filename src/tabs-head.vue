<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line" ref="line" v-show="x"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GuluTabsHead",
    inject: ['eventBus'],
    data() {
      return {
        x: false
      }
    },
    mounted() {
      this.eventBus.$on('update:selected', (item, vm) => {
        this.x = true
        let {width, left} = vm.$el.getBoundingClientRect()
        this.$refs.line.style.width = `${width}px`
        this.$refs.line.style.transform = `translateX(${left}px)`
      })
    }
  }
</script>

<style lang="scss" scoped>
  .tabs-head {
    border-bottom: 1px solid #ddd;
    display: flex;
    justify-content: flex-start;
    height: 40px;
    position: relative;
    > .line {
      position: absolute;
      bottom: 0;
      border-bottom: 1px solid blue;
      transition: all 200ms;
    }
    > .actions-wrapper {
      margin-left: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1em;
    }
  }
</style>