<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from './lib/supabase.js'
import inputInfo from './components/inputInfo.vue'
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
  <div></div>
</template>

<style></style>
