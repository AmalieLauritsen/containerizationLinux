<template>
  <div :class="newClass" class="base-card" >
      <slot>

      </slot>

  </div>
</template>

<script>
export default {
    props:[ 'newClass']
}
</script>

<style>

</style>