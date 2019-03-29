<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GuluTabsHead",
    inject: ['eventBus'],
    created(){
    }
  }
</script>

<style lang="scss" scoped>
  .tabs-head {
    border: 1px solid red;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 40px;
    >.actions-wrapper{
      margin-left: auto;
    }
  }
</style>