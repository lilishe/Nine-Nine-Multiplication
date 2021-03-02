let wrap = document.querySelector('.wrap');
let str = '';
str += `<div class="box">
            <div class="line-top"></div>
            <h1>九九乘法表</h1>
            <h2>MULTIPLICATION CHART</h2>
            <div class="line-bottom"></div>
        </div>`;
for(let i = 2; i < 10; i++){
    str += `<div class="box boxNum">
                <div class="title">${i}</div>`
    for(let j = 1; j < 10; j++){
        str += `<div class="content content${j}">${i} X ${j} = ${i * j}</div>`
    }
    str += `</div>`
}
wrap.innerHTML = str;