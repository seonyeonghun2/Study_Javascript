// p.545 break 문으로 구구단 4단까지만 표시하기

// 구구단 [2,3,4]..9단
/*
    2 x 1 = 2   3 x 1 = 3   4 x 1 = 4   ...  9 x 1 = 9
    ...계속..

    2 x 9 = 18   3 x 9 = 27  4 x 9 = 36  ... 9 x 9 = 81
*/
let sum = 0; // 누적합
let total = 0; // 총합
let lastDansu = 0; // 마지막 출력한 구구단 수
for(let j = 2; j <= 9; j++) {
    document.write("<div class='box-container'>")
    document.write("<div class='box'>");
    for(let i = 1; i <= 9; i++) {
        sum += j * i
        document.write(`<p>${j} x ${i} = ${j * i}</p>`);
    }
    document.write("</div></div>");    
    document.write(`<p>----------------------</p>`)
    document.write(`<p>${j}단 누적합 : ${sum}</p>`);
    document.write(`<p>----------------------</p>`)
    total += sum;
    if (j == 4) {
        lastDansu = j;
        break; // 단순 if문
    }
}
document.write(`<p>=====================================</p>`)
document.write(`2단 부터 ${lastDansu}단 까지, 구구단 총합 : ${total}`);
document.write(`<p>=====================================</p>`)