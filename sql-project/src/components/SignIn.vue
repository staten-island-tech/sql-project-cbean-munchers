<template>
  <div class="everything">
    <form class="signin_form">
      <label for="email">Email</label>
      <input v-model="email" id="email" type="text" />
      <label for="password">Password</label>
      <input v-model="password" id="password" type="password" />
    </form>
    <button class="login-button" @click="logIn">Sign In</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { supabase } from '../components/supabase.js'
import { UserStore } from '../stores/store.js'
import router from '../router/index.js'
const user = UserStore()
const email = ref('')
const password = ref('')

async function logIn() {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value
  })
  if (error) {
    console.log(error)
  }
  console.log(data)
  user.loadUser()
  router.push('/home')
}
</script>

<style>
.signin_form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
