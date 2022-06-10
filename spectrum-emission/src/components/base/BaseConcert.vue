<template>
  <div v-for="concert in concerts" :key="concert.id" class="upcoming-concert">
    <div class="concert-date-venue">
      <p class="concert-date">{{ concert.date }}</p>
      <p class="concert-venue">{{ concert.venue }}</p>
    </div>
    <p class="concert-citycountry">
      {{ concert.address.city }},
      {{ concert.address.country }}
    </p>
    <BaseButton> Ticket</BaseButton>
  </div>
</template>

<script>
import BaseButton from "@/components/base/BaseButton.vue";
import axios from "axios";
export default {
  name: "BaseConcert",
  components: { BaseButton },
  data() {
    return {
      concerts: [],
      error: null,
    };
  },
  async mounted() {
    try {
      const response = await axios.get(
        // "https://still-scrubland-97284.herokuapp.com/api/concerts?populate=%2A&sort[]=date%3Aasc"
        "http://localhost:1337/concerts"
      );
      this.concerts = response.data;
    } catch (error) {
      this.error = error;
    }
  },
};
</script>

<style></style>
