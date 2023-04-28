// 콜백 함수 - 기본

// 초급 실습
// Hello 'yoo'를 출력하는 함수 greeting 구현
// 'yoo'는 하나의 파라미터 name으로 전달되는 문자열 값
function greeting (name){
    console.log(`Hello ${name}`);
}

function processUserInput (name, callbackFn){
    callbackFn(name);

}

processUserInput('Cheon', greeting);

//함수 2개 구현
//1. 사과 기다리는 함수 waitCoupang(appleBox, callback)
//함수의 동작 : `쿠팡에서 ${appleBox}가 도착했다.`
function waitCoupang(appleBox, callback){
    console.log(`쿠팡에서 ${appleBox}가 도착했다.`);
    callback(appleBox);
}
//2. bringItToNeighbor()
//'옆 집 아주머니에게 전달 완료!' 출력
function bringItToNeighbor(appleBox) {
    console.log(`'옆 집 아주머니에게 ${appleBox} 전달 완료!'`);
}

waitCoupang('사과', bringItToNeighbor);