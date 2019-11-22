<template>
  <v-app id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/portfolio">Portfolio</router-link>
    </div>
    <router-view />
  </v-app>
</template>

<style lang="sass">
.theme--dark.v-application
  background: linear-gradient(0deg, rgba(0,0,0,.15) 0%, rgba(0,0,0,1) 85%), url("./assets/building.jpg") !important
  width: 100% !important
  min-height: 100vh !important
  background-size: cover !important
  background-position: center !important
  background-repeat: no-repeat !important

#app
  font-family: "Roboto", Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  font-size: 1.1em
  text-align: center
  color: #F5F5F5
  text-rendering: geometricPrecision
  line-height: 170%

#nav
  padding: 30px
  display: flex
  flex-direction: row
  justify-content: flex-end

  a:focus
    outline: none

  a
    font-weight: bold
    color: #F5F5F5
    padding: 0 10px


    &.router-link-exact-active
      color: #42b983
</style>
