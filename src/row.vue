<template>
  <div class="row" :style="{marginLeft: -gutter/2+'px', marginRight: -gutter/2+'px'}">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "GuluRow",
    props: {
      gutter: {
        type: [Number, String]
      }
    },
    mounted() {
      this.$children.forEach(vm => {
        vm.gutter = this.gutter  //传给子组件，默认给子组件的data
      })
    }
  }
</script>

<style scoped lang="scss">
  .row {
    display: flex;
  }
</style>