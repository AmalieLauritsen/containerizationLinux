<template>
  <!--class binding applying to nav, when you scroll on the page in certain pixels it will shrink up the nav-->
  <header :class="{ 'scrolled-nav': scrolledNav }">
    <nav>
      <div class="branding">
        <router-link class="link" :to="{ path: '/', hash: '#Home' }"
          ><img
            class="logo-header"
            alt="Spectrum Emission logo"
            src="@/assets/img/se-logo.png"
        /></router-link>
      </div>
      <!--checking if not mobile-->
      <ul v-if="!mobile" class="navigation">
        <li>
          <!--link to home-->
          <router-link class="link" :to="{ path: '/', hash: '#Home' }"
            >Home</router-link
          >
        </li>
        <li>
          <router-link
            class="link"
            :to="{ path: '/', hash: '#TheConcertsBlock' }"
            >Tickets</router-link
          >
        </li>
        <li>
          <router-link
            class="link"
            :to="{ path: '/', hash: '#TheYoutubeBlock' }"
            >Films</router-link
          >
        </li>
        <li>
          <router-link class="link" :to="{ path: '/Store' }">Store</router-link>
        </li>
        <li>
          <router-link class="link" :to="{ path: '/Contact' }"
            >Contact</router-link
          >
        </li>
      </ul>
      <!--if mobile nav is true this icon will show up-->
      <div class="icon">
        <i
          @click="toggleMobileNav"
          v-show="mobile"
          style="font-size: 36px; color: #efdab9"
          class="fa fa-bars"
          :class="{ 'icon-active': mobileNav }"
        ></i>
      </div>
      <!--show only if mobile nav is true-->
      <transition name="mobile-nav">
        <ul v-if="mobileNav" class="dropdown-nav">
          <li>
            <router-link
              @click="toggleMobileNav"
              class="link"
              :to="{ path: '/', hash: '#Home' }"
              >Home</router-link
            >
          </li>
          <li>
            <router-link
              @click="toggleMobileNav"
              class="link"
              :to="{ path: '/', hash: '#TheConcertsBlock' }"
              >Tickets</router-link
            >
          </li>
          <li>
            <router-link
              @click="toggleMobileNav"
              class="link"
              :to="{ path: '/', hash: '#TheYoutubeBlock' }"
              >Films</router-link
            >
          </li>
          <li>
            <router-link
              @click="toggleMobileNav"
              class="link"
              :to="{ path: '/Store' }"
              >Store</router-link
            >
          </li>
          <li>
            <router-link
              @click="toggleMobileNav"
              class="link"
              :to="{ path: '/Contact' }"
              >Contact</router-link
            >
          </li>
        </ul>
      </transition>
    </nav>
  </header>
  <router-view />
</template>

<script>
export default {
  name: "TheHeader",
  path: "TheHeader",
  data() {
    return {
      scrolledNav: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    };
  },
  // lifecycle hook: this resize applied when checkscreen is called
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  //this will mounted the scroll and then you can see the changes of the nav
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  //this will triggger toggleMobileNav
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
    // this will scroll if the scrollposition is over 50
    updateScroll() {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        this.scrolledNav = true;
        return;
      }
      this.scrolledNav = false;
    },

    // this function is checking screen size if the window width is less than or equal to then it shows the mobile nav
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobile = true;
        return;
      }
      // if not true the mobile nav is not showing up
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
  },
};
</script>
<style lang="scss" scoped></style>
