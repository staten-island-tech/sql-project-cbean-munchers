<template>
  <div class="appointment">
    <h1>{{ patient_name }}</h1>
    <p>{{ reason_going }}</p>
    <p>{{ date_going }}</p>
    <p>{{ time_going }}</p>
    <p>{{ patient_email }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      props: {
        patient_name: String,
        reason_going: String,
        date_going: String,
        time_going: String,
        patient_email: String
      }
    }
  }
}
</script>

<style></style>
