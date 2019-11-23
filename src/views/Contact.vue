<template>
  <v-sheet color="white">
    <form name="contactme" method="post" data-netlify="true">
      <input type="hidden" name="form-name" value="contactme" />
      <label for="name">Name:</label>
      <input type="text" name="name" id="name" />'
      <label for="email">Email:</label>
      <input type="email" name="email" id="email" />
      <label for="message">Message:</label>
      <textarea type="text" name="message" id="message" />
      <button>Submit</button>
    </form>
  </v-sheet>
</template>

<script>
export default {
  name: "contact-me"
};
</script>

<style lang="sass" scoped>
h1
  margin-bottom: 3%

form
  width: 50%
  margin: 0 auto
  @media screen and (max-width: 500px)
    width: 90%

label
  display: block
  width: 100%
  text-align: left
  color: #000

input
  border: 1px solid #000
  width: 100%
  color: #000

textarea
  border: 1px solid #000
  width: 100%
  color: #000
  height: 200px

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
  @media screen and (max-width: 500px)
    width: 90%

button:hover
  color: #fff
  width: 20%
  background: #000
  border: 2px solid #000

.hidden
  position: absolute
  left: -9999px
</style>
