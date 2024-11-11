<script setup>
import { useTodoStore } from '@/stores/todo'
const TodoStore = useTodoStore()
defineProps({
  todo: {
    type: Object,
    requier: true,
  },
})
</script>

<template>
  <div class="content">
    <div class="header">
      <span>date: {{ todo.createdAt }}</span>
      <div class="action">
        <button class="material-icons delete" @click="TodoStore.deleteTodo(todo.id)"></button>
        <label class="container">
          {{ todo.done ? 'Done' : 'Pending' }}
          <input type="checkbox" :checked="todo.done" @input="console.log('input')" />
          <span class="check-mark"></span>
        </label>
      </div>
    </div>
    <h1>{{ todo.title }}</h1>
    <p>{{ todo.priority }}</p>
  </div>
</template>

<style lang="scss" scoped>
.content {
  border: 1px solid #0284c7;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
}
.header {
  font-size: 12px;
  background-color: #0284c7;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  button {
    border-radius: 30px;
  }
  .action {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  div .delete {
    font-size: 20px;
    padding: 3px;
    background-color: #fff;
    color: #ef4444;
  }
  h1 {
    padding: 1rem;
  }
  p {
    padding: 10px;
    font-weight: 300;
    background-color: #0284c7;
    width: 80px;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
  }
}
</style>
