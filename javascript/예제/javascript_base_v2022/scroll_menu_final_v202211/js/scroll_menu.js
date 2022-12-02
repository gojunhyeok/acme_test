//변수지정
let menu = document.querySelectorAll('#top_menu ul li');
let contents = document.querySelectorAll('#contents > section ');

//메뉴 클릭 이동
/*
for(let m of menu){
  m.addEventListener('click',(e)=>{
    e.preventDefault();

    let targetId = e.target.getAttribute('href'); // #section1
    let targetOST = document.querySelector(targetId).offsetTop;

    window.scrollTo({top:targetOST, behavior:'smooth'});

  }); //메뉴 클릭 이벤트
}
*/

menu.forEach((m,idx)=>{
  m.addEventListener('click',(e)=>{
    e.preventDefault();
    let targetOST = contents[idx].offsetTop;
    window.scrollTo({top:targetOST, behavior:'smooth'});
  }); //메뉴 클릭 이벤트
});



//스크롤 이동 반영하기  
window.addEventListener('scroll',()=>{
  let winSCT = window.pageYOffset;

  contents.forEach((item,idx)=>{
    if(item.offsetTop <= winSCT){ 
      for(let m of menu){
        m.classList.remove('active');
      }
      menu[idx].classList.add('active');
    }    
  });

});

