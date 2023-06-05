<script setup>
import inputInfo from '../components/inputInfo.vue'
import BookingInfo from '../components/BookingInfo.vue'
import { ref } from 'vue'
import { supabase } from '../lib/supabase.js'

const patient_name = ref('')
const reason_going = ref('')
const date_going = ref('')
const time_going = ref('')

const allAppointments = ref([])

async function createAppointment() {
  const { error, data } = await supabase.from('appointments').insert({
    patient_name: patient_name.value,
    reason_going: reason_going.value,
    time_going: time_going.value,
    date_going: date_going.value
  })
  if (error) {
    console.log(error)
  }
  console.log(data)
}
async function getAllAppointments() {
  const { error, data } = await supabase.from('appointments').select('*')
  if (error) {
    console.log(error)
  }
  console.log(data)
  allAppointments.value = data
}

getAllAppointments()
</script>

<template>
  <div class="burger">
    <form class="appointment-form"></form>
  </div>
</template>
