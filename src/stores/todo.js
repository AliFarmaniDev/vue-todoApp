import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo-store', {
  state() {
    //داده هایی که به صورت گلوبال در تمام پروژه در دسترس هستند
    return {
      todo: [],
      loading: true,
      error: '',
    }
  },
  getters: {
    //در گتر داده ها که باید بازگردادنده باشه به ما برمیگرده
    done: (state) => {
      //filter todos
      state.todo.filter((todo) => todo.done)
    },
    sorted() {
      return this.todo.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    },
    todoCount() {
      return this.todo.length
    },
  },

  actions: {
    getTodo() {
      //get todos
      fetch('http://localhost:3000/todos')
        .then((res) => res.json())
        .then((data) => {
          this.data = data
          this.loading = false
        })
        .catch((error) => {
          this.error = error
          this.loading = false
        })
    },
    addTodo() {},
    deleteTodo(id) {
      this.todo = this.todo.filter((t) => t.id === id)
      fetch(`http://localhost:3000/todos/${id}` , {method: 'DELETE'}).catch(e => console.log(`Error is ${e.message}`))
    },
    updateTodo(id) {
      const todo = this.todofintd(t => t.id === id)
      todo.done = !todo.done
      //api call
      fetch(`http://localhost:3000/todos/${id}`,{method: 'PATCH',body: JSON.stringify({done:todo.done})})
      .catch(e => console.log(`Error is ${e.message}`))
    },
  },
})
