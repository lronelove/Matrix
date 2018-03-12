let data=[
    [1,2,3,4],
    [1,2,3,4],
    [1,2,3,4]
];
//这是一个测试
function Matrix(col,row) {
    this.col=col;//列数
    this.row=row;//行数
    //创建一个col列，row行的数组
    let data=new Array(this.col);
    for(let i=0;i<this.col;i++){
        data[i]=new Array(this.row);
    }
    Array.call(this);//继承数组的方法和属性
}
//打印的方法
Matrix.prototype.print=function () {
    console.log(this.data);
};
/*Matrix.prototype.createMatrix=function () {
    return this.data;
};//创建矩阵*/
//设置第col列，row行的数据
Matrix.prototype.set=function (col,row,value) {
    this.data[col][row]=value;
    return this.data;
};
//交换两列
Matrix.prototype.changeColumn=function (col1,col2) {
    let col=this.data[col1];
    this.data[col1]=this.data[col2];
    this.data[col2]=col;
    return this.data;
};
//交换两行
Matrix.prototype.changeRow=function (row1,row2) {
    let row=this.data[row1];
    this.data[row1]=this.data[row2];
    this.data[row2]=row;
};
//把矩阵用某个数填充满
Matrix.prototype.fillWith=function (num) {
  for(let i=0,len=this.data.length;i<len;i++){
      for(let j=0,len1=this.data[0].length;j<len1;j++){
          this.data[i][j]=num;
      }
  }
};
















