<!-- <script setup>
import { ref, onMounted } from 'vue'
import { supabase } from './lib/supabaseClient'

const basicdata = ref([])

async function getData() {
  const { data } = await supabase.from('userbasicdata').select()
  basicdata.value = data
  console.log(basicdata)
}

onMounted(() => {
  getData()
})

// function filteredList() {
//   return data.filter((userbasicdata) =>
//     userbasicdata.username.toLowerCase().includes(input.value.toLowerCase())
//   )
// }
</script>

<template>
  <ul>
    <input type="text" v-model="search" placeholder="Search users..." />
    <div v-for="user in basicdata" :key="user.id">
      <Routerlink to="/"> {{ user.username }} </Routerlink>
    </div>
  </ul>
</template> -->

<template>
  <!-- Check if user is available in the store, if not show auth compoenent -->
  <Auth v-if="!store.state.user" />
  <!-- If user is available, show the Hello World component -->
</template>

<script>
import Auth from './components/Auth.vue'
import HelloWorld from './components/HelloWorld.vue'
import { store } from './components/store'
import { supabase } from './lib/supabaseClient'

export default {
  components: {
    HelloWorld,
    Auth
  },
  setup() {
    store.state.user = supabase.auth.user()

    supabase.auth.onAuthStateChange((event, session) => {
      if (event == 'SIGNED_OUT') {
        store.state.user = null
      } else {
        store.state.user = session.user
      }
    })

    return {
      store
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
