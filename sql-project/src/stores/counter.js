import { ref } from 'vue'
import { defineStore } from 'pinia'
import { supabase } from '../lib/supabase'

export const useAuthStore = defineStore('user', () => {
  const user = ref(null)
  const name = ref('Jonas')
})
