<template>
  <h1 :data-text="text" class="base-h1" :class="theme" >
      {{heading1}}
  </h1>
</template>

<script>
export default {
props: [ 'heading1', 'text', 'theme']
}

</script>

<style>

</style>