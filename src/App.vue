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
    show: false,

    dataForCard: [
      {
        imgUrl: "/src/assets/img/cards/Time.png",
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
    services: [
      {
        link: "Planning",
      },
      {
        link: "Financing",
      },
      {
        link: "Purchasing",
      },
      {
        link: "Meeting",
      },
      {
        link: "Flying",
      },
    ],
    coyntries: [
      {
        link: "<a href='#'>North America</a>",
      },
      {
        link: "<a href='#'>South America</a>",
      },
      {
        link: "<a href='#'>Asia</a>",
      },
      {
        link: "<a href='#'>Africa</a>",
      },
      {
        link: "<a href='#'>Europe</a>",
      },
      {
        link: "<a href='#'>Australia</a>",
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

  <section class="gallery">
    <div class="container">
      <Title little="photo gallery" title="View the wonderful places you can visit" />
      <div class="gallery-slider">
        <div class="gallery-slide">
          <img src="./assets/img/slider/first.png" alt="" class="slide-img" />
        </div>
        <div class="gallery-slide">
          <img src="./assets/img/slider/second.png" alt="" class="slide-img" />
        </div>
        <div class="gallery-slide">
          <img src="./assets/img/slider/third.png" alt="" class="slide-img" />
        </div>
      </div>
    </div>
  </section>

  <section class="feedback">
    <div class="container">
      <Title little="testimonials" title="Let’s see what fans of Travelulu have to say" />
      <div class="feedback__cards">
        <img src="./assets/img/feedback/Group 261.png" alt="" class="feedback__card" />
        <img src="./assets/img/feedback/Group 259.png" alt="" class="feedback__card" />
        <img src="./assets/img/feedback/Group 261.png" alt="" class="feedback__card" />
      </div>
    </div>
  </section>

  <section class="info">
    <div class="container">
      <h1 class="info__title">Need more information to get started?</h1>
      <a href="#" class="info__btn">contact us</a>
    </div>
  </section>

  <footer class="footer">
    <div class="container">
      <div class="footer__text">
        <h1 class="footer__title">Travelulu</h1>
        <p class="footer__p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac ullamcorper
          magna, ac laoreet ex. Integer a consequat lectus. Nullam tortor sem
        </p>
        <p class="copyright">Copyright 2021, All Rights Reserved.</p>
      </div>
      <div class="footer__nav">
        <nav v-bind="small">
          <h1 class="nav__title">Services</h1>
          <ul class="nav__list">
            <li class="list__item"><a href="#" class="nav__link">Planning</a></li>
            <li class="list__item"><a href="#" class="nav__link">Financing</a></li>
            <li class="list__item"><a href="#" class="nav__link">Purhasing</a></li>
            <li class="list__item"><a href="#" class="nav__link">Metting</a></li>
            <li class="list__item"><a href="#" class="nav__link">Flying</a></li>
            <li class="list__item">
              <a href="#" class="nav__link">Planning</a>
            </li>
          </ul>
        </nav>

        <nav v-bind="small">
          <h1 class="nav__title">Continents</h1>
          <ul class="nav__list">
            <li class="list__item"><a href="#" class="nav__link">North America</a></li>
            <li class="list__item"><a href="#" class="nav__link">South America</a></li>
            <li class="list__item"><a href="#" class="nav__link">Asia</a></li>
            <li class="list__item"><a href="#" class="nav__link">Africa</a></li>
            <li class="list__item"><a href="#" class="nav__link">Europe</a></li>
            <li class="list__item"><a href="#" class="nav__link">Australia</a></li>
          </ul>
        </nav>

        <nav v-bind="small">
          <h1 class="nav__title">Contact</h1>
          <ul class="nav__list">
            <li class="list__item"><p class="nav__link">travelulu@webdite.com</p></li>
            <li class="list__item">
              <p class="nav__link" style="width: 140px">
                22 Street Address, Suburb Address Main City, PO Box Country
              </p>
            </li>
            <li class="list__item"><p class="nav__link">0 8888 88888</p></li>
            <li class="list__item"><p class="nav__link">0 8888 88888</p></li>
          </ul>
        </nav>
      </div>
    </div>
  </footer>
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

// gallery

.gallery {
  width: 100%;
  margin-top: 135px;
}

.gallery-slider {
  margin-top: 110px;
  .gallery-slide {
    // margin-right: 16px;
  }
}

@media (max-width: 1199px) {
  .gallery-slide {
    // margin-right: 8px;
  }
  .slide__img {
    width: 343px;
    height: 364px;
  }
}

// feedback

.feedback {
  margin-top: 100px;
}

.feedback__cards {
  margin-top: 57px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
}

// Info

.info {
  margin-top: 93px;
  .container {
    background-image: url(./assets/img/info/Mask.png);
    background-position: center;
    background-repeat: no-repeat;
    height: 347px;
    max-width: 1170px;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
}

.info__title {
  font-family: Poppins_Bold;
  font-size: 48px;
  color: #fff;
  text-align: center;
  width: 605px;
}

.info__btn {
  font-family: Poppins_SemiBold;
  font-size: 16px;
  color: var(--grayscale-off-white, #fcfcfc);
  text-decoration: none;
  text-transform: uppercase;
  width: 243px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  border: 2px solid #fcfcfc;
  border-radius: 40px;
  margin-top: 33px;
  &:hover {
    border-color: #fcfcfc;
    background-color: #fcfcfc;
    color: #5f2eea;
    transition: all 0.3s;
  }
}

@media (max-width: 767px) {
  .info__title {
    width: 380px;
  }
}

// Footer

.footer {
  width: 100%;
  padding-top: 100px;
  padding-bottom: 100px;
  .container {
    display: flex;
    justify-content: space-between;
  }
}

.footer__text {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.footer__title {
  font-family: Poppins_Bold;
  font-size: 20px;
  color: var(--primary-default, #5f2eea);
}
.footer__p {
  font-family: Poppins;
  color: #000;
  width: 257px;
  font-size: 14px;
  margin-top: 30px;
  margin-bottom: 40px;
}
.copyright {
  color: #000;
  font-family: Poppins_SemiBold;
  font-size: 14px;
}
.footer__nav {
  width: 700px;
  display: flex;
  justify-content: space-between;
}

nav {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.nav__title {
  font-family: Poppins_SemiBold;
  font-size: 20px;
  color: var(--grayscale-title-active, #14142b);
  margin-bottom: 0;
}
.nav__list {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.list__item {
  margin-top: 23px;
}
.nav__link {
  font-family: Poppins;
  font-size: 14px;
  color: var(--grayscale-label, #6e7191);
  text-decoration: none;
  transition: 0.3s;
  &:hover {
    color: #14142b;
    transition: all 0.3s;
  }
}

@media (max-width: 1023px) {
  nav {
    display: none;
  }
  .footer {
    display: flex;
    justify-content: center;
  }
  .footer__text {
    display: flex;
    justify-content: center;
  }
}
</style>
