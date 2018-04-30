//这是创建蛇这个节点的函数
function SnakeNode(key,row,col) {//key是存储的数值，row和col分别是存储行数和列数
    this.key=key;
    this.prev=null;
    this.next=null;
    this.row=row;
    this.col=col;
}
//这是控制运动方向的对象
let direction={
    left:[-1,0],
    right:[1,0],
    top:[0,-1],
    bottom:[0,1]
};
//创建蛇的一个链表
class Snake {
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
        this.direction='left';
    }
    grow(key=0,row,col){
        let snakeNode=new SnakeNode(key,row,col);
        //先判断头部存不存在，不存在的话，这个节点就是头部
        if(!this.head){
            this.head=snakeNode;
        }else{//如果头部存在
            let current=this.head;
            while (current.next){
                current=current.next;
            }
            //经过这次循环之后，current.next不存在，也就是
            //它就是最后一个节点
            current.next=snakeNode;
            snakeNode.prev=current;
        }
        //增加蛇的长度
        this.length++;
        //新的节点就是这个尾巴
        this.tail=snakeNode;
    }
    move(direct){ //把蛇的每个节点的数据继承于前节点的数据，头部节点根据方向来加减
        let current=this.tail;
        //把尾部的数据给清除掉
        maxtrix.set(current.row,current.col,0);
        while(current.prev){
            current.row=current.prev.row;
            current.col=current.prev.col;
            current=current.prev;
        }
        let pos=maxtrix.find(3);
        this.head.row+=direction[direct][0];
        this.head.col+=direction[direct][1];
        //如果头部是属于红色点的，那么会添加一个节点
        if(this.head.row===pos[1]&&this.head.col===pos[0]){
            let tail=this.tail;
            let row=tail.row-direction[direct][0];
            let col=tail.row-direction[direct][1];
            this.grow(2,tail.row,tail.col);//蛇变长
            //重新设置新的食物
            setFood();
        }
        if(this.head.row<=0){
            this.head.row+=30;//如果是碰墙了，那么到穿过到另一边
        }
        if(this.head.col<=0){
            this.head.col+=30;//如果是碰墙了，那么到穿过到另一边
        }
        if(this.head.row>30){
            this.head.row=1;
        }
        if(this.head.col>30){
            this.head.col=1;
        }
    }
}
//创建渲染页面的矩阵
let maxtrix = new Matrix(30,30);
let classList=['item','head','body','food'];//这是类的数组，默认是item
//下面是根据矩阵里面的数组去渲染画面
function render() {
    let data=maxtrix.data;
    let html='';
    for(let i=0;i<data.length;i++){
        for(let j=0;j<data[0].length;j++){
            html+=`<div class="${classList[data[i][j]]}"></div>`
        }
    }
    document.querySelector('#container').innerHTML=html;
}
//创建一个长度为4的蛇
let snake=new Snake();
snake.grow(1,10,10);
snake.grow(2,11,10);
snake.grow(2,12,10);
snake.grow(2,13,10);
//把蛇的位置信息，放在matrix里面
function getSnakePosition(){
    let current=snake.head;
    let key,row,col;
    while (current){
        key=current.key;
        row=current.row;
        col=current.col;
        maxtrix.set(row,col,key);
        current=current.next;
    }
}
getSnakePosition();
//先调用一次
//设置食物
setFood();
//初始化渲染一次
render();
function move() {
    let dir=snake.direction;
    snake.move(dir);
    getSnakePosition();
}
let timer=setInterval(()=>{
    move();
    render();
},1000);
//监听键盘上面的点击上下左右事件，改变方向
window.addEventListener('keyup',(event)=>{
   console.log(event.keyCode);// 左27，上38，右39，下40
    let code=event.keyCode;
    if(code===37){
        snake.direction='left';
    }else if(code===38){
        snake.direction='top';
    }else if(code===39){
        snake.direction='right';
    }else if(code===40){
        snake.direction='bottom';
    }
});
//设置食物这个点
function setFood() {
    let row=Math.floor(Math.random()*29)+2;
    let col=Math.floor(Math.random()*29)+2;
    if(maxtrix.get(row,col)===0){
        maxtrix.set(row,col,3);
        return true;
    }else{
        setFood();
    }
}




















