<template>
  <div class="toast">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "GuluToast",
    data() {
      return {}
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
    top: 0;
    transform: translateX(-50%);
    font-size: 14px;
    line-height: 1.8;
    height: 40px;
    border-radius: 4px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, .5);
    background-color: rgba(0, 0, 0, .75);
  }
</style>