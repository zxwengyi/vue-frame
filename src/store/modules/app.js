import user from '@/api/user'
const app = {
    namespaced: true,
    state: {
      number: 0
    },
    mutations: {
      SET_LOADING: (state, data) => {
        // error 的时候直接重置
        state.number = state.number + data.number
      }
    },
    actions: {
        Add({ commit }, data) {
          console.log("meth:SetLoading" + JSON.stringify(data));
          user.login({})
        commit('SET_LOADING', data)
      }
    }
  }
  
  export default app