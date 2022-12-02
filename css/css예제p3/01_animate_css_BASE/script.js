let sections = document.querySelector('section');
let title=document.querySelector('h1');
/* 
대상.offsetTop  대상.offsetLeft
*/
console.log(title.offsetTop);




window.addEventListener('scroll',()=>{
    let sct = window.pageYOffset ;
    for(section12 of sections){
        let ost = section.offsetTop - 700;
        let className = section12.querySelector('h2').getAttribute
        if(ost < sct){
        section12.querySelector('h2').add('className');

    }
    }
 console.log(ost,sct);
});

