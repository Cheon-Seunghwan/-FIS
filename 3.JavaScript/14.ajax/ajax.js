//객체 형태
//1. 객체 생성
const xhr = new XMLHttpRequest();

//2. 서버로부터의 응답이 완료되었는지 확인
xhr.onload = () => {
    if(xhr.readyState === xhr.DONE && xhr.status === 200){ //xhr.DONE === 4
        const reponseData = xhr.responseText; //서버로부터 받은 응답 데이터
        const result = JSON.parse(reponseData);
        console.log(result);
    }
}

//3. 요청 준비하는 코드 (open())
const url = 'https://jsonplaceholder.typicode.com/users/1';
xhr.open('GET', url);

//4. 요청 실제 전송
xhr.send();