// 更新日の取得
const last = new Date(document.lastModified);
const year = last.getFullYear();
const month = last.getMonth() + 1;
const date = last.getDate();
// 日付を書き換える
const target = document.getElementById('modify');
target.textContent = year + '年' + month + '月' + date + `日`;



// 目次自動生成
document.addEventListener('DOMContentLoaded', () => {
    const heads = document.querySelectorAll('h2, h3');
    if (heads && heads.length) {
        let contents = '';
        heads.forEach((head, i) => {
            let className = '';
            switch (head.localName) {
                case "h2":
                    className = `contents2`;
                    break;
                case "h3":
                    className = `contents3`;
                    break;
            }
            contents += `<li><a class="${className}" href="#head${i}">${head.textContent}</a></li>`;
            head.innerHTML += `<a id="head${i}"></a>`;
        })
        document.querySelector('#toc').innerHTML += `<ul>${contents}</ul>`;
    }
});



//ハンバーガーメニューの開閉
var headerNav = document.getElementById("header-nav");
var clickNumber = 0

window.addEventListener("DOMContentLoaded", function(){
    headerNav.style.cssText="opacity:0;";
})

document.getElementById("header-hamburger").onclick = function () {
    clickNumber++;

    if (clickNumber % 2 === 1) {
        headerNav.style.cssText = "z-index:5;opacity:1; transition:opacity .5s ease 0s;";
    } else {
        headerNav.style.cssText = "opacity:0;";
    }
}


//thank you btn
const thankYouForSeeing=document.getElementById("thank-you-for-seeing");
const thankYouForSeeingText=document.getElementById("thank-you-for-seeing-text");

document.getElementById("thank-you-btn").onclick=function(){
   thankYouForSeeing.classList.add("thank-you-for-seeing");
   thankYouForSeeingText.classList.add("thank-you-for-seeing-text");
}
