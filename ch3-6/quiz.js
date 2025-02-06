// 사용자 입력 : .prompt()  ---> form
// 폼 요소 접근 메소드 : .querySelector() 또는 .getElementById()
// 입력폼 값 접근 프로퍼티 : .value
// 폼 제출 하면 실행 : .addEventListener(), "submit" 이벤트
// 요소의 기본 이벤트를 제한 : e.preventDefault() 함수 호출

const quizForm = document.querySelector("#quiz_form");
const userNumber = document.querySelector("#user_number");
const resultDiv = document.querySelector("#result");

quizForm.addEventListener("submit", function(e){
    e.preventDefault(); // form의 기본동작-새로고침-중지 하는 명령어 실행
    // console.log(userNumber.value); // string!

    // 입력값의 4의 배수인지 판단
    if (userNumber.value % 4 === 0) {
        resultDiv.innerHTML = "<h2>4의 배수일까, 아닐까?<h2> \
                                <p>" + userNumber.value + "는 4의 배수 입니다.</p>";
    } else {
        resultDiv.innerHTML = "<h2>4의 배수일까, 아닐까?<h2> \
                                <p>" + userNumber.value + "는 4의 배수가 아닙니다.</p>";
    }

    resultDiv.classList.remove("d-none");
})