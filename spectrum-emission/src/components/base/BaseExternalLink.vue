<template>

<!-- This component takes a text in it's slot-->
  <div>
      <a class="base-external-link" :href="'//' + link" target="_blank">
        <slot></slot>
      </a>
  </div>
</template>

<script>
export default {
props: [ 'link']
}
</script>

<style>

</style>