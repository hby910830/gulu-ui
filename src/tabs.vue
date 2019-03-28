<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "GuluTabs",
    props:{
      selected: {
        type: String,
        required: true
      },
      direction:{
        type: String,
        validator(value){
          return ['horizontal', 'vertical'].indexOf(value) >= 0
        }
      }
    },
    created(){
      // this.$emit('update:selected', 'xxxx')
    }
  }
</script>

<style lang="scss" scoped>
  .tabs {

  }
</style>