<script setup>
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
</template>
