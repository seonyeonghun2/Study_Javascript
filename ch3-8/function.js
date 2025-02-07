// 함수가 왜 필요할까? (p.557)
// 재사용성 극대화 --> 코드를 적게 사용, 시작~끝

// 두 수를 더하는 함수 만들기

// 1.함수 선언식 : 어디서든 선언하고, 어디서든 실행할 수 있는 형태
/* 
함수명();
function 함수명(){
    실행명령;
}

 */

// 2.익명 함수 : 반드시 먼저 선언한 이후에 실행(=호출)할 수 있는 형태

/* welcome();
let welcome = function(){
    alert("반갑습니다")
} */

// 3.화살표 함수 : 함수 표현식을 좀더 짧게 사용, ECMAScript5 에 추가된 형식
// 3-1. 함수 선언식 예시
/* function addNumber(a, b) {
    alert(a + b);
}
// 3.1 화살표 함수 예시    
const addNumber = (a, b) => alert(a + b); */

// 프런트엔드 개발자는 최신자바스크립트의 경우 화살표 함수를 더 많이 사용!!

// I. 함수 없이 덧셈, 뺄셈, 곱셈, 나눗셈 연산
// 전역변수 선언 및 초기화
// let num1 = 0; // 첫번째 입력값을 저장하는 변수
// let num2 = 0; // 두번째 입력값을 저장하는 변수

// while (true) {
//   let select = prompt("선택하세요", "a:덧셈, s:뺄셈, m:곱셈, d:나눗셈");
//   switch(select) {
//     case "a": addNumber();
//     break;
//     case "s": subNumber();
//     break;
//     case "m": mulNumber();
//     break;
//     case "d": divNumber();
//     break;
//     default: alert("잘못 누르셨습니다!");
//   }
// }

// // II. 함수를 사용해서    ↑   동일한 연산을 하는 프로그램
// function inputNumber(){
//     num1 = Number(prompt("첫번째 숫자를 입력하세요"));
//     num2 = Number(prompt("두번째 숫자를 입력하세요"));    
// }
// function addNumber(){
//     inputNumber();
//     alert(`두 수의 합 : ${num1 + num2}`);
// }
// function subNumber(){
//     inputNumber();
//     alert(`두 수의 차 : ${num1 - num2}`);
// }
// function mulNumber(){
//     inputNumber();
//     alert(`두 수의 곱 : ${num1 * num2}`);
// }
// function divNumber(){
//     inputNumber();
//     alert(`두 수의 나눗셈 결과 : ${num1 / num2}`);
// }

// DOM 선택 메소드[CSS선택자] : .querySelector(), .querySelectorAll();
// ※ querySelectAll()의 경우, 선택한 DOM 요소를 NodeList(=집합, collection)로 반환

const calcForm = document.querySelector("#calc_form");
const result = document.querySelector("#result");
const process = document.querySelector("#process");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");
const btn5 = document.querySelector(".btn5");
const btn6 = document.querySelector(".btn6");
const btn7 = document.querySelector(".btn7");
const btn8 = document.querySelector(".btn8");
const btn9 = document.querySelector(".btn9");
const btn10 = document.querySelector(".btn10");
// 연산자 버튼
const btn11 = document.querySelector(".btn11");
const btn12 = document.querySelector(".btn12");
const btn13 = document.querySelector(".btn13");
const btn14 = document.querySelector(".btn14");
const btn15 = document.querySelector(".btn15");

// 최초 입력상태 : 참 or 거짓
let initInput = true; 
let statement = "";


calcForm.addEventListener("submit", function(e){
    e.preventDefault(); 
    showSolution();
});

