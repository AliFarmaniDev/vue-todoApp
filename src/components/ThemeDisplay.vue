<script setup>
import { inject } from 'vue';

const theme = inject('theme');
const toggelTheme = inject('toggelTheme');
</script>

<template>
    <div class="content">
        <button @click="toggelTheme">
            theme
        </button>

    </div>
</template>

<style lang="scss" scoped>
.content {
    display: flex;
    
}
</style>