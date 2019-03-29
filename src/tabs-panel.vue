<template>
  <div class="tabs-panel" :class="classes" v-show="active">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "GuluTabsPanel",
    inject: ['eventBus'],
    data() {
      return {
        active: false
      }
    },
    props: {
      name: {
        type: String | Number,
        required: true
      }
    },
    computed:{
      classes(){
        return{
          active: this.active
        }
      }
    },
    created() {
      this.eventBus.$on('update:selected', name => {
        this.active = name === this.name
      })
    },
  }
</script>

<style lang="scss" scoped>
  .tabs-panel {
    &.active{
      background-color: red;
    }
  }
</style>