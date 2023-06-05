<template>
  <div class="booking">
    <p>{{ reason_going }}</p>
    <p>{{ date_going }}</p>
    <p>{{ time_going }}</p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  reason_going: String,
  date_going: Number,
  time_going: Number
})
</script>

<style lang="scss" scoped></style>
