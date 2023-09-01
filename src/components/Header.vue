<template>
  <header class="header">
    <div class="container">
      <h1 class="header__logo wow animate__animated animate__fadeInLeft">Travelulu</h1>
      <div id="myNav" class="overlay">
        <div class="overlay-content">
          <div class="overlay-content__top">
            <div class="container">
              <h1 class="header__logo">Travelulu</h1>
              <a
                href="javascript:void(0)"
                class="closebtn wow animate__animated animate__fadeInRight"
                onclick="closeNav()"
                >&times;</a
              >
            </div>
          </div>
          <a href="#" class="overlay__link wow animate__animated animate__fadeInLeft"
            >Home</a
          >
          <a href="#" class="overlay__link wow animate__animated animate__fadeInRight"
            >Services</a
          >
          <a href="#" class="overlay__link wow animate__animated animate__fadeInLeft"
            >Contients</a
          >
          <a href="#" class="overlay__link wow animate__animated animate__fadeInRight"
            >Contact</a
          >
          <a href="#" class="overlay__link wow animate__animated animate__fadeInRight"
            >Privacy</a
          >
        </div>
      </div>
      <span style="font-size: 30px; cursor: pointer; color: #5f2eea" onclick="openNav()"
        >&#9776;</span
      >
    </div>
  </header>
</template>

<style lang="scss">
/* Header */

.header {
  max-width: 100%;
  padding: 34px 0px;
  border-bottom: 1px solid #d9dbe9;
  .container {
    display: flex;
    justify-content: space-between;
  }
}
.header__logo {
  font-family: Poppins_Bold;
  font-size: 34px;
  color: #5f2eea;
}

.overlay {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: #2a00a2;
  overflow-x: hidden;
  transition: 0.5s;
}
.overlay-content {
  position: relative;
  width: 100%;
  text-align: left;
  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
.overlay-content__top {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  padding-bottom: 25px;
  border-bottom: 1px solid #bca4ff;
  .container {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }
  .header__logo {
    color: #fcfcfc;
    margin-top: 15px;
  }
}

.overlay__link {
  font-family: Poppins;
  text-decoration: none;
  font-size: 30px;
  color: #f3efff;
  display: block;
  transition: 0.3s;
  padding: 40px 19.5%;
  &:hover {
    background-color: #5f2eea;
  }
}

.overlay a:hover,
.overlay a:focus {
  color: #f1f1f1;
}

.overlay .closebtn {
  text-decoration: none;
  font-size: 50px;
  color: #f3efff;
}
</style>
