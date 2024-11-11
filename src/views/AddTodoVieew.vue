<script setup>
import { useTodoStore } from '@/stores/todo';
const todoStore = useTodoStore()
import Warpper from '@/components/Warpper.vue';
import { reactive } from 'vue';

const todo = reactive({
    title: '',
    priority: ''
})

const submit = () => {
  console.log(value.value)
  todoStore.addTodo(todo)
}
</script>

<template>
  <Warpper>
    <form @submit.prevent="submit">
        <h3>create a new todo</h3>
        <div>
            <label for="title">title</label>
            <input id="title" type="text" v-model="todo.title"/>
        </div> 
        <div>
            <label for="priority">priority</label>
            <select name="" id="priority" v-model="todo.priority">
                <option value="high">high</option>
                <option value="medium">medium</option>
                <option value="low">low</option>
            </select>
        </div>
        <button type="submit">test</button>       
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
</style>
