let modalLink = document.querySelectorAll('a[class^="open"');//a태그중 오픈으로 시작하는 클래스명
let modalCloseBtn = document.querySelectorAll('.close a');

console.log(modalLink);

/* 
모달링크를 클릭하면할일
병수명 target 에 클린된 그 요소의 속성명 href의 값을 저장하고 target을 활용하여 문서에 오픈하고자 하는 대상을 선택하고클래스명을 추가한다.
*/

for(ml of modalLink){
ml.addEventListener('click',(e)=>{
    e.preventDefault(); // 링크의 기본속성 막기
    let target = e.target.getAttribute('href');
    console.log(target);
    document.querySelecter(target).classList.add('active');
});

}

for(cb of modalCloseBtn){
    cb.addEventListener('click',(e)=>{
        e.preventDefault()
        e.target.closest('.active').classList.remove('active')
        //closest 함수는 멀까?
    })
}

