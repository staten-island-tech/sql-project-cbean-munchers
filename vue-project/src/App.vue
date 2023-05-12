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
</script>

<template>
  <ul>
    <li v-for="user in users" :key="user.id">
      {{ user.username }}
    </li>
  </ul>
</template>
