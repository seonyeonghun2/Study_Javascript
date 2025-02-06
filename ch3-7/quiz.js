// 조건 (p.554)
// ================================
// 한줄 주석 : CTRL + /
// 블럭 주석 : SHIFT + ALT + A
// ================================
/* 1. 프롬프트문 ==> form 대체
2. 취소 버튼 --> 결과 보여주지 않는다?
3. 반복문 이용, 1부터 입력받은 값까지 실행
4. 3의 배수인지 판단 (3으로 나누어 나머지가 0인지)
5. 카운터 개수를 함께 표시 ==> 몇개 인지? */

// I. 폼 데이터를 제출(=전송) 과정 제어 --> 새로고침 막기

const quizForm = document.getElementById("quiz_form");
const inputNumber = document.getElementById("input_number");
const result = document.getElementById("result");
// 동적으로 생성된 객체에 이벤트 등록 : 에러상황!!
const resetBtn = document.querySelector("reset");

let limit = 0;
let output = "";
let count = 0; // 3의 배수 카운팅 변수
// II. 이벤트(submit)를 감지하고, 다음 코드를 실행
quizForm.addEventListener("submit", function(e){
    e.preventDefault();

    // III. 사용자 입력값 유무에 따라서 다음 코드를 실행
    // 입력값 없으면 --> 입력하세요를 출력하고, 입력폼에 포커스를 준다.
    // 입력값 있으면 --> 그 숫자까지 반복문을 실행해서, 3의 배수를 출력하고~
    // 총 카운터 갯수를 결과창에 출력한다.
    if (inputNumber.value == "") {
        alert("숫자를 아무거나 입력해보세요");
        inputNumber.focus();
    } else {
        limit = inputNumber.value;

        for(let i = 1; i <= limit; i++) {
           if (i % 3 == 0) {
            output += i + ", ";
            count++;
           }
        }
        //console.log(output); // 책의 예제도 마지막값 48,  <-- 콤마 포함되어 있음
        //console.log(count); // 3의 배수 카운팅
    }

    result.innerHTML = `
        <h2>3의 배수 찾기</h2>
        <p>${output.split(",").join(",")}</p>
        <p class="count">${inputNumber.value}까지의 3의 배수 갯수: ${count}</p>
        <button type="button" id="reset">초기화</button>
    `;

    // result.className = ""; // 속성
    result.classList.remove("d-none"); // 메소드

    resetBtn.addEventListener("click", function(){
        location.reload();
    })
});