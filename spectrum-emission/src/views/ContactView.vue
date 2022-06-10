<template>
  <TheHeroContactpage/>
  <TheHireUsBlock/>
</template>

<script>
import TheHireUsBlock from '@/components/block/TheHireUsBlock.vue'
import TheHeroContactpage from '@/components/block/hero/TheHeroContactpage.vue'
export default {

components: {
    TheHireUsBlock, TheHeroContactpage
}, 
mounted() {
    window.scrollTo(0, 0);
  },
}
</script>

<style>

</style>