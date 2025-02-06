// break
// 동물의 울음 소리를 재생하는 간단한 프로그램 만들어보자
// 선택사항이 제한적인 : switch ~ case 적합
// a : 오소리의 울음소리
// w : 부엉이의 울음소리
// d : 강아지의 울음소리
/*
let select = prompt("어떤 동물의 울음소리를 듣고싶으신가요? ", "예) a, w, d 중 하나 입력하세요")

switch (select) {
    case "a": alert("오소리의 울음소리를 재생합니다");
    // break;
    case "w": alert("부엉이의 울음소리를 재생합니다.");
    break;
    case "d": alert("강아지의 울음소리를 재생합니다.");
    default: alert("a, w, d 중 하나를 입력해야 합니다!");
    location.reload(); // 페이지 새로 고침    
}
document.write("동물 울음소리 재생을 중지합니다.")
*/



// 국, 영, 수 과목의 점수를 입력받고,
// 성적의 평균과 등급을 출력하는 간단한(=prmpt() 함수)
// 프로그램을 작성해보세요!
// 프로그래밍적 사고 --> 변수 이름, 연산자, 함수...고민!!

// 범위(range) : if ~ else 적합
// 91 ~ 100 : a 학점
// 81 ~ 90 : b 학점
// 71 ~ 80 : c 학점
// ....등등..

// prompt() : null 이거나 사용자의 입력 문자열 반환하는 함수!!
let kor = Number(prompt("국어 점수를 입력하세요", "예) 100점 --> 100 입력"));
let eng = Number(prompt("영어 점수를 입력하세요", "예) 100점 --> 100 입력"));
let math = Number(prompt("수학 점수를 입력하세요", "예) 100점 --> 100 입력"));

// + 연산자 : (1) 숫자를 덧셈연산   (2) 문자를 연결하는 연산

let sum = kor + eng + math; // 100+90+90 --> 280 : number
let avg = parseInt(sum / 3); // 나눗셈 연산 ==> 소수 발생 ==> Math 객체 : 올림, 버림, 반올림,..

if (avg >= 90) {
    alert("A등급 입니다.");
} else if(avg >= 81 && avg < 90) {
    alert("B등급 입니다.");
} else {
    alert("F등급 입니다.")
} 

