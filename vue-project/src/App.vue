<template>
  <div>
    <h2>Sign up for an account</h2>
    <form @submit.prevent="handleSignup">
      <div>
        <input placeholder="email" id="email" type="email" v-model="email" />
      </div>
      <div>
        <input placeholder="password" id="password" type="password" v-model="password" />
      </div>
      <div>
        <button type="submit">Sign up</button>
      </div>
    </form>
    <div class="signin">
      <span>Click here if you have an account <a href="SignInPage"></a> </span>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import { supabase } from './lib/supabaseClient'

export default {
  setup() {
    const email = ref('')
    const password = ref('')

    const handleSignup = async () => {
      try {
        const { error } = await supabase.auth.signUp({
          email: email.value,
          password: password.value
        })
        if (error) throw error
      } catch (error) {
        alert(error.error_description || error.message)
      }
    }

    return {
      email,
      password,
      handleSignup
    }
  }
}
</script>
