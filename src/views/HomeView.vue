<script setup>
import TodoItem from '@/components/TodoItem.vue';
const todos = [
  {
    id: 1,
    title: "a",
    done: true
  },
  {
    id: 2,
    title: "b",
    done: false
  }
]
</script>

<template>
  <div class="header">
    <div>
      <h3>Todos</h3>
    </div>
    <button>Show Todos</button>
  </div>
  <div v-for="todo in todos" :key="todo.id">
    <TodoItem :todo="todo" />
  </div>
</template>
