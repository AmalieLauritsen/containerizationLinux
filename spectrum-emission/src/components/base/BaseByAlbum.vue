<template>
  <div class="album-filter">
    <BaseH4 heading4="By Album" />
    <div v-for="album in ProductAlbums" :key="album.id" class="albums">
      <p @click="showAlbum(album.id)">{{ album.title }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import BaseH4 from "@/components/base/BaseH4.vue";
export default {
  name: "BaseByAlbum",
  components: {
    BaseH4,
  },
  data() {
    return {
      ProductAlbums: [],
      error: null,
    };
  },
  methods: {
    showAlbum(id) {
      alert(id);
    },
  },
  async mounted() {
    try {
      const response = await axios.get(
        // "https://still-scrubland-97284.herokuapp.com/api/albums?populate=%2A"
        "http://localhost:1337/albums"
      );
      this.ProductAlbums = response.data;
    } catch (error) {
      this.error = error;
    }
  },
};
</script>

<style></style>
