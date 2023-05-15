<template>
  <form class="form-widget" @submit.prevent="updateProfile"></form>
</template>

<script setup>
import { supabase } from '../supabase'
import { onMounted, ref, toRefs } from 'vue'

const props = defineProps(['session'])
const { session } = toRefs(props)
const loading = ref(true)
const username = ref('')
const tagline = ref('')
const website = ref('')
const peakRank = ref('')
const rank = ref('')

onMounted(() => {
  getProfile()
})

async function getProfile() {
  try {
    loading.value = true
    const { user } = session.value

    let { data, error, status } = await supabase
      .from('usernames')
      .select(`username, website, peakRank, rank, tagline`)
      .eq('id', user.id)
      .single()

    if (error && status !== 406) throw error

    if (data) {
      username.value = data.username
      website.value = data.website
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
