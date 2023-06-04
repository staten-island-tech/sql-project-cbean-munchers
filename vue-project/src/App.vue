<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink id="signup" to="/SignUpPage">Sign Up</RouterLink>
        <RouterLink id="signin" to="/SignInPage">Sign In</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style>
#signup {
  margin: 20px;
}
</style> 
