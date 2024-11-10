<script setup>
defineProps({
    todo: {
        type: Object,
        requier: true
    }
})
</script>

<template>
  <div>
    <div>
      {{ todo.title }}
    </div>
  </div>
</template>

<style lang="css" scoped></style>
