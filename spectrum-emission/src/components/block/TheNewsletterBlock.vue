<template>
  <section :class="{tabletNewsletter:tabletSize,pcNewsletter:pcSize}" class="newsletter-block">
    <BaseH2 theme="dark" heading2="Stay up to date on our journey" />
    <p class="newsletter-text">Join our mailing list for the latest news</p>
    <!-- Denne kode var brugt tidligere til at indsamle mails -->
    <!-- <div class="newsletter-form">
      <form @submit="checkForm" method="post">
       <BaseInput v-model="email"/>
       <BaseButton>
       Sign up 
       </BaseButton>
      </form>
    </div> -->
    <!-- Begin Mailchimp Signup Form -->
    <div id="mc_embed_signup" class="newsletter-form">
      <form
        action="https://gmail.us14.list-manage.com/subscribe/post?u=56c51d2152a77ff550c980f61&amp;id=168e668859"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        class="validate"
        target="_blank"
        novalidate
      >
        <div id="mc_embed_signup_scroll">
          <div class="input-wrapper">
            <div class="mc-field-group">
              <input
                type="email"
                value=""
                name="EMAIL"
                class="required email"
                id="mce-EMAIL"
                placeholder="Email adress"
              />
            </div>
            <div id="mce-responses" class="clear foot">
              <div
                class="response"
                id="mce-error-response"
                style="display: none"
              ></div>
              <div
                class="response"
                id="mce-success-response"
                style="display: none"
              ></div>
            </div>
            <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
            <div style="position: absolute; left: -5000px" aria-hidden="true">
              <input
                type="text"
                name="b_56c51d2152a77ff550c980f61_168e668859"
                tabindex="-1"
                value=""
              />
            </div>

            <div class="clear foot">
              <input
                type="submit"
                value="Subscribe"
                name="subscribe"
                id="mc-embedded-subscribe"
                class="base-button"
              />
            </div>
          </div>
          <div class="mailchimp-wrapper">
            <p class="brandingLogo">
              <a
                href="http://eepurl.com/hZXPP9"
                title="Mailchimp - email marketing made easy and fun"
                ><img
                  src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg"
                  alt="MailChimp logo"
              /></a>
            </p>
          </div>
        </div>
      </form>
    </div>

    <!--End mc_embed_signup-->
  </section>
</template>

<script>
import BaseH2 from "@/components/base/BaseH2.vue";

export default {
  name: "TheNewsletterBlock",
  components: {
    BaseH2,
  },
  data() {
    return {
      tabletSize: false,
      pcSize: false,
      windowWidth: null,
    };
  },
  // lifecycle hook: this resize applied when checkscreen is called
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
 
  methods: {
    checkForm: function (e) {
      if (this.email) return true;
      e.preventDefault();
    },

     checkScreen() {
    this.windowWidth = window.innerWidth;
    if (this.windowWidth > 750 && this.windowWidth < 1050) {
      this.tabletSize = true;
      this.pcSize = false;
      return;
    }

    if (this.windowWidth >= 1050) {
      this.pcSize = true;
      this.tabletSize = false;
      return;
    } else {
      this.tabletSize = false;
      this.pcSize = false;
      return;
    }
  },
  },
};
</script>

<style></style>
