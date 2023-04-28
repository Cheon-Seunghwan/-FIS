//선택박스 + 결과 부분에 해당하는 html 코드 js로 불러오기
const selectButton = document.querySelector('select');
console.log(selectButton);
const paragraph = document.querySelector('p');
console.log(paragraph);
//선택박스의 값 중 한 가지가 선택될 경우 js로 데이터 전달
selectButton.addEventListener('change', setResult);

function setResult(){
    const choice = selectButton.value;
    console.log(choice);
    if (choice === 'one') {
        paragraph.textContent = '쿠키 한 박스';
    } else if (choice === 'two') {
        paragraph.textContent = 'bad';
    } else {
        paragraph.textContent = 'NO';
    }
}
//js에서 데이터에 따라 결과 부분에 원하는 값을 출력할 수 있도록 제어