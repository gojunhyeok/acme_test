let header = document.querySelector('header')
let sliderWrapper = document.querySelector('slide_wrapper');
let slidercontainer = document.querySelector('slide_container');
let slideCount = slide.length;
let slide = document.querySelectorAll('li');
let prevBtn = sliderWrapper.querySelector('fa-chevron-left');
let nextBtn = sliderWrapper.querySelector('fa-chevron-right');
let currentIndex = 0;
let timer ;


window.addEventListener('scroll',()=>{
    if(window.pageYOffset > 0){
        header.classList.add('active');
    }else{
            header.classList.remove('active');
        }
    }
);

//슬라이드 가로배치 

/*  
슬라이드들 마다 할일
각슬라이드 left 값 0 100 200 300 되도록
*/
e
/* slide.forEach((item,idx)=>{
    item.style.left = `${idx*100}%`;
}) */


//슬라이드 부모(sliderContainer) 너비 지정 대상.offsetWidth

slidercontainer.style.width =`${sliderWrapper.offsetWidth*slideCount}px`;
for(item of slide){
    item.style.width = `${sliderWrapper.offsetWidth*slideCount}px`;
}



//슬라이드 이동함수
/* 

*/

gotoslide(()=>{
    sliderWrapperContainer.style.left = `${this*-100}%`
})

function gotoslide(idx){
    slidercontainer.style.left = `${-idx*100}%`;
    currentIndex = idx;
}
gotoslide(1);

//다음버튼 을 누르면 할일   

/* 

*/


function autoslide(){
timer=setinterval(()=>{
    gotoslide(currentIndex++)
},4000)



sliderWrapper.addEventListener('mouseenter',()=>{

clearInterval(timer);
})

}