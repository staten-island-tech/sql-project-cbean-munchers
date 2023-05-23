<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from './lib/supabase.js'

const players = ref([])
const ranks = ref([])

async function getPlayers() {
  let { data } = await supabase.from('userbasicdata').select('username')
  players.value = data
}

async function getRank() {
  let { data } = await supabase.from('userbasicdata').select('current_rank')
  ranks.value = data
}
onMounted(() => {
  getPlayers()
  getRank()
})
</script>

<template>
  <ul>
    <input field="text" placeholder="Name" />
    <button type="submit" value="submit"></button>
    <li v-for="player in players" :key="player.id">
      {{ player.username }}
      {{ player.peak_rank }}
    </li>
  </ul>
  <div>
    <ul>
      <li v-for="rank in ranks" :key="rank.id">
        {{ rank.current_rank }}
      </li>
    </ul>
  </div>
</template>

<style></style>
