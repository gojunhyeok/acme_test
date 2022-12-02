// 변수 지정
let slideWrapper = document.querySelector('.slide-wrapper');
let slideContainer = document.querySelector('.slide-container');
let slide = slideContainer.querySelectorAll('li');
let slideCount = slide.length;
let currentIdx = 0;
let timer;
let pager = slideWrapper.querySelector('.pager');
let prevBtn = slideWrapper.querySelector('#prev');
let nextBtn = slideWrapper.querySelector('#next');
let pagerHTML ='';

/* 슬라이드 가로 배치하기  */

/* 
for(let i = 0; i<slideCount; i++){
    //slide[i].style.left = i*100+'%'; //꼭 단위에 ''를 사용해야함 
   slide[i].style.left = `${i*100}%`;  //이렇게 빽틱을사용한 최신es6문법이있음
};

 */

// forEach 를 이용한 구문

slide.forEach((item,idx)=>{
    item.style.left = `${idx*100}%`;
    /* pagerHTML =  pagerHTML +  `<a href="">${idx}</a>`; //이것을 줄이면 밑줄이 된다.*/
    pagerHTML += `<a href="">${idx}</a>`;
});

    
pager.innerHTML = pagerHTML;



//슬라이드 이동함수
function goToslide(idx){
    slideContainer.style.left = `${-100*idx}%`;
    currentIdx = idx;
    updateSlide();
}//goToSlide 끝



updateSlide();

function updateSlide(){
        //슬라이드가 마지막이면 다음 버튼이 사라진다

        if(currentIdx == slideCount - 1){
            nextBtn.classList.add('disabled');
        } else {
            nextBtn.classList.remove('disabled')
        }
    
    
        //첫슬라이드면 이전 버튼이 사라진다.
    
        if(currentIdx == 0 ){
        prevBtn.classList.add('disabled');
        } else {
          prevBtn.classList.remove('disabled')  
        }
    
    let pagetBtn = pager.querySelectorAll('a');
    
    /*     //페이저 안 모든 a 태그 의 active 제거 , 그후 현재슬라이드에 맞는 a태그에 active 추가
    
    for(pb of pagetBtn){
        pb.classList.remove('active'); */
    
    
    
    
      /*   //현재 슬라이드 번호에 맞는 a 태그에 active추가 나머지 a태그에서 active 제거
        
        pagetBtn[currentIdx].classList.remove('active');
        for( let pb of pagetBtn){
            if(pb != pagetBtn[currentIdx]){
                pb.classList.remove('active');}
        }
     */
    
    
        // 모든 슬라이드에서 active를 제거하고, 현재 슬라이드에 active 추가
    
        /*내가한거임..ㅜ
         pagetBtn.classList.remove('active') 
        pagetBtn.forEach((item,idx)=>{
            item.class.add('active');
        });
     */
    
        for(pb of pagetBtn){
            pb.classList.remove('active');
    
        }
        pagetBtn[currentIdx].classList.add('active');
    
        for(sl of slide){
            pb.classList.remove('active');
    
        }
        slide[currentIdx].classList.add('active');
    
    
}



/* nextBtn  버튼을 클릭하면 할일*/

nextBtn.addEventListener('click',(e)=>{
    goToslide(currentIdx + 1);
});


/* 
prevBtn 버튼을 누르면 할일
 */
nextBtn.addEventListener('click',(e)=>{
    goToslide(currentIdx - 1);
});


//pagetBtn 클릭하면 클릭된 요소의 인덱스 활용, gotoSlide(그번호)가 들어오게

pagetBtn.forEach((item,idx)=>{
    item.addEventListener('click',()=>{
        e.preventDefult();
    goToslide(idx);

})
});

function autoSlide(){
timer = setInterval(() => {
   let nextIdx = (currentIdx + 1)%slideCount;
   goToslide(nextIdx);
}, 4000);
};


/* slideWrapper에 마우스가 들어오면 멈춘다, 나가면 다시 작동 */

slideWrapper.addEventListener('mouseenter',(e)=>{
    clearInterval(timer);
});
slideWrapper.addEventListener('mouseout',(e)=>{
   autoSlide();
});

