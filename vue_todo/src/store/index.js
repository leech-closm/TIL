import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoList: [
      // Todo dummy Data
      // {
      //   content: '할 일 1',
      //   isCompleted: false,
      // },
      // {
      //   content: '할 일 2',
      //   isCompleted: true,
      // },
    ],
  },
  mutations: {
    ADD_TODO: function (state, data) {
      const todo = {
        content: data,
        isCompleted: false
      }
      state.todoList.push(todo)
    },

    UPDATE_TODO: function (state, data) {
      // isCompleted를 토글
      // 고민 : data가 state.todoList 어디에 있는지 모름.
      // 해결 : 하나씩 뒤져서 같은걸 찾는다!! => 수정하고 저장한다.
      state.todoList = state.todoList.map(todo => {
        if (todo === data) {
          const temp = {
            ...todo, // Spread Syntax
            isCompleted: !todo.isCompleted
          }
          return temp
        } else {
          return todo
        }
      })
    },

    DELETE_TODO: function (state, data) {
      // idx 를 확인
      const idx = state.todoList.indexOf(data)
      // splice 로 삭제하기
      state.todoList.splice(idx, 1)
    }
  },
  actions: {
    addTodo: function (context, data) {
      // Mutation을 호출하여 state에 data를 반영하게 한다.
      context.commit('ADD_TODO', data)
    },

    updateTodo: function (context, data) {
      context.commit('UPDATE_TODO', data)
    },

    deleteTodo: function (context, data) {
      context.commit('DELETE_TODO', data)
    }
  },
  // Vuex 의 computed 역할
  getters: {
    allTodoCnt: function (state) {
      return state.todoList.length
    },

    completedTodoCnt: function (state) {
      // 완료된 todo만 새로운 배열로 만들어 list에 저장
      const list = state.todoList.filter(todo => {
        return todo.isCompleted
      })
      return list.length
    },

    unCompletedTodoCnt: function (state) {
      const list = state.todoList.filter(todo => {
        return !todo.isCompleted
      })
      return list.length
    }
  },
})
