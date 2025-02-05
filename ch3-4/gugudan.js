// let sum = 0;
// for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     sum += i * j;
//     document.write(`<p>${i} x ${j} = ${i * j}</p>`);
//   }
// }
// document.write(`<p>누적 합: ${sum}</p>`);

// 1. 반복문을 이용한 구구단 만들기
// ※ 이런거 만들려고 자바스크립트 쓰는건 아닙니다!!!

/*
    반복문의 종류
    1) for
    2) while
    3) do ~ while
    4) for ~ of : js only
    5) for ~ in : js only
*/

// 1. 2단 구구단 : 만들기!
// 2 x 1 = 2
// 2 x 2 = 4
// ...
// 2 x 9 = 18

// 2. 원하는 구구단 : 만들기!
// let total = 0;
// let userNumber = prompt("몇단 구구단을 출력하시겠습니까?")
// for(let i = 1; i < 10; i++){
//     total = total + userNumber * i;     
//     document.write(`<p>${userNumber} x ${i} = ${userNumber * i}</p>`); // 1 ~ 9 출력
// }
// document.write(`<p>구구단 ${userNumber}단의 누적합 : ${total}</p>`)

// 3. 2단 ~ 9단

/*
    2 x 1 = 2    3 x 1 = 3   4 x 1 = 4

              ...반복...

    2 x 9 = 18   3 x 9 = 27  4 x 9 = 36
*/

let htmlTags = "";

for(let i = 2; i < 10; i++){
    htmlTags += "<div class='box'>";
    for(let j = 1; j < 10; j++){
       htmlTags += `<p>${i} x ${j} = ${i * j}</p>`;
    }
    htmlTags += "</div>";
}
document.write(htmlTags)

