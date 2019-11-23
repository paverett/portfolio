<template>
  <div class="about">
    <h1>Contact Me</h1>
    <v-sheet color="white">
      <!--<div v-html="skForm" />-->
      <form
        name="contactme"
        method="post"
        netlify
        netlify-honeypot="bot-field"
        @submit.prevent="handleSubmit"
      >
        <input type="hidden" name="form-name" value="contactme" />
        <p class="hidden">
          <label
            >Don’t fill this out if you're human: <input name="bot-field"
          /></label>
        </p>
        <div>
          <v-text-field
            light
            type="text"
            name="name"
            required
            label="Name"
            background-color="#fff"
            color="#42b983"
          />
        </div>
        <div>
          <v-text-field
            light
            type="email"
            name="email"
            required
            label="Email"
            background-color="#fff"
            color="#42b983"
          />
        </div>
        <div>
          <v-textarea
            light
            name="message"
            background-color="#fff"
            required
            label="Message"
            color="#42b983"
          ></v-textarea>
        </div>
        <button type="submit" value="Send message">Send</button>
      </form>
    </v-sheet>
  </div>
</template>

<script>
//import skForm from "./../../public/skeleton-form.html";
import axios from "axios";

export default {
  name: "contact-me",
  data() {
    return {
      form: {
        contact: ""
      }
    };
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    handleSubmit() {
      axios.post("/contact-me", {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          "form-name": "contact-me",
          ...this.form
        })
      })
        .then(() => {
          this.$router.push("thanks");
        })
        .catch(() => {
          this.$router.push("404");
        });
    }
  }
};
</script>

<style lang="sass" scoped>
h1
  margin-bottom: 3%

form
  width: 50%
  margin: 0 auto

label
  display: block
  width: 100%
  text-align: left
.v-sheet
  margin: 0 auto
  padding: 5%
  width: 70%

  @media screen and (max-width: 500px)
    width: 90%

button
  color: #000
  background-color: #fff
  width: 20%
  margin: 0 auto
  border-radius: 15px
  border: 2px solid #000

button:hover
  color: #fff
  width: 20%
  background: #000
  border: 2px solid #000

.hidden
  position: absolute
  left: -9999px
</style>