btn1.addEventListener("click", function(){ // 숫자 1
    if (initInput) {
        // 최초 입력상태라면, 수행할 코드
        statement += 1;
        result.value = statement;
    } else {
        // 최초 입력 아니라면 (+,-,*,/) 수행할 코드
        // 결과창에 있던 값을 지우고 (이전 입력값을 초기화 x ==> 어딘가에 임시로 저장)
        result.value = "1";
        //연속으로 누르는건지 그렇다면
    }
});
btn2.addEventListener("click", function(){
    // 숫자 --> 클릭 횟수에 따라 1, 11, 111 처리, 누른횟수 체크!!
    // 문자 --> 덧셈 연산, "1", "11", "111" --> 연산을 위해 Number() 처리
    // 현재 기본값(value) : 0
    result.value += "2"; 
});
btn3.addEventListener("click", function(){
    // 숫자 --> 클릭 횟수에 따라 1, 11, 111 처리, 누른횟수 체크!!
    // 문자 --> 덧셈 연산, "1", "11", "111" --> 연산을 위해 Number() 처리
    // 현재 기본값(value) : 0
    result.value += "3"; 
});
btn4.addEventListener("click", function(){
    // 숫자 --> 클릭 횟수에 따라 1, 11, 111 처리, 누른횟수 체크!!
    // 문자 --> 덧셈 연산, "1", "11", "111" --> 연산을 위해 Number() 처리
    // 현재 기본값(value) : 0
    result.value += "4"; 
});
btn5.addEventListener("click", function(){
    // 숫자 --> 클릭 횟수에 따라 1, 11, 111 처리, 누른횟수 체크!!
    // 문자 --> 덧셈 연산, "1", "11", "111" --> 연산을 위해 Number() 처리
    // 현재 기본값(value) : 0
    result.value += "5"; 
});
btn6.addEventListener("click", function(){
    // 숫자 --> 클릭 횟수에 따라 1, 11, 111 처리, 누른횟수 체크!!
    // 문자 --> 덧셈 연산, "1", "11", "111" --> 연산을 위해 Number() 처리
    // 현재 기본값(value) : 0
    result.value += "6"; 
});
btn7.addEventListener("click", function(){
    // 숫자 --> 클릭 횟수에 따라 1, 11, 111 처리, 누른횟수 체크!!
    // 문자 --> 덧셈 연산, "1", "11", "111" --> 연산을 위해 Number() 처리
    // 현재 기본값(value) : 0
    result.value += "7"; 
});
btn8.addEventListener("click", function(){
    // 숫자 --> 클릭 횟수에 따라 1, 11, 111 처리, 누른횟수 체크!!
    // 문자 --> 덧셈 연산, "1", "11", "111" --> 연산을 위해 Number() 처리
    // 현재 기본값(value) : 0
    result.value += "8"; 
});
btn9.addEventListener("click", function(){
    // 숫자 --> 클릭 횟수에 따라 1, 11, 111 처리, 누른횟수 체크!!
    // 문자 --> 덧셈 연산, "1", "11", "111" --> 연산을 위해 Number() 처리
    // 현재 기본값(value) : 0
    result.value += "9"; 
});
btn10.addEventListener("click", function(){
    // 숫자 --> 클릭 횟수에 따라 1, 11, 111 처리, 누른횟수 체크!!
    // 문자 --> 덧셈 연산, "1", "11", "111" --> 연산을 위해 Number() 처리
    // 현재 기본값(value) : 0
    result.value += "0"; 
});
btn11.addEventListener("click", function(){ // 덧셈
    initInput = !initInput;
    process.value = result.value + "+";

});
btn12.addEventListener("click", function(){ // 뺄셈
    console.log("-");
});
btn13.addEventListener("click", function(){ // 곱셈
    console.log("*");
});
btn14.addEventListener("click", function(){ // 나눗셈
    console.log("/");
});
// btn15는 submit 버튼(=) 으로 대체
// btn15.addEventListener("click", function(){ // 결과버튼(=)
//     if (!initInput) { // + 눌렀는지 체크 : false
//         let output = `${parseInt(process.value) + parseInt(result.value)}`;
//         result.value = output;
//     }
// });


function showSolution() {
    //실행하려는 코드가, 아까 그것!
    if (!initInput) { // + 눌렀는지 체크 : false
        let output = `${parseInt(process.value) + parseInt(result.value)}`;
        result.value = output;
    }
}