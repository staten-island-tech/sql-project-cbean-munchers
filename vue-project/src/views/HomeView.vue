<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient'

const patientname = ref([])

async function getData() {
  const { data } = await supabase.from('patientname').select()
  patientname.value = data
  console.log(patientname)
}

const timegoing = ref([])

async function GetData() {
  const { data } = await supabase.from('timegoing').select()
  timegoing.value = data
  console.log(timegoing)
}

const dategoing = ref([])

async function GEtData() {
  const { data } = await supabase.from('dategoing').select()
  dategoing.value = data
  console.log(dategoing)
}

const reasongoing = ref([])

async function GETData() {
  const { data } = await supabase.from('reasongoing').select()
  reasongoing.value = data
  console.log(reasongoing)
}

onMounted(() => {
  getData()
  GetData()
  GEtData()
  GETData()
})
</script>
