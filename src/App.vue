<script>
import Header from "./components/Header.vue";
import Title from "./components/Title.vue";
import Card from "./components/Card.vue";

export default {
  components: {
    Header,
    Title,
    Card,
  },
  data: () => ({
    small: false,

    dataForCard: [
      {
        imgUrl: "/src/assets/img/cards/Time.svg.png",
        title: "Plan Trip Dates",
        text: "orem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
      {
        imgUrl: "/src/assets/img/cards/Plane and Money.svg",
        title: "Pay For Your Flights",
        text: "orem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
      {
        imgUrl: "/src/assets/img/cards/Money.svg",
        title: "Plan Your Finances",
        text: "orem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
    ],
  }),
  created() {
    window.addEventListener("resize", this.onResize);
    this.onResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.onResize);
  },
  methods: {
    onResize() {
      this.small = window.innerWidth <= 767;
      console.log("Small display:", this.small);
    },
  },
};
</script>

<template>
  <Header />

  <section class="intro">
    <img src="./assets/img/intro/boarding.png" alt="" class="intro__bg" v-if="small" />
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

  <section class="tool">
    <div class="container">
      <Title little="tool list" title="Use our assortment of travel plan tools" />
      <ul class="cards">
        <li class="card-box" v-for="(info, index) in dataForCard" :key="index">
          <Card :imgUrl="info.imgUrl" :title="info.title" :text="info.text" />
        </li>
      </ul>
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
    .title {
      font-family: Poppins_Bold;
      font-size: 64px;
      color: #4e4b66;
      line-height: 66px;
      width: 669px;
    }
  }
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

@media (max-width: 767px) {
  .intro {
    background-image: none;
    .intro__text {
      width: 420px;
      height: 325px;
      position: relative;
      top: 43px;
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      .title {
        font-size: 48px;
        width: 350px;
      }
    }
  }
  .intro__buttons {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    a {
      width: 100%;
    }
    .intro__btn1 {
      margin-bottom: 26px;
    }
  }
  .intro__bg {
    width: 575px;
    height: 333px;
    float: right;
  }
}
@media (max-width: 419px) {
  .intro__bg {
    width: 400px;
    height: 280px;
  }
}

// Cards

.tool {
  width: 100%;
}

.cards {
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
