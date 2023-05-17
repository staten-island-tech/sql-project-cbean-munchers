<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from './lib/supabaseClient'

const users = ref([])

async function getData() {
  const { data } = await supabase.from('userbasicdata').select()
  users.value = data
}

onMounted(() => {
  getData()
})

function filteredList() {
  return data.filter((userbasicdata) =>
    userbasicdata.username.toLowerCase().includes(input.value.toLowerCase())
  )
}
</script>

<template>
  <ul>
    <input type="text" v-model="search" placeholder="Search users..." />
    <div v-for="username in filteredList" :key="user.id">
      <p>{{ username.user }}</p>
    </div>
  </ul>
</template>
