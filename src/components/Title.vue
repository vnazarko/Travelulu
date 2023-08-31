<script>
export default {
  props: {
    little: String,
    title: String,
  },
};
</script>
<template>
  <div class="text-block">
    <p class="little">{{ little }}</p>
    <div class="title-block">
      <h1 class="title">{{ title }}</h1>
      <h2 class="subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pulvinar
        lorem justo, Lorem ipsum dolor sit amet, consectetur
      </h2>
    </div>
  </div>
</template>
<style scoped lang="scss">
.text-block {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  .little {
    font-family: Poppins_SemiBold;
    font-size: 16px;
    color: var(--primary-darkmode, #bca4ff);
    text-transform: uppercase;
  }
}

.title-block {
  width: 100%;
  margin-top: 36px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .title {
    font-family: Poppins_Bold;
    font-size: 48px;
    color: var(--grayscale-body, #4e4b66);
    width: 515px;
  }
  .subtitle {
    font-family: Poppins;
    font-size: 16px;
    color: #000;
    width: 435px;
  }
}

@media (max-width: 1199px) {
  .title {
    font-size: 35px !important;
  }
  .subtitle {
    font-size: 14px !important;
  }
}
@media (max-width: 1023px) {
  .title {
    font-size: 30px !important;
  }
  .subtitle {
    font-size: 12px !important;
  }
}
@media (max-width: 767px) {
  .text-block {
    margin-top: 250px;
  }
  .title-block {
    display: flex;
    flex-direction: column;
  }
  .title {
    width: 100% !important;
    font-size: 32px !important;
    text-align: left;
    margin-top: 16px;
  }
  .subtitle {
    font-size: 16px !important;
    margin-top: 40px;
    margin-left: 20px;
  }
}
</style>
