<template>
    <svg class="y-icon">
        <use :xlink:href="`#i-${name}`"></use>
    </svg>
</template>

<script>
    export default {
        props: ['name']
    }
</script>

<style lang="scss">
    .y-icon {
        width: 1em;
        height: 1em;
        margin-right: 1em;
    }
</style>