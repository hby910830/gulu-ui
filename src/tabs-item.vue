<template>
  <div class="tabs-item" @click="onClick" :class="classes">
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
          active: this.active,
          disabled: this.disabled
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
      onClick(){
        if(this.disabled) return
        this.eventBus.$emit('update:selected', this.name, this)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .tabs-item {
    flex-shrink: 0;
    padding: 0 1em;
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 100%;
    &.active{
      color: blue;
    }
    &.disabled{
      color: gray;
      cursor: not-allowed;
    }
  }
</style>