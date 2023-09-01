<script>
export default {
  props: {
    imgUrl: String,
    title: String,
    text: String,
  },
};
</script>
<template>
  <div class="card wow animate__animated animate__fadeInUp">
    <div class="card-container">
      <img :src="imgUrl" alt="" class="card__img" />
      <h1 class="title">{{ title }}</h1>
      <p class="text">{{ text }}</p>
      <a href="#" class="link">learn more</a>
    </div>
  </div>
</template>
<style scoped lang="scss">
.card {
  width: 369px;
  height: 522px;
  border: 1px solid var(--primary-light, #e4daff);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 36px;
  .card-container {
    width: 245px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    img {
      width: 100%;
      height: 180px;
    }
    h1 {
      font-family: Poppins_SemiBold;
      font-size: 18px;
      width: 100%;
      text-align: center;
      margin-top: 28px;
    }
    p {
      font-family: Poppins;
      font-size: 16px;
      width: 100%;
      text-align: center;
      margin-top: 7px;
    }
    a {
      font-family: Poppins_SemiBold;
      font-size: 16px;
      color: var(--primary-default, #5f2eea);
      border: 2px solid #d9dbe9;
      padding: 15px 70px;
      border-radius: 50px;
      text-transform: uppercase;
      text-decoration: none;
      margin-top: 32px;
      transition: 0.3s;
      &:hover {
        background-color: #5f2eea;
        color: #d9dbe9;
        transition: all 0.3s;
      }
    }
  }
}

@media (max-width: 767px) {
  .card {
    width: 420px;
  }
}
</style>
