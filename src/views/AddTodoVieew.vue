<script setup>
import { useTodoStore } from '@/stores/todo'
const todoStore = useTodoStore()
import Warpper from '@/components/Warpper.vue'
import { computed, reactive, watch } from 'vue'
import { useRoute } from 'vue-router'

const router = useRoute()

const todo = reactive({
  title: '',
  priority: '',
})

const submit = () => {
  console.log(value.value)
  todoStore.addTodo(todo)
}

const inFormeInvalid = computed(() => {
  return todoStore.title == '' || todoStore.priority == ''
})

watch(todoStore.todo, () => router.push({ name: 'home' }))
</script>

<template>
  <Warpper>
    <form @submit.prevent="submit">
      <h3>create a new todo</h3>
      <div>
        <label for="title">title</label>
        <input id="title" type="text" v-model="todo.title" />
      </div>
      <div>
        <label for="priority">priority</label>
        <select name="" id="priority" v-model="todo.priority">
          <option value="high">high</option>
          <option value="medium">medium</option>
          <option value="low">low</option>
        </select>
      </div>
      <button type="submit" :disabled="inFormeInvalid">Add</button>
    </form>
  </Warpper>
</template>

<style lang="scss" scoped>
form {
  padding: 1rem;
  border: 1px solid #3b82f6;
  border-radius: 10px;
  height: 100%;
}
h3 {
  margin-bottom: 2rem;
}
div {
  margin: 10px;
}
button {
    border: 1px solid black;
    width: 100%;
    height: 30px;
    border-radius: 12px;
    color: white;
    font-size: 18px;
    background-color: #3b82f6;
}
</style>
