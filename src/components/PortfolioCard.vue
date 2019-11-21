<template>
  <v-card hover max-width="500px" class="pa-4">
    <v-card-title>{{ data.title }}</v-card-title>
    <v-img v-bind:alt="data.alt" :src="data.image" class="m-auto p-image" />
    <v-card-subtitle>{{ data.description }}</v-card-subtitle>
    <v-btn :to="data.link" exact depressed>Check it out</v-btn>
  </v-card>
</template>

<script>
export default {
  name: "PortfolioCard",
  props: {
    data: {
      type: Object
    }
  }
};
</script>

<style lang="sass" scoped>
.p-image
  width: 75%

.m-auto
  margin: 0 auto
</style>
