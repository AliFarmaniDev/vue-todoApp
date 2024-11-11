<script setup>
import { provide, ref } from 'vue';

const theme = ref('light')
const toggelTheme = () =>{
    theme.value = theme.value == 'light' ? 'dark' : 'light'
}

provide('theme', theme)
provide('toggelTheme', toggelTheme)
</script>

<template>
    <div :class="theme">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
.light {
    color: black;
    background-color: #fff;
    height: 100%;
}

.dark {
    color: #fff;
    background-color: black;
    height: 100%;
}
</style>