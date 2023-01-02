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
            contents += `<li><a href="#head${i}">${head.textContent}</a></li>`;
            head.innerHTML += `<a id="head${i}"></a>`;
        })
        document.querySelector('#toc').innerHTML += `<ul>${contents}</ul>`;
    }
});
