<template>
  <form class="form-widget" @submit.prevent="updateProfile">
    <div>{{ data }}</div>
  </form>
</template>

<script setup>
import { supabase } from './lib/supabase.js'
import { onMounted, ref } from 'vue'

const loading = ref(true)
const username = ref('')
const tagline = ref('')
const peakRank = ref('')
const rank = ref('')

onMounted(() => {
  getProfile()
})

async function getProfile() {
  try {
    loading.value = true

    let { data, userbasicdata, error } = await supabase
      .from('userbasicdata')
      .select(`username, tagline, peakRank, rank`)
      .eq('peng', '#0001', 'Diamond 3', 'Diamond 2')

    if (error && userbasicdata !== 406) throw error

    if (data) {
      username.value = data.username
      peakRank.value = data.peakRank
      rank.value = data.rank
      tagline.value = data.tagline
    }
  } catch (error) {
    alert(error.message)
  } finally {
    loading.value = false
  }
}
</script>

<style></style>
