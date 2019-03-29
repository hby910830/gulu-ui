<template>
  <div class="tabs-item" @click="xxx" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "GuluTabsItem",
    data(){   //不需要用户传值，自身维护值
      return{
        active: false
      }
    },
    props:{   //需要用户（前端开发者）传值
      disabled:{
        type:Boolean,
        default: false
      },
      name:{
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
    inject: ['eventBus'],
    created(){
      this.eventBus.$on('update:selected', name => {
        this.active = name === this.name
      })
    },
    methods:{
      xxx(){
        this.eventBus.$emit('update:selected', this.name)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .tabs-item {
    flex-shrink: 0;
    padding: 0 1em;
    &.active{
      background-color: red;
    }
  }
</style>