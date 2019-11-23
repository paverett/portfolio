<template>
  <div class="about">
    <h1>Resume</h1>
    <v-sheet color="#010203" height="100vh" width="75%">
      <object :data="pdf" type="application/pdf" width="100%" height="100%">
        <p>
          Alternative text - include a link
          <a target="_blank" :href="pdf">to the PDF!</a>
        </p>
      </object>
    </v-sheet>
  </div>
</template>

<script>
import pdf from "../assets/porterAverettResume.pdf";

export default {
  name: "resume",
  data: () => ({ pdf })
};
</script>

<style lang="sass" scoped>
h1
  margin-bottom: 3%

.v-sheet
  margin: 0 auto
</style>
