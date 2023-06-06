<!-- <script>
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient'

const basicstats = ref([])

async function getData() {
  const { data } = await supabase.from('userbasicdata').select()
  basicstats.value = data
  console.log(basicstats)
}

const indepth = ref([])

async function GetData() {
  const { data } = await supabase.from('userindepthstats').select()
  indepth.value = data
  console.log(indepth)
}

const agentstats = ref([])

async function GEtData() {
  const { data } = await supabase.from('useragentstats').select()
  agentstats.value = data
  console.log(agentstats)
}

onMounted(() => {
  getData()
  GetData()
  GEtData()
})
</script>

<template>
  <ul>
    <div class="basicdata" v-for="user in basicstats" :key="user.id">
      <p>{{ user.username }}</p>
      <p>#{{ user.tagline }}</p>
      <p>{{ user.playtime }} hours</p>
      <p>{{ user.current_rank }}</p>
    </div>
    <div class="indepthdata" v-for="user in indepth" :key="user.id">
      <p>{{ user.winpercentage }}%</p>
      <p>{{ user.kills }}kills</p>
      <p>{{ user.deaths }}deaths</p>
      <p>{{ user.assists }}assists</p>
      <p>{{ user.hspercentage }}headshot%</p>
      <p>{{ user.wins }}wins</p>
      <p>{{ user.kd_ratio }}k/d</p>
    </div>
    <div class="agentdata" v-for="user in agentstats" :key="user.id">
      <p>{{ user.favorite_agent }}</p>
      <p>{{ user.agent_playtime }}hours</p>
      <p>{{ user.agent_kd }}k/d</p>
      <p>{{ user.agent_winrate }}%</p>
    </div>
  </ul>
</template> -->

<template>
  <div>
    <h1>SUP</h1>
  </div>
</template>

<script>
export default {
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped></style>
