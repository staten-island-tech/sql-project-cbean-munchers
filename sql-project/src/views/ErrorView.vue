<script>
import { useAuthStore } from '@/stores/counter'
import router from '../router'
export default {
  name: 'ErrorView',
  methods: {
    checkUser: function () {
      if (useAuthStore().currentUser === null) {
        router.push('loginpage')
      }
    }
  },
  mounted() {
    this.checkUser()
  }
}
</script>

<template>
  <div class="body">
    <p class="Message">Error occured, try again.</p>
    <RouterLink to="/Home">
      <button class="button">Home:</button>
    </RouterLink>
  </div>
</template>
