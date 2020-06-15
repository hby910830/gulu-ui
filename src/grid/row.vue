<template>
  <div class="row" :style="rowStyle">
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
    computed: {
      rowStyle() {
        return {
          marginLeft: -this.gutter / 2 + 'px',
          marginRight: -this.gutter / 2 + 'px'
        }
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