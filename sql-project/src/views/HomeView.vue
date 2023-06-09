<script setup>
import AppointmentInfo from '../components/AppointmentInfo.vue'
import { useAuthStore } from '../stores/store'
import { ref, onMounted } from 'vue'
import { supabase } from '../components/supabase.js'

const currentUser = useAuthStore().currentUser
const patient_name = ref('')
const reason_going = ref('')
const date_going = ref('')
const time_going = ref('')
const patient_email = ref('')

const allAppointments = ref([])
const filteredAppointments = ref([])

async function createAppointment() {
  const { error, data } = await supabase.from('appointments').insert([
    {
      patient_name: patient_name.value,
      reason_going: reason_going.value,
      time_going: time_going.value,
      date_going: date_going.value,
      patient_email: patient_email.value
    }
  ])
  if (error) {
    console.log(error)
  }
  console.log(data)
}

async function getAllAppointments() {
  if (currentUser) {
    const { error, data } = await supabase
      .from('profiles')
      .select('*')
      .match({ patient_email: currentUser.emails })
    
    if (error) {
      console.log(error)
    }
    
    allAppointments.value = data
    filteredAppointments.value = data
  }
}

onMounted(getAllAppointments)
</script>

<style>
.appointment-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
</style>

<template>
  <h1>Home</h1>
  <AppointmentInfo
    v-for="(appointment, index) in allAppointments"
    :key="appointment.patient_name"
    :patient_name="appointment.patient_name"
    :reason_going="appointment.reason_going"
    :time_going="appointment.time_going"
    :date_going="appointment.date_going"
    :patient_email="appointment.patient_email"
    :id="index"
  />
  <div class="burger">
    <form class="appointment-form">
      <label for="patient_name"> Your Name</label>
      <input v-model="patient_name" id="name" type="text" placeholder="name" />
      <label for="patient_email"> Your Email</label>
      <input v-model="patient_email" id="name" type="text" placeholder="email" />
      <label for="reason"> Reason for going </label>
      <input v-model="reason_going" id="reason" type="text" placeholder="reason going" />
      <label for="time"> Time you are going </label>
      <input v-model="time_going" id="time" type="text" placeholder="time going" />
      <label for="date"> Date you are going </label>
      <input v-model="date_going" id="date" type="text" placeholder="date going" />
      <button @click="createAppointment" type="button">Submit Appointment</button>
    </form>
  </div>
</template>
