<template>
  <div>
    <div class="absoluteCenter">
      <!--<h1>Porter Averett.</h1>-->
      <h1>Developer.</h1>
    </div>
    <div class="footer">
      <a class="social-link" href="https://github.com/paverett">
        <img class="imgLink" src="@/assets/github-square.svg" />
      </a>
      <a class="social-link space-right" href="https://www.linkedin.com/in/porter-averett/">
        <img class="imgLink" src="@/assets/linkedin.png" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingPage"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import url('https://fonts.googleapis.com/css?family=Fira+Code&display=swap')
h1
    margin: 0
    padding: 0
    font-size: 5.5em
    color: white
    font-family: 'Fira Code', monospace

.absoluteCenter
    max-width: 50%
    position: absolute
    left: 50%
    top: 50%
    transform: translate(-50%, -50%)

.footer
  position: absolute
  bottom: 10px
  display: flex
  flex-direction: row
  width: 100%
  justify-content: flex-end

.social-link
  padding: 0px 10px

.space-right
  margin-right: 10px

.imgLink
  width: 50px
</style>
