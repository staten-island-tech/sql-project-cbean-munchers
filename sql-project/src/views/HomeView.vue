<script setup>
import AppointmentInfo from '../components/AppointmentInfo.vue'
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
  <AppointmentInfo
    v-for="appointment in allAppointments"
    :key="appointment"
    :name="appointment.patient_name"
    :description="appointment.reason_going"
    :time="appointment.time_going"
    :date="appointment.date_going"
  />
  <div class="burger">
    <form class="appointment-form">
      <label for="patient_name"> Your Name</label>
      <input v-model="name" id="name" type="text" />
      <label for="reason"> Reason for going </label>
      <input v-model="reason" id="reason" type="text" />
      <label for="time"> Time you are going </label>
      <input v-model="time" id="time" type="text" />
      <label for="date"> Date you are going </label>
      <input v-model="date" id="date" type="text" />
      <button @click="createAppointment" type="button">Submit Appointment</button>
    </form>
  </div>
</template>
