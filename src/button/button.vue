<template>
  <button class="y-button" :class="{[`icon-${iconPosition}`]: true}"
          @click="$emit('click')">
    <y-icon class="icon" v-if="icon && !loading" :name="icon"></y-icon>
    <y-icon class="loading icon" v-if="loading" name="loading"></y-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
	import Icon from '../icon'

	export default {
		components: {
			'y-icon': Icon
		},
		props: {
			icon: {},
			iconPosition: {
				type: String,
				default: 'left',
				validator(value) {
					return value === 'left' || value === 'right'
				}
			},
			loading: {
				type: Boolean,
				default: false
			}
		}
	}
</script>
<style lang="scss">
  $button-height: 32px;
  $font-size: 14px;
  $button-bg: white;
  $button-active-bg: #eee;
  $border-radius: 4px;
  $color: #333;
  $border-color: #999;
  $border-color-hover: red;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .y-button {
    font-size: $font-size;
    height: $button-height;
    padding: 0 1em;
    border-radius: $border-radius;
    border: 1px solid $border-color;
    background: $button-bg;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    &:hover {
      border-color: $border-color-hover;
    }
    &:active {
      background-color: $button-active-bg;
    }
    &:focus {
      outline: none;
    }
    > .content {
      order: 2;
    }
    > .icon {
      order: 1;
      margin-right: .1em;
    }
    .loading {
      animation: spin 2s infinite linear;
    }
    &.icon-right {
      > .content {
        order: 1;
      }
      > .icon {
        order: 2;
        margin-right: 0;
        margin-left: .1em;
      }
    }
  }
</style>