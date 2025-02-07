const btnPrev = document.querySelector("#btn-prev");
const btnNext = document.querySelector("#btn-next");
const pages = document.querySelector("#pager");
const $plates = document.querySelector(".plates");
let num = 1; // 현재사진 번호

btnNext.addEventListener("click", function(){
    console.log("다음 버튼 클릭");
    if (num >= 3) {
        num = 1;
    } else {
        ++num; // 1,2,3
    }
    pages.innerText = `${num} / 3`;
    let plates_x = -1 * 500 * (num -1); // -500, -1000, -1500 ==> 사진이 안맞는 상황 발생
    $plates.style.left = plates_x + "px"; // 새로운 계산된 x 위치
});

btnPrev.addEventListener("click", function(){
    console.log("이전 버튼 클릭");
    if (num <= 1) {
        num = 3;
    } else {
        --num;
    }
    pages.innerText = `${num} / 3`;
})
