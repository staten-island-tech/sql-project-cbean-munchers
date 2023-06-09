<template>
  <div>
    <h1>SUP</h1>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import { useUserStore } from '../stores/counter';
import router from '../router';
import { supabase } from '../lib/supabaseClient'; 

export default {
  setup() {
    const logout = async () => {
      try {
        await supabase.auth.signOut(); 
        useUserStore.user = null; 

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

