<script setup>
import TodoItem from '@/components/TodoItem.vue'
import Warpper from '@/components/Warpper.vue'
import { useTodoStore } from '@/stores/todo'
import { ref } from 'vue'

const todoStore = useTodoStore()
const todoFilter = ref('all')
const setTodoFilter = () => {
  todoFilter.value = todoFilter.value == 'all' ? 'done' : 'done'
}
</script>

<template>
  <div class="header">
    <div>
      <h3>{{ todoFilter == 'all' ? 'All Todo' : 'Done Todo' }} {{ todoStore.todoCount }}</h3>
    </div>
    <button @click="setTodoFilter">
      {{ todoFilter == 'all' ? 'Show Done Todo' : 'Show All Todo' }}
    </button>
  </div>
  <div v-if="todoFilter == 'all'">
    <div v-for="todo in todoStore.sorted" :key="todo.id">
      <Warpper>
        <TodoItem :todo="todo" />
      </Warpper>
    </div>
  </div>
  <div v-else>
    <div v-for="todo in todoStore.done" :key="todo.id">
      <Warpper>
        <TodoItem :todo="todo" />
      </Warpper>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
