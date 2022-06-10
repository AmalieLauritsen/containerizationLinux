<template>

  <div>
      <a class="base-email-link" :href="emailadress">  
      {{ linktext}}
      </a>
  </div>
</template>

<script>
export default {
props: [ 'linktext', 'emailadress']
}
</script>

<style>

</style>