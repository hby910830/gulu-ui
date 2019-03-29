<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GuluTabsHead",
    inject: ['eventBus'],
    created() {
      this.eventBus.$on('update:selected', (item, vm) => {
        console.log(vm.$el);
      })
    }
  }
</script>

<style lang="scss" scoped>
  .tabs-head {
    border: 1px solid red;
    display: flex;
    justify-content: flex-start;
    height: 40px;
    position: relative;
    > .line {
      position: absolute;
      bottom: 0;
      border-bottom: 1px solid blue;
      width: 100px;
    }
    > .actions-wrapper {
      margin-left: auto;
    }
  }
</style>