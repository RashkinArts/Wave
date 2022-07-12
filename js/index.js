
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