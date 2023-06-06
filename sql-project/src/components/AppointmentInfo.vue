<template>
  <div class="booking">
    <h1>{{ patient_name }}</h1>
    <p>{{ reason_going }}</p>
    <p>{{ date_going }}</p>
    <p>{{ time_going }}</p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  patient_name: String,
  reason_going: String,
  date_going: Number,
  time_going: Number
})
</script>

<style></style>
