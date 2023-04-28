//boolean타입 변수 명은 의문문 형태로 작성할 것을 권장
let isShoppingDone = false;
let childAllowance = 10000;

if (isShoppingDone) {
    childAllowance += 5000;
} else {
    childAllowance -= 2000;
}

console.log(childAllowance);

// // 엄마의 쇼핑을 도와주면 용돈을 더 받기로 했음

// // 예/아니오로 표현될 수 있는 boolean 타입의 값은 변수명을 의문문의 형태로 작성을 권장
// let isShoppingDone = true; // 쇼핑이 끝났는지? 물어보는 변수
// let childAllowance; // 내 용돈을 의미하는 변수 선언(초기화는 안한 상태)
// let sisterAllowance;

// // 조건문 작성법: if (조건식) { 조건이 true일 때 동작시킬 코드 작성 부분 }
// if (isShoppingDone === true) {
//     // { } 조건이 성립할 때 작성할 코드가 2줄 이상이면 그 코드들을 그룹핑하기 위해서 사용하는 블럭(Block)
//     childAllowance = 5000;
// } else { // 엄마의 쇼핑을 안도와줄 때 동작할 코드
//     childAllowance = -5000; // ?? 내 용돈!
// }

// console.log(childAllowance);