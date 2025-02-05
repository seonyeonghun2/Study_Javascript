// while 반복문 (p.542)
/*
    while(조건식) {
        반복할 코드;
        증감식;
    }
*/

// 1부터 10까지 출력
// 1. for loop
// for (let i = 1; i < 11; i++) {
//     console.log(i);
// }


// 2. while loop
// 1부터 10까지 합/곱! 계산해보세요~!
// let sum = 0;
// let i = 1;
// while (i < 11) {
//     console.log(i);
//     sum += i; // 누적 합 or 누적 곱 연산 --> 변수에 저장!!
//     i = i + 1; // i++;    
// }
// 반복문 종료하면 출력!
// alert("1부터 10까지 더한 값은 " + sum + "입니다.");


// 3. do ~ while
// 조건식이 거짓이어도 한번은 실행되는 반복문
// p.543
/*
    do {
        반복할 코드;
        증감식;
    } while (조건식);
*/

// while문으로 * 표시 
// prompt() : null 또는 입력한 문자열을 반환하는 내장 함수

let stars = parseInt(prompt("이모지를 몇개 표시할까요?"));

// while (stars > 0) {
//     document.write(" * ");
//     stars--;
// }

do {
    document.write(" * ");
    stars--;
} while (stars < 0)