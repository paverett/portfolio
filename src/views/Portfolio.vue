<template>
  <v-container fluid grid-list-md style="width: 85%">
    <v-row>
      <v-col
        justify-self="center"
        align-self="center"
        xs="12"
        sm="12"
        md="6"
        lg="4"
        xl="3"
        v-for="project in projects"
        :key="project"
      >
        <PortfolioCard :data="project" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import PortfolioCard from "@/components/PortfolioCard.vue";

export default {
  name: "Portfolio",
  components: {
    PortfolioCard
  },
  data: function() {
    return {
      projects: [
        {
          title: "Units",
          image: require("@/assets/units.png"),
          description:
            "An app to convert multiple units of measurement at the same time. Built with Flutter.",
          link: "/portfolio/units",
          alt: "A picture of the units application"
        },
        {
          title: "Sustainable Chef",
          image: require("@/assets/sc.png"),
          description:
            "A full stack web application to help reduce food waste. Built with Django, QuaggaJS, and Postgres",
          link: "/portfolio/sustainable_chef",
          alt: "A picture of the sustainable chef application"
        },
        {
          title: "Xo's Wardrobe",
          image: require("@/assets/under-construction.png"),
          description:
            "A web app to aggregrate products from multiple sites to reduce time switching between sites. Built with Vue, MongoDB, and Golang",
          link: "/portfolio/xo",
          alt: "A picture of the xo application"
        }
      ]
    };
  }
};
</script>
