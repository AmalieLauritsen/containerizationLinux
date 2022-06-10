<template>
  <div class="contact-text">
    <!--alle contacts blev hentet fra api-->
    <div class="contact-details" v-for="contact in contacts" :key="contact.id">
      <BaseH5 :heading5="contact.title" />
      <p>{{ contact.adress.address }}</p>
      <p>{{ contact.adress.city }} {{ contact.adress.zipcode }}</p>
      <p>{{ contact.adress.country }}</p>
      <p>{{ contact.contact.email }}</p>
    </div>
  </div>
  <!--all data from api name somes will show up here -->
  <div class="some-container">
    <div class="some-icon" v-for="some in somes" :key="some.id">
      <BaseSoMeLink :link="some.link">
        <fa :icon="['fab', some.socialmedia]" />
      </BaseSoMeLink>
    </div>
  </div>
  <!--all data from api name bands will show up-->
  <div class="contact-band">
    <BaseH6 :heading6="bands.title" />
    <p>{{ bands.email }}</p>
    <p>{{ bands.phonenumber }}</p>
  </div>
</template>

<script>
import axios from "axios";
import BaseH5 from "@/components/base/BaseH5.vue";
import BaseH6 from "@/components/base/BaseH6.vue";
import BaseSoMeLink from "@/components/base/BaseSoMeLink.vue";
export default {
  name: "TheContactPart",
  components: {
    BaseH5,
    BaseH6,
    BaseSoMeLink,
  },
  data() {
    return {
      footers: [],
      contacts: [],
      bands: {},
      somes: [],
      error: null,
    };
  },
  async mounted() {
    try {
      const response = await axios.get(
        // "https://still-scrubland-97284.herokuapp.com/api/footer?populate[]=titletext&populate[]=contactinformation&populate[]=contactinformation.contact&populate[]=contactinformation.adress&populate[]=somenavbar.someitem&populate[]=spectrumemission"
        "http://localhost:1337/footer"
      );
      this.footers = response.data.data;
      this.titles = response.data.titletext.title;
      this.contacts = response.data.contactinformation;
      this.bands = response.data.spectrumemission;
      this.somes = response.data.somenavbar.someitem;
    } catch (error) {
      this.error = error;
    }
  },
};
</script>

<style lang="scss" scoped></style>
