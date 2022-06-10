<template>

<!-- this component can take a fa icon in the slot, but also other content
  fa is a fontawesome component, the component must be introduced as below in a slot,
     or else it doesn't work properly-->
  <div>
      <a class="base-some-link" :href="'//' + link" target="_blank">
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