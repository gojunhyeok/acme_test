document.addEventListener('DOMContentLoaded',()=>{

});

/* 대상.addEventListener('이벤트종류'할일);
할일 = 함수 = function(){

}
이벤트의 종류는
mouseover
mousout
click
keypress
scroll

 */

let target = document.querySelector('.container p');
let btn = document.getElementById('submit');
let colorSelect = document.querySelector('#color');

/* 몸통 */
colorSelect.addEventListener('change',function(){
    let selectedColor = this.value;/* colorSelect.value; */ 
    console.log(selectedColor);
    document.body./* document.querySelector('body') */style.background=selectedColor;
});

btn.addEventListener('click',()=>{
    target.style.background = 'green';
    target.style.color = 'aqua';
});

btn.addEventListener('click',()=>{
    target.style.background = '#ccc';
});