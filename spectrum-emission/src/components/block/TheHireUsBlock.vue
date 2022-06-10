<template>
<div v-if="errors.request">
  {{ errors.request }}
</div>
  <main  class="contact-wrapper ">
    <BaseH2 text="Hire us? " heading2="Start the contact" />
   <div  :class="{ tabletSucces: tabletSize, pcSucces: pcSize }" class="succes-modal-wrapper" v-if="succesModal">
        <div class="succes-modal">
          <div class="close-button">
            <fa  @click="toggleSuccesModal" :icon="['fa', 'times']" />
          </div>

          <h3 class="base-h3">Succes, {{ firstName }} {{ lastName}}</h3>
          
           <h4>
              Your mesessage  with subjectname:  <strong> {{ subject }}. </strong> <br/> Has succesfully been sent to our fake band, Spectrum Emission
           </h4>
             
            
          <p>
                  Your message: {{message}}
            
           
          </p>
          <h5 class="danger">NOTION</h5> 
          <p> Dont expect the band to answer, they are to busy being fake, <br> 
        
          but if they do, this is the email they will contact you on: {{ email }}</p>
          <strong>Have a nice nice day</strong>
        </div>
      
      </div>
    <form v-else :class="{ tabletForm: tabletSize, pcForm: pcSize }" class="" ref="form" @submit.prevent="sendEmail()">
     

      <div  class="contact-form">
        <BaseInput1
          v-model="firstName"
          name="from_first_name"
          placeholder="Your first name"
          type="text"
          inputclass="small-input"
          id="1"
          ref="firstName"
          @keyup="validate()"
        />

        <div class="error-wrapper">
          <div v-if="errors.name" class="error">
            <p>{{ errors.name }}</p>
          </div>
        </div>

        <BaseInput1
          v-model="lastName"
          name="from_last_name"
          placeholder="Your last name"
          type="text"
          inputclass="small-input"
          ref="lastName"
          @keyup="validate()"
        />

        <div class="error-wrapper">
          <div v-if="errors.lastName" class="error">
            <p>{{ errors.lastName }}</p>
          </div>
        </div>

        <BaseInput1
          v-model="email"
          name="from_email"
          placeholder="Your email"
          type="email"
          inputclass="small-input"
          @keyup="validate()"
        />

        <div class="error-wrapper">
          <div v-if="errors.email" class="error">
            <p>{{ errors.email }}</p>
          </div>
        </div>

        <BaseInput1
          v-model="subject"
          name="subject"
          placeholder="Your subject"
          type="text"
          inputclass="small-input"
          @keyup="validate()"
        />

        <div class="error-wrapper">
          <div v-if="errors.subject" class="error">
            <p>{{ errors.subject }}</p>
          </div>
        </div>

        <textarea
          @keyup="validate()"
          class="small-input"
          v-model="message"
          name="message"
          placeholder="Your message"
          type="text"
        ></textarea>
        <div class="error-wrapper">
          <div v-if="errors.message" class="error">
            <p>{{ errors.message }}</p>
          </div>
        </div>

        <div class="error-wrapper">
          <div v-if="errors.submit" class="error">
            <p>{{ errors.submit }}</p>
          </div>
        </div>

        <div class="button-left-wrapper">
          <input
            class="submit base-button-yellow"
            @click="validate"
            type="submit"
            name="Send"
          />
        </div>
      </div>
    </form>
  </main>
</template>

<script>
import emailjs from "emailjs-com";
import {
  validateName,
  validateEmail,
  validateMsg,
} from "@/utillities/validateForm.js";
import BaseH2 from "@/components/base/BaseH2.vue";
import BaseInput1 from "@/components/base/BaseInput1.vue";
export default {
  components: {
    BaseH2,
    BaseInput1,
  },
  data() {
    return {
      errors: {},
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
      valid: true,
      succesModal: null,
      tabletSize: false,
      pcSize: false,
      windowWidth: null,
      request: ""
    };
  },
   created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },

  methods: {
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
    resetForm(){
              this.firstName = "";
              this.lastName = "";
              this.email = "";
              this.subject = "";
              this.message = "";
    },
    toggleSuccesModal() {
      this.succesModal = !this.succesModal;
      if (this.succesModal== false){
        this.resetForm()
      }
    },
    validate() {
      const validName = validateName(this.firstName);
      this.errors.name = validName.error;
      if (this.valid) {
        this.valid = validName.valid;
      }
      const validLastName = validateName(this.lastName);
      this.errors.lastName = validLastName.error;
      if (this.valid) {
        this.valid = validLastName.valid;
      }

      const validEmail = validateEmail(this.email);
      this.errors.email = validEmail.error;
      if (this.valid) {
        this.valid = validEmail.valid;
      }

      const validSubject = validateMsg(this.subject);
      this.errors.subject = validSubject.error;
      if (this.valid) {
        this.valid = validSubject.valid;
      }

      const validMessage = validateMsg(this.message);
      this.errors.message = validMessage.error;
      if (this.valid) {
        this.valid = validMessage.valid;
      }

      if (
        this.errors.name == null &&
        this.errors.lastName == null &&
        this.errors.email == null &&
        this.errors.subject == null &&
        this.errors.message == null
      ) {
        this.valid = true;
      }
    },

    sendEmail() {
      if (this.valid) {
        this.toggleSuccesModal();

        emailjs
          .sendForm(
            "service_510tw19",
            "template_i4dqh7l",
            this.$refs.form,
            "L_wOq8szdbQjLxxXA"
          )
          .then(
            () => {
              
              this.valid = true;
            },
            (error) => {
              this.errors.request = error;
            }
          );
      } else {
        this.errors.submit = "Please fill out the fields that is required";
        var self = this;
        setTimeout(function () {
          self.errors.submit = null;
        }, 5000);
      }
    },
  },
};
</script>

<style></style>
