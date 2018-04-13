//这是一个测试 test ok
function Matrix(row,col,num=0) {
    this.col=col;//列数
    this.row=row;//行数
    //创建一个col列，row行的数组
    this.data=new Array(this.row);
    for(let i=0;i<this.row;i++){
        this.data[i]=new Array(this.col);
    }
    this.fillWith(num);
}
//打印的方法 test ok
Matrix.prototype.print=function(){
    console.log(this.data);
    return this.data;
};
//设置第col列，row行的数据 test ok
Matrix.prototype.set=function (col,row,value) {
    this.data[col-1][row-1]=value;
    return this.data;
};
//交换两行 test ok
Matrix.prototype.changeRow=function (row1,row2) {
    let cur=this.data[row1-1];
    this.data[row1-1]=this.data[row2-1];
    this.data[row2-1]=cur;
    return this.data;
};
//交换两列 test ok
Matrix.prototype.changeCol=function (row1,row2) {
    for(let i=0,len=this.row;i<len;i++){
        let cur=this.data[i][row1-1];
        this.data[i][row1-1]=this.data[i][row2-1];
        this.data[i][row2-1]=cur;
    }
    return this.data;
};
//把矩阵用某个数填充满 test ok
Matrix.prototype.fillWith=function (num) {
  for(let i=0,len=this.data.length;i<len;i++){
      for(let j=0,len1=this.data[0].length;j<len1;j++){
          this.data[i][j]=num;
      }
  }
  return this.data;
};
//给矩阵添加新的行 test ok
Matrix.prototype.addRows=function (count,num=0) {
    let len=this.data[0].length;
    let array=new Array(len);
    //新加的行数每一个默认为0
    for(i=0;i<len;i++){
        array[i]=num;
    }
    for(let i=0;i<count;i++){
        this.data.push(array);
    }
    this.row+=count;//添加对应的行数
    return this.data;
};
//给矩阵添加新的列 test ok
Matrix.prototype.addCol=function (count,num=0) {
    for(let j=0;j<count;j++){
        for(let i=0,len=this.data.length;i<len;i++){
            this.data[i].push(num);
        }
    }
    this.col+=count;//添加对应的列数
    return this.data;
};
//删除某行 test ok
Matrix.prototype.removeRow=function (index) {
    let len=this.data.length;
    if(index>=0&&index<len){
        this.data.splice(index-1,1);
        this.row--;        
        return this.data;
    }else{
        return false;
    }
};
//删除某列 test ok
Matrix.prototype.removeCol=function (index) {
    let len=this.data[0].length;
    if(index>=0&&index<=len){
        for(let i=0,len1=this.data.length;i<len1;i++){
            this.data[i].splice(index-1,1);
        }
        this.col--;
        return this.data;
    }else{
        return false;
    }
};
//寻找某个数的位置
Matrix.prototype.find=function (target) {
    for(let i=0,len1=this.data.length;i<len1;i++){
        for(let j=0,len2=this.data[0].length;j<len2;j++){
            if(this.data[i][j]===target){
                return [i,j];
            }
        }
    }
    return false;
};
//寻找某个数的所有位置,在第几行，第几列 ok,
Matrix.prototype.findAll=function (target) {
    let pos=[];
    for(let i=0,len1=this.data.length;i<len1;i++){
        for(let j=0,len2=this.data[0].length;j<len2;j++){
            if(this.data[i][j]===target){
                pos.push([i+1,j+1]);
            }
        }
    }
    return pos;
};
//找到某类数的个数 ok
Matrix.prototype.countFor=function (target) {
  let result=this.findAll(target);
  let len=result.length;
  return len;
};
//给某一个区域设置一个特定的数
Matrix.prototype.fillBlock=function (row1,row2,col1,col2,num) {
    for(let i=row1;i<=row2;i++){
        for(let j=col1;j<=col2;j++){
            this.data[i-1][j-1]=num;
        }
    }
    return this.data;
};

//下面封装一个让二维的数据结构移动的函数(向右)
Matrix.prototype.moveToRight=function (steps) { //test ok
    //steps 是移动的步数
   for(let j=0;j<steps;j++){
       for(let i=0,len=this.data.length,count=this.data[0].length;i<len;i++){
           let end=this.data[i].pop();
           this.data[i].splice(0,0,end);
       }
   }
    return this.data;
};
//下面是一个向上移动的函数
Matrix.prototype.moveToTop=function (steps) { //test ok
    //steps 是移动的步数
    for(let i=0;i<steps;i++){
        let start=this.data.shift();
        this.data.push(start);
    }
    return this.data;
};

//下面是一个更加一般的数据移动函数
//第一个参数数向右移动的函数，第二个是向顶部移动的函数
Matrix.prototype.animate=function(right,top){
    if(right<0){
        let steps=this.row+right;
        this.moveToRight(steps);
    }else{
        this.moveToRight(right);
    }
    if(top<0){
        let steps=this.row+top;
        this.moveToTop(steps);
    }else{
        this.moveToTop(top);
    }
};

//下面是一个渲染的函数，便于展示二维数组 ok
Matrix.prototype.render=function(selector){
    let dom=document.querySelector(selector);
    let html='';
    for(let i=0;i<this.row;i++){
        html+=`<div style="
                    margin:5px;
                    flex-wrap:nowrap;
                    width: ${this.cols*40};
                    height:15px;
                    ">`;
        for(let j=0;j<this.col;j++){
            html+=`<span onclick="console.log('第${i+1}行，第${j+1}列')" style="
                box-sizing: border-box;
                font-size: 14px;
                width: 30px;
                height:15px;
                display: block;
                float:left;
                ">${this.data[i][j]}</span>`
        }
        html+=`</div>`
    }
    dom.innerHTML=html;
};





















