
//more_podcasts

const morePodcasts = document.querySelectorAll('.more_podcasts');
const moreBtn = document.querySelector('#more_podcasts_btn');

  moreBtn.addEventListener('click', function() {
    morePodcasts.forEach(function(card) {
      card.classList.add('is_active')
    });
    moreBtn.remove();
  });

//select

const element = document.querySelector('#selectCustom')
const choices = new Choices(element, {
  searchEnabled: false,
  shouldSort: false,
  itemSelectText: '', 
})


//form


new JustValidate('.js-form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 12,
    },
  
    mail: {
      required: true,
      email: true
    },
  
  },
  
  messages: {
    name: 'Ошибка',
    mail: 'Ошибка',
  },
  
  colorWrong: '#FF6F6F'
  
  })

//accordion
 $(function () {
 $("#accordion").accordion();
 });


const swiper = new Swiper('.us__mid', {
  // Optional parameters
  loop: true,
  slidesPerView: 4,
  spaceBetween: 30,

  breakpoints: {
    // when window width is >= 320px
    1160: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  },

  // Navigation arrows
  navigation: {
    nextEl: '.us__arrow_next',
    prevEl: '.us__arrow_prev',
  },
});