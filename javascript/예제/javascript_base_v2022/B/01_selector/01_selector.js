/*
아이디명
document.getElementById('list1')

태그명
document.getElementsByTagName('태그명')

클래스명
document.getElementsByClassName('클래스명')

CSS 선택자
document.querySelector('선택자');
document.querySelectorAll('선택자');

article p{
    color:green;
}

css 스타일 변경
대상.style.css속성명 = 값;
#ebebeb
.title{background-color:red;}
*/
document.getElementById('title').style.color = 'blue';
console.log(document.getElementsByTagName('h2'));

let title = document.getElementsByTagName('h2');

/*
document.getElementsByTagName('h2')[0].style.background='#ebebeb';
document.getElementsByTagName('h2')[1].style.background='#ebebeb';
document.getElementsByTagName('h2')[2].style.background='#ebebeb';
document.getElementsByTagName('h2')[3].style.background='#ebebeb';
*/
for(i=0;i<title.length;i++){
    title[i].style.backgroundColor='#ebebeb';
}

// 변수명 list #ebebeb
let list = document.getElementsByClassName('list');
console.log(list);

for(i=0;i<list.length;i++){
    list[i].style.backgroundColor='#ebebeb';
}

let para = document.querySelectorAll('article p');
console.log(para);

for(i=0; i<para.length;i++){
    para[i].style.color = 'green';
}

  //그럼 여기서 math random 을 이용한 무작위의 색상부여는 어떻게 해야할까? 



 
 
 
