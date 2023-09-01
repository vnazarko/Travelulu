import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

$(document).ready(function(){
    $('.gallery-slider').slick({
      autoplay: true,
      autoplaySpeed: 1500,
      infinity: true,
      slidesToShow: 2,
      responsive: [{
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
          }
      }],
    });
  });
