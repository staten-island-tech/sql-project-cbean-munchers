<template>
  <form class="signUp_form">
    <label for="email" placeholder="email"> Email</label>
    <input v-model="email" id="email" type="text" placeholder="email" />
    <label for="password" placeholder="password">Password</label>
    <input v-model="password" id="password" type="password" placeholder="password" />
  </form>
  <button type="submit" class="signup-button" @click="signUp()">Sign Up</button>
</template>

<script setup>
import { supabase } from '../components/supabase.js'
import { ref } from 'vue'

const email = ref('')
const password = ref('')

async function signUp() {
  const { data, error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value
  })
  if (error) {
    console.log(error)
  }
  console.log(data)
}
</script>

<style>
.signUp_form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
