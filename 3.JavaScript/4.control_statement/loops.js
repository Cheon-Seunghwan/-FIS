for(let index = 1; index < 5; index++){
    console.log(`${index} 번 반복`);
}

const rainbow = 'rainbow';

for(let i = 0; i < rainbow.length; i++){
    console.log(rainbow[i]);
}

const foods = ['apple', 'orange-cookie', 'avocado', 'plum'];

let favorite = '내가 좋아하는 음식은'

for (let i = 0; i < foods.length; i++) {
    // //1번
    // if(i === foods.length-1){
    //     favorite += " " + foods [i];
    //     break;
    // }
    // favorite += " " + foods [i] + ',';

    //2번
    if(i === foods.length - 1){
        favorite += ' 그리고 ' + foods[i];
        break;
    }
    favorite += " " + foods [i] + ',';
}

console.log(favorite + "입니다.");

/*
// 기본(Java에서 동일)
for (let index = 1; index < 5; index++) {
    console.log(`${index} 번 반복`);
}

const rainbow = 'rainbow';
for (let i = 0; i < 7; i++) {
    console.log(rainbow[i]);
}

// 중급
const foods = ['apple', 'orange-cookie', 'avocado', 'plum'];
let favorite = '내가 좋아하는 음식은..'
// index < 4; -> 4부분, foods.length === 4
for (let index = 0; index < 4; index++) {
    // index가 3일 때, plum을 가리킴
    if (index === foods.length -1) {
        favorite += '그리고 ' + foods[index];
    } else {
        favorite += foods[index] + ', ';
    }
}
console.log(favorite);
// 1. 내가 좋아하는 음식은.. apple, orange-cookie, avocado, plum
// 2. 내가 좋아하는 음식은.. apple, orange-cookie, avocado 
// 그리고 plum

*/

const fruits = ['apple', 'banana', 'coconut'];
//반복문처럼 작동함 - .forEach()
//뒤에 괄호 안에 변수 다름
fruits.forEach((fruit) => console.log(fruit));