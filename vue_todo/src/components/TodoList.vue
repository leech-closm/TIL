<template>
  <div>
    <h1>Todo List</h1>
    <h2>All Todo : {{ allTodoCnt }}</h2>
    <h2>Completed Todo : {{ completedTodoCnt }}</h2>
    <h2>Uncompleted Todo : {{ unCompletedTodoCnt }}</h2>

    <todo-list-item
      v-for="(todo, idx) in todos"
      :key="idx"
      :todo="todo"
    ></todo-list-item>
  </div>
</template>

<script>
import TodoListItem from '@/components/TodoListItem'

export default {
  name: 'TodoList',
  components: {
    TodoListItem,
  },
  computed: {
    todos: function () {
      // state 에 저장된 데이터 가져오기
      return this.$store.state.todoList
    },

    allTodoCnt: function () {
      return this.$store.getters.allTodoCnt
    },

    completedTodoCnt: function () {
      return this.$store.getters.completedTodoCnt
    },

    unCompletedTodoCnt: function () {
      return this.$store.getters.unCompletedTodoCnt
    }
  }
}
</script>

<style>

</style>