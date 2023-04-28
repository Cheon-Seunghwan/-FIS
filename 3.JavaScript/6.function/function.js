//파라미터 함수에 값을 전달하기 위해 참고하는 부분
/**
 * @param {number} a
 * @param {number} b
 * @return {number} 덧셈 결과 반환
 * @author 'Kim'
*/

function add(a,b) {
    return a+b;
}

console.log(add(1,2));

//함수 역시 객체 타입의 값이기 때문에 생성한 함수를 변수에 할당할 수 있음

const mtp = function multiply(a, b){
    return a * b;
}
//변수()로 함수 호출 가능
console.log(mtp(1,4));

//ES(ECMAScript)
const sub = (a, b) => {return a - b;}

console.log(sub(8-4));