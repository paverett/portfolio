<template>
  <div class="about">
    <h1>About Me</h1>
    <v-sheet color="#010203">
      <p>
        Hello all, I am Porter Averett, currently a Senior at the University of
        Arizona completing a Bachelor of Science in Information Science and
        Technology. Growing up I always had a passion for working with
        technology and it wasn’t until my first year at U of A where I decided
        what exactly I wanted to do. I wanted to write and create software. My
        degree has helped me to learn many important aspects of software
        development and engineering and has brought me closer to achieving this
        goal.
      </p>
      <p>
        In an Information Science and Technology degree one has many options of
        what to study, from game design, to web development, or the beginnings
        of data science. I studied the beginnings of data science and web
        development. I learned HTML/CSS and JavaScript, as well as Python,
        NumPy, Pandas, and some more lesser known data science Python packages.
        In addition to learning about data science concepts we learned data
        visualization because if no one else can understand the data then it
        isn’t important. Other core concepts I learned included Bayesian
        modeling, decision trees and random forest regressors. Some core traits
        I learned from my time studying are troubleshooting, breaking down
        problems in order to solve them more efficiently, and a strong
        understanding of Python, and Web Development.
      </p>
      <p>
        Check out my <a href="/resume">Resume</a>
      </p>
    </v-sheet>
  </div>
</template>

<script>
import pdf from "../assets/porterAverettResume.pdf";

export default {
  name: "About",
  data: () => ({ pdf })
};
</script>

<style lang="sass" scoped>
.v-sheet
  margin: 0 auto
  padding: 5%
  width: 70%

  @media screen and (max-width: 500px)
    width: 90%
</style>
