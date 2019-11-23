<template>
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
</template>

<script>
export default {
  name: "contact-me"
};
</script>
