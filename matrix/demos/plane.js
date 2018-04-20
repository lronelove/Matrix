let matrix=new Matrix(10,40);
let classArray=['default','star','love','words','meteor','moon'];//用来存储类的数组
//下面创建一个20个随机位置的星星
let {random,floor}=Math;
let meteorCol=20;
let meteorRow=5;
let moonRow=3;
let moonCol=6;
function creatStars(num) {
    let row,col;
    for(let i=0;i<num;i++){
        row=floor(random()*10+1);
        col=floor(random()*40+1);
        matrix.set(row,col,1);
    }
    // matrix.set(meteorRow,meteorCol,4);
}
creatStars(30);
// matrix.render('.container');
//下面是构建你的渲染的函数
function render(selector,matrix,callback) {
    let container=document.querySelector(selector);
    let data=matrix.data;
    let html=`<div class="words"></div>`,point;
    for(let i=0;i<matrix.row;i++){
        for(let j=0;j<matrix.col;j++){
            point=data[i][j];
            html+=`<div class="${classArray[point]}"></div>`
        }
    }
    container.innerHTML=html;
    if(callback){
        callback();
    }
}
render('#plane',matrix);

function madge() {
    let row=floor(random()*3);
    let col=floor(random()*3);
    matrix.set(moonRow,moonCol,0);//设置好了之后重置
    matrix.animate(row,col);//随机移动

    //下面是控制流星的位置
    row=floor(random()*10+1);
    col=floor(random()*35+1);

    //下面是设置月亮
    matrix.set(moonRow,moonCol,5);
    matrix.set(row,col,2);//设置闪烁的星星
    render('#plane',matrix);
    matrix.set(row,col,0);//设置闪烁的星星
}
matrix.set(moonRow,moonCol,5);
render('#plane',matrix);
setInterval(madge,5000);





