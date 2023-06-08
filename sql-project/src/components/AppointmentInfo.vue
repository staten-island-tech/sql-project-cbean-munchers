<template>
  <div class="appointment">
    <h1>{{ appointment.patient_name }}</h1>
    <p>{{ appointment.reason_going }}</p>
    <p>{{ appointment.date_going }}</p>
    <p>{{ appointment.time_going }}</p>
  </div>
</template>

<script>
import { defineProps } from 'vue'
export const props = defineProps({
  patient_name: String,
  reason_going: String,
  date_going: String,
  time_going: String
})
</script>

<style></style>
