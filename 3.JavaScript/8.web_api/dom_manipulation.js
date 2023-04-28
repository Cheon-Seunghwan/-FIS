//DOM 객체
console.log(document);

//어떤 객체의 property 조회하고 싶을 때
console.dir(document);

console.log(window.document === document);


//DOM 조작
const h1 = document.querySelector('h1');
console.log(h1, typeof h1);

//id
const h1Tag = document.getElementById('main-title');
console.log(h1Tag, typeof h1Tag);

//class
const liList = document.getElementsByClassName('list-item');
console.log(liList, typeof liList);

console.log(document.querySelector('ul li:first-of-type'), typeof document.querySelector('ul li:first-of-type'));
//querySelectAll(); -> 전체 선택해서 가져오기