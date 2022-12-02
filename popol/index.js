
// 사이드바  광고 

let imgs = document.querySelectorAll('.fp'),          //img
    lightbox = document.getElementById("lightbox-overlay"),    //아이디 lightbox-overlay 보여줄칸 배경
    lightboxImg = document.getElementById("lightbox-image");       //lightbox-image 사진을 가져올 통로
    // , (콤마를 이용한 선언은 let을 하나만 사용하여 다중으로 선언을 할수 있따.)

for(let img of imgs){
img.addEventListener('click',(e) =>{  //이미지를 누르면
    e.preventDefault();

    let newImgSrc = e.target.getAttribute('data-lightbox'); //  그 이미지에 data-lightbox="images/img-01-large.jpg"의 속성을가져옴
    console.log(newImgSrc);                                 // 누른 이미지의 속성을 가져온다는거임 어디에? newImgSrc에
    lightboxImg.setAttribute('src',newImgSrc);              //그후 통로에 이미지를 가져올 요소 src에 가져올사진의정보 newimgSrc를 적용

    //light 보이도록
    lightbox.classList.add('visible');
})

};

lightbox.addEventListener('click',()=>{
    lightbox.classList.remove('visible')
});




//