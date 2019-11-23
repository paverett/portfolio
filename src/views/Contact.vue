<template>
  <div class="about">
    <h1>Contact Me</h1>
    <v-sheet color="white">
      <form
        name="contactme"
        action="/thanks"
        method="post"
        netlify
        netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contactme" />
        <div>
          <v-text-field
            light
            type="text"
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
</style>
