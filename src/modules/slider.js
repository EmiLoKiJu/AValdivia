const showSlide = (slideIndex, slidesArr, slidesToShow) => {
  for (let i = 0; i < slidesArr.length; i++) {
    slidesArr[i].classList.remove('active');
  }
   
  const startIndex = slideIndex * slidesToShow;
  const endIndex = startIndex + slidesToShow;
  
  for (let i = startIndex; i < endIndex && i < slidesArr.length; i++) {
    slidesArr[i].classList.add('active');
  }
}

const changeSlide = (slideIndex, n, slidesArr, slidesToShow) => {
  slideIndex += n;
  if (slideIndex < 0) {
    slideIndex = Math.ceil(slidesArr.length / slidesToShow) - 1;
  } else if (slideIndex >= Math.ceil(slidesArr.length / slidesToShow)) {
    slideIndex = 0;
  }

  showSlide(slideIndex, slidesArr, slidesToShow);
  
  return slideIndex;
}

export default changeSlide;