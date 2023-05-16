<template>
  <form class="form-widget" @submit.prevent="updateProfile"></form>
</template>

<script setup>
import { supabase } from '../lib/supabaseClient.js'
import { onMounted, ref, toRefs } from 'vue'

const props = defineProps(['session'])
const { session } = toRefs(props)
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
    const { user } = session.value

    let { data, userbasicdata, error } = await supabase
      .from('userbasicdata')
      .select(`username, tagline, peakRank, rank`)
      .eq('id', user.id)
      .single()

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
