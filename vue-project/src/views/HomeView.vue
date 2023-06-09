<template>
  <div>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import { useAuthStore } from '../stores/counter';
import router from '../router';
import { supabase } from '../lib/supabaseClient'; 

export default {
  setup() {
    const logout = async () => {
      try {
        await supabase.auth.signOut(); 
        useAuthStore.user = null; 

        router.push('SignInPage');
      } catch (error) {
        console.error(error);
      }
    };

    return {
      logout
    };
  },
};
</script>

<style lang="scss" scoped></style>

