<script setup>
import TodoItem from '@/components/TodoItem.vue'
import Warpper from '@/components/Warpper.vue';
const todos = [
  {
    id: 1,
    title: 'a',
    done: true,
  },
  {
    id: 2,
    title: 'b',
    done: false,
  },
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
    <Warpper>
      <TodoItem :todo="todo" />
    </Warpper>
  </div>
</template>

<style lang="scss" scoped>
.header {
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  button {
    color: #fff;
    background-color: #1e40af;
    padding: 4px 15px;
    border-radius: 5px;
    a:hover {
      background-color: #0ea5e9;
    }
  }
}
</style>
