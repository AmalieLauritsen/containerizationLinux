<template>
  <img :class="imgClass" :src="require(`@/assets/img/${imgSrc}.png`)" :alt="altTxt">
  <slot> </slot>
</template>

<script>
export default {
props: [ 'imgSrc', 'altTxt', 'imgClass']
}
</script>

<style>

</style>