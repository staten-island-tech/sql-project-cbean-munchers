<template>
  <div class="appointment">
    <h1>{{ patient_name }}</h1>
    <p>{{ reason_going }}</p>
    <p>{{ date_going }}</p>
    <p>{{ time_going }}</p>
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
