    let matrix =new Matrix(10,40);
    //绘制出来'l'的数据结构
    matrix.fillBlock(3,7,5,5,1);
    matrix.fillBlock(7,7,6,7,1);
    //绘制'o'的数据结构
    matrix.set(3,10,1);
    matrix.fillBlock(4,6,9,9,1);
    matrix.set(7,10,1);
    matrix.set(7,11,1);
    matrix.fillBlock(4,6,12,12,1);
    matrix.set(3,11,1);
    //绘制出'v'的数据结构
    matrix.set(3,14,1);
    matrix.set(5,15,1);
    matrix.set(7,16,1);
    matrix.set(5,17,1);
    matrix.set(3,18,1);
    //绘制出'E'的数据结构
    matrix.fillBlock(3,3,20,23,1);
    matrix.fillBlock(4,7,20,20,1);
    matrix.fillBlock(7,7,20,23,1);
    matrix.fillBlock(5,5,20,22,1);
    //把数据结构展示在页面里面
    matrix.render('#love-data');
    //现在我们已经有了数据结构，那么现在我们就可以依据数据结构
    //  来渲染页面
    function render(selector,matrix,callback) {
        let container=document.querySelector(selector);
        let data=matrix.data;
        let html='';
        for(let i=0;i<matrix.row;i++){
            html+=`<div style="width: ${matrix.cols*20}px;height:20px;">`;
            for(let j=0;j<matrix.col;j++){
                html+=`<span class="${'item'+data[i][j]}"></span>`
            }
            html+=`</div>`
        }
        container.innerHTML=html;
        if(callback){
            callback();
        }
    }
    render('#love',matrix);
    //上面的41行代码只是一个简单的静态的二维图形结构
    //下面的代码可以让它动起来
   let timer=setInterval(()=>{
       render('#madge',matrix, ()=> {
           matrix.moveToRight(1);//核心代码只有一行
       });
   },100);







