let modalLink = document.querySelectorAll('a[class^="open"');
let modalCloseBtn = document.querySelectorAll('.close a');

for(let ml of modalLink){
    ml.addEventListener('click',(e)=>{
        e.preventDefault();
        let target = e.target.getAttribute('href');
        console.log(target);
        document.querySelector(target).classList.add('active');
    });
}

for(cb of modalCloseBtn){
    cb.addEventListener('click', (e)=>{
        e.preventDefault();
        e.target.closest('.active').classList.remove('active');
    })
}