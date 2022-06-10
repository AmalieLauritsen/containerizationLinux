<template>
    <input for="email" type="email" @blur="validateEmail" placeholder="Your Email" required> 
</template>

<script>
export default {
  data() {
    return {
      email: ''
    }
  },
}

</script>

<style>

</style>