<script>
import Header from "./components/Header.vue";

export default {
  components: {
    Header,
  },
};
</script>

<template>
  <Header />
  <section class="intro">
    <div class="container">
      <div class="intro__text">
        <h1 class="title">Plan your next big trip overseas</h1>
        <div class="intro__buttons">
          <a href="#" class="intro__btn1">begin plans</a>
          <a href="#" class="intro__btn2">review plans</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
/* Intro */

.intro {
  height: 620px;
  background-image: url(assets/img/intro/boarding.png);
  background-position: right;
  background-repeat: no-repeat;
  .intro__text {
    position: relative;
    top: 200px;
  }
}
.title {
  font-family: Poppins_Bold;
  font-size: 64px;
  color: #4e4b66;
  line-height: 66px;
  width: 669px;
}
.intro__buttons {
  width: 510px;
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
}
.intro__btn1 {
  font-family: Poppins_SemiBold;
  font-size: 16px;
  color: #f7f7fc;
  text-decoration: none;
  width: 243px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  background: #5f2eea;
  text-transform: uppercase;
  transition: 0.3s;
  &:hover {
    border: 3px solid #5f2eea;
    background: none;
    color: #5f2eea;
    transition: all 0.3s;
  }
}
.intro__btn2 {
  font-family: Poppins_SemiBold;
  font-size: 16px;
  color: #5f2eea;
  text-decoration: none;
  width: 243px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  border: 3px solid #5f2eea;
  text-transform: uppercase;
  transition: 0.3s;
  &:hover {
    background: #5f2eea;
    border: none;
    color: #f7f7fc;
    transition: all 0.3s;
  }
}
</style>
