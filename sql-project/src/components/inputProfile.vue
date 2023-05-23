<template>
  <form class="row" @submit.prevent="login">
    <div class="form-widget">
      <h1 class="header">Testing</h1>
      <p class="description">Sign in via magic link with your email below</p>
      <div>
        <input class="inputField" required type="email" placeholder="Your email" v-model="email" />
      </div>
      <div>
        <input
          type="submit"
          class="button block"
          :value="loading ? 'Loading' : 'Send magic link'"
          :disabled="loading"
        />
      </div>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { supabase } from './lib/supabase.js'

const loading = ref(false)
const email = ref('')

const login = async () => {
  try {
    loading.value = true
    const { error } = await supabase.auth.signInWithOtp({
      email: email.value
    })
    if (error) throw error
  } catch (error) {
    if (error instanceof Error) {
      alert(error.message)
    }
  } finally {
    loading.value = false
  }
}
</script>

<style></style>
