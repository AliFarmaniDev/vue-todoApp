import { defineStore } from 'pinia'
const todos = [
  {
    id: 1,
    title: 'reading book',
    done: true,
    createdAt: '11/06/2023',
    priority: 'high',
  },
  {
    id: 2,
    title: 'do home works',
    done: false,
    createdAt: '12/06/2023',
    priority: 'normal',
  },
  {
    id: 3,
    title: 'chocking',
    done: true,
    createdAt: '13/06/2023',
    priority: 'low',
  },
]
export const useTodoStore = defineStore('todo-store', {
  state() {
    //داده هایی که به صورت گلوبال در تمام پروژه در دسترس هستند
    return {
      todo: [todos],
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
        return this.todo.sort((a,b)=> new Date(b.createdAt)-new Date(a.createdAt))
    }
  },

  actions: {
    //api call
    getTodo() {

    },
    addTodo() {

    },
    deleteTodo(){

    },
    updateTodo(){

    }

  }
})
