/*
* ---------------------------------------------------------------------------
* Vanilla JavaScript Version
* ---------------------------------------------------------------------------
*/
let mainHeader = document.querySelector('#main-header');
let logo = document.querySelector('#logo');
let defaultLogo = 'images/logo.svg';
let smallLogo =  'images/logo-shrink.svg';
/*
window.addEventListener('scroll',()=>{
    if(window.pageYOffset > 0){
        if(!mainHeader.classList.contains('shrink')){
            mainHeader.classList.add('shrink');
            changeLogo(smallLogo);
        }
    }else{
        if(mainHeader.classList.contains('shrink')){
            mainHeader.classList.remove('shrink');
            changeLogo(defaultLogo);
        }        
    }
});
*/
let excuted = false;

window.addEventListener('scroll',()=>{
    if(window.pageYOffset > 0){
        if(excuted == false){
            mainHeader.classList.add('shrink');
            changeLogo(smallLogo);
            excuted = true;
        }
    }else{
        if(excuted == true){
            mainHeader.classList.remove('shrink');
            changeLogo(defaultLogo);
            excuted = false;
        }        
    }
});

function changeLogo(newLogo){
    logo.classList.add('hide');

    setTimeout(()=>{
        logo.setAttribute('src', newLogo);
        logo.classList.remove('hide');
    }, 400);
}