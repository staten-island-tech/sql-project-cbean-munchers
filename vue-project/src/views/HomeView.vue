<script setup>
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
