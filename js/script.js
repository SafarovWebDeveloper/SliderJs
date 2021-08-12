 window.addEventListener('DOMContentLoaded', ()=>{
     
      const slids = document.querySelectorAll('.offer__slide'),
          slidsWrapper = document.querySelector('.offer__slider-wrapper'),
          slidsField = document.querySelector('.offer__slider-inner'),
          width = getComputedStyle(slidsWrapper).width,
          prev = document.querySelector('.offer__slider-prev'),
          next = document.querySelector('.offer__slider-next'),
          current = document.querySelector('#current'),
          total = document.querySelector('#total')

    let slideIndex = 1;
    let offset = 0;

          slidsField.style.display = 'flex';
          slidsField.style.transition = '.5s ease';
          slidsWrapper.style.overflow = 'hidden';

          slidsField.style.width = 100 * slids.length + '%';

          slids.forEach(slide =>{
              slide.style.width = width;
          })

if(slids.length < 10){
    total.textContent = `0${slids.length}`;
    current.textContent = `0${slideIndex}`
}else{
    total.textContent = slids.length;
    current.textContent = slideIndex;
}
next.addEventListener('click', ()=>{
    if(offset == (+width.slice(0, width.length -2) * ( slids.length - 1 ))){
        offset = 0
    }else{
        offset += +width.slice(0, width.length -2)
    }








    slidsField.style.transform = `translateX(-${offset}px)`

    if(slideIndex == slids.length){
        slideIndex = 1
    }else{
        slideIndex++
    }

    if(slids.length < 10){
        current.textContent = `0${slideIndex}`;
    }else{
        current.textContent = slideIndex
    }
    

})
prev.addEventListener('click', ()=>{
    if(offset == 0){
        offset = (+width.slice(0, width.length -2) * ( slids.length - 1 ));
    }else{
        offset -= +width.slice(0, width.length -2);
    }











    slidsField.style.transform = `translateX(-${offset}px)`;

    if(slideIndex == 1){
        slideIndex = slids.length
    }else{
        slideIndex--
    }

    if(slids.length < 10){
        current.textContent = `0${slideIndex}`;
    }else{
        current.textContent = slideIndex
    }
})


 })