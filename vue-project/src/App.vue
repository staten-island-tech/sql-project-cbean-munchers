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
  return users.filter((username) => username.toLowerCase().includes(input.value.toLowerCase()))
}
</script>

<template>
  <input type="text" v-model="input" placeholder="Search users..." />
  <div class="user" v-for="user in filteredList()" :key="user.id">
    <p>{{ user }}</p>
  </div>
  <div class="item error" v-if="input && !filteredList().length">
    <p>No results found!</p>
  </div>
</template>
