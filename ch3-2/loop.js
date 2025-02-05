// 반복문 (p.537)

// 1. for loop
// for(초깃값; 조건식; 증감식) {
//     반복할 코드;
// }

// 2. while loop
// while(조건식) {
//     반복할 코드;
//     증감식;
// }

// 3. do ~ while loop
// do {
//     반복할 코드
// } while(조건식);

// 4. for ~ of loop
// for(변수 of 배열) {
//     반복할 코드
// }

// 5. for ~ in loop
// for(변수 in 객체) {
//     반복할 코드
// }

// 반복문 실습
// p.537 반복문이 왜 필요할까?

// a. 반복문 없이 1~5까지 숫자 합을 계산
let sum = 0;

// sum = sum + 1;
// sum = sum + 2; 
// sum = sum + 3; 
// sum = sum + 4; 
// sum = sum + 5; 


// b.for loop를 이용해 1~5까지 숫자 합을 계산
// for(let i = 1; i <= 5; i++) {
//     //console.log(i);
//     sum = sum + i;
// }

// document.write("1부터 5까지 숫자 합 :", sum);

// c.for loop를 이용해서 1~10까지 숫차 출력
// 조건식이 true를 반환하는 동안만 반복되고, false가 되는 순간!!
// 반복이 중지 되는것
// sum 변수에 j 변수의 값을 덧셈 연산한 최종 합을 출력해보시오!!

// 1부터 어떤 값까지 덧셈 연산을 할것인지 입력받기 : prompt()
// 변수명?? i,j,k..반복문에서 사용하는 변수명!! vs 이외는 의미있는 작명!!
/*
let userInput = Number(prompt("1부터 얼마까지 덧셈하시겠습니까?", "예) 100"));

for(let j = 1; j <= userInput; j++){
    sum = sum + j;   // sum += j;
}
document.write(`<p>sum의 누적 합 : ${sum}</p>`);

*/

// 입력 막대를 포커싱 (선택상태) ==> HTML이 브라우저가 모두 해석한 뒤
window.addEventListener("DOMContentLoaded", function(){
    const input = document.getElementById("user_input");
    input.focus();

    const form = document.getElementById("calc_form");
    const result = document.querySelector("#result");
    const final = document.querySelector("#final");
    form.addEventListener("submit", function(e) {
        e.preventDefault(); // 페이지 새로고침 금지
        
        let userValue = Number(input.value);
        // console.dir(input);
        for(let i = 1; i <= userValue; i++) {
            sum += i;
        }
        // #result 필드셋에 있는 #final 에 결과를 출력
        final.innerHTML = `
            <h2>result</h2>
            <p>1부터 ${userValue}까지 누적합 : ${sum}</p>
        `;
        result.classList.remove("d-none");

        sum = 0; // 누적합을 초기화 (다음 계산을 위해)       
        input.value = ""; // 입력창 초기화
        // 이게 아니라면, 초기화 버튼을 둔다던지..
    })
})