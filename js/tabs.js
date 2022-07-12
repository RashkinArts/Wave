document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.tabs__btn').forEach(function(workBtn) {
      workBtn.addEventListener('click', function(event) {
        const path = event.currentTarget.dataset.path
        console.log(path)
  
        document.querySelectorAll('.tabs__content').forEach(function(workInfo) {
          workInfo.classList.remove('tabs__content__active')
        })
  
        document.querySelector(`[data-target="${path}"]`).classList.add('tabs__content__active')
      })
    })
  })