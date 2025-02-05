// p.534 자리 배치도 만들기 1
// 입장객 수,  한줄에 몇명씩 앉을것인지를 입력받고 : prompt()
// 총 몇줄이 필요한지 계산 : 연산자, 나머지 0 (몫), 1(몫 + 1)
// switch ~ case로 처리

// 1. 프로그램 작성전에 변수, 변수이름, 연산식을 생각!!
// 입장객 수 : memNum [member , number]
// 한줄에 앉을 사람 수 : colNum [column, number]
// 계산할 값(필요한 줄의 갯수) : rowNum [row, number]

// 2. 코드 작성
let memNum = Number(prompt("입장객 수가 몇명인가요?", "예)20명이라면, 20 입력"));
let colNum = Number(prompt("한줄에 몇명이 앉을건가요?", "예)5명이라면, 5 입력"));
let rowNum = 0;

// 20명, 5명씩 ==> 20 / 5 : 4줄  <---> memNum / colNum : 몫, 나머지(%)
// 23명, 5명씩 ==> 23 / 5 : 4줄 + 3명 (1줄) 

// 조건비교 : if ~ else  <---> 선택범위가 좁으면 <----> switch ~ case 로 변환!!
if (memNum % colNum === 0) {
    rowNum = memNum / colNum;
} else {
    rowNum = parseInt(memNum / colNum) + 1;
}

// 전통적인 문자열+변수 출력 방식
// document.write("<h2>총 " + rowNum + "줄이 필요합니다.</h2>");

// 템플릿 문자열(template literal) : 백틱(`)을 사용하는 방식
// document.write() : 줄바꿈x --> 두번째 매개변수로 태그를 추가 하는 경우, <br>
// document.wrtiteln() : 그냥 잘 안씀...아무튼 안씀..

document.write(`<h2>총 ${rowNum} 줄이 필요합니다.</h2>`);
