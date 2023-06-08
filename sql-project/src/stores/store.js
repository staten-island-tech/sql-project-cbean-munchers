import { defineStore } from 'pinia'
import { supabase } from '../components/supabase.js'
export const useAuthStore = defineStore('user', {
  state: () => {
    return {
      user: null,
      location: null
    }
  },

  actions: {
    loadUser() {
      this.currentUser = supabase.auth.user()
    },
    clearUser() {
      this.currentUser = null
    }
  },
  getters: {
    isAuthenticated() {
      return !!this.currentUser
    }
  }
})
