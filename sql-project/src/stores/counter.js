import { ref, watch } from 'vue'
import { defineStore } from 'pinia'
import { supabase } from '../lib/supabase'

export const useAuthStore = defineStore('user', () =>{
  const user = ref(null)
  const error = ref(null)

  const fetchUser = async () => {
     user.value = await supabase.auth.user();

  }
  const signUp = async (email, password, username) => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    },
    {
      data: { username: username}
    }
    )
    if (error) {
      error.value = error.message;
    }
  }
  const signIn = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (error) {
      error.value = error.message;
    } else {
      user.value = data;
    }
  }
  const signOut = async () => {
    await supabase.auth.signOut();
    user.value = null;
  }
}