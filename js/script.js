function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(e){
  console.log(e);
  console.log(window.scrollY);
  sliderImages.forEach(slideImg => {
      //half way throught the image
      const slideInAt = (window.scrollY) + window.innerHeight - slideImg.height/2;
      //bottom of the image
      const imageBottom = slideImg.offsetTop  + slideImg.height;
      const isHalfShown = slideInAt >  slideImg.offsetTop;
      const isNotScrolledPast = window.scrollY < imageBottom;
      if(isHalfShown && isNotScrolledPast){
          slideImg.classList.add('active');
      }else{
          slideImg.classList.remove('active');
      }
  })
}

window.addEventListener('scroll', debounce(checkSlide));

