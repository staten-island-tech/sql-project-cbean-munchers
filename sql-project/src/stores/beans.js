import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    users: [],
    user: null,
    loading: false,
    error: null
  }),
  getters: {
    getNamesPerUser: (state) => {
      return (userId) => state.users.filter((user) => user.userId === userId)
    }
  },
  actions: {
    async fetchUsers() {
      this.users = []
      this.loading = true
      try {
        this.users = await fetch('https://jsonplaceholder.typicode.com/posts').then((response) =>
          response.json()
        )
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    },
    async fetchPost(id) {
      this.user = null
      this.loading = true
      try {
        this.user = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(
          (response) => response.json()
        )
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    }
  }
})
