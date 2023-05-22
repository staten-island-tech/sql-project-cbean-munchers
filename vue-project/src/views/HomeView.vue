<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient'

const users = ref([])

async function getData() {
  const { data } = await supabase.from('userindepthstats').select()
  users.value = data
}

onMounted(() => {
  getData()
})
</script>

<template></template>
