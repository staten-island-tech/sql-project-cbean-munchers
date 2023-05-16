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
  return data.filter((users) => username.toLowerCase().includes(input.value.toLowerCase()))
}
</script>

<template>
  <!-- <ul>
    <input type="text" v-model="input" placeholder="Search users..." />
    <div class="user" v-for="user in users" :key="user.id">
      <p>{{ user }}</p>
    </div>
    <li v-for="user in users" :key="user.id">
      {{ user.username }}
      #{{ user.tagline }} Current Rank :{{ user.current_rank }} Peak Rank :{{
        user.peak_rank
      }}
      Playtime in hours: {{ user.playtime }}
    </li>
  </ul> -->

  <input type="text" v-model="input" placeholder="Search users..." />
  <div class="user" v-for="user in filteredList()" :key="user.id">
    <p>{{ user }}</p>
  </div>
  <div class="item error" v-if="input && !filteredList().length">
    <p>No results found!</p>
  </div>
</template>
