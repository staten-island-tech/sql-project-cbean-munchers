<template>
  <form class="signUp_form">
    <label for="email"> Email</label>
    <input v-model="email" id="email" type="text" />
    <label for="password">Password</label>
    <input v-model="password" id="password" type="password" />
  </form>
  <button class="signup-button" @click="signUp">Sign Up</button>
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

<style></style>
