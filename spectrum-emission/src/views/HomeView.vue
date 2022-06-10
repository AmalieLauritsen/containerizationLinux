<template>
  <main class="home" id="Home">
    <TheHeroFrontpage />
    <TheNewsletterBlock />
    <TheSoMeBlock />
    <TheStoreBlock />
    <TheConcertsBlock />
    <TheYoutubeBlock />
  </main>
</template>

<script>
// @ is an alias to /src
import TheHeroFrontpage from "@/components/block/hero/TheHeroFrontpage.vue";
import TheNewsletterBlock from "@/components/block/TheNewsletterBlock.vue";
import TheSoMeBlock from "@/components/block/TheSoMeBlock.vue";
import TheStoreBlock from "@/components/block/TheStoreBlock.vue";
import TheConcertsBlock from "@/components/block/TheConcertsBlock.vue";
import TheYoutubeBlock from "@/components/block/TheYoutubeBlock.vue";

export default {
  name: "HomeView",
  components: {
    TheHeroFrontpage,
    TheNewsletterBlock,
    TheSoMeBlock,
    TheStoreBlock,
    TheConcertsBlock,
    TheYoutubeBlock,
  },
};
</script>
