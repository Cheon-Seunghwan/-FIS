const add = (a,b) => a+b;

// 기존 함수는 {}를 사용하고 return 키워드를 사용했지만 화살표 함수는 둘 다 사용하지 않을 수 있음
//body 부분이 2줄 이상이면 {} , return 필수

const sub = (a, b) => {
    console.log('뺄셈');
    a - b;
}

//반환해야 하는 값이 객체일 때
const division = (a,b) => {
    return {
        age:2,
        namer : 'toto'
    }
}

//코드가 한 줄인데 객체 반환
const division2 = (a,b) => ({ age : 2, name : 'toto'});

//파라미터가 한 개밖에 없을 경우
const square = x => x*x;

//파라미터가 한개도 없는 경우
const drinkMachine = () => console.log('Hello');

console.log(square(4));

console.log(drinkMachine());

console.log(division());