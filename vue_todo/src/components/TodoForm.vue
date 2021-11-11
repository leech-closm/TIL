<template>
  <div>
    <input class="my-3" type="text" v-model.trim="inputData" @keyup.enter="addTodo">
    <button @click="addTodo">Add</button>
  </div>
</template>

<script>
export default {
  name: 'TodoForm',
  data: function () {
    return {
      inputData: '',
    }
  },
  methods: {
    addTodo: function () {
      // vuex에 저장하도록 한다.
      // 입력된 값이 있을 때만 저장 요청
      if (this.inputData.length) {
        this.$store.dispatch('addTodo', this.inputData)
        // 저장 완료 되었으면 입력 값 초기화!
        this.inputData = ''
      } else {
        alert('할 일을 입력해주세요.')
      }
    }
  }
}
</script>

<style scoped>
.my-3 {
  margin: 1rem 0;
}
</style>