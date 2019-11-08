# **matrix-lronelove**
A tool to operate the Array of two dimension
It may be easy to handle the Array of one dimension because of the API that we know. But It may be hard to operate the Array of two dimension. So I thought about this when I wanted to make a game of snake. If I can change the data of the snake, It will be easy to make the game of snake.
That is just a example, now let's see how to use it.

### 1. install it

```
npm install matrix-lronelove --save
```

### 2. use it in your project
import 

```javascript
const Matrix = require('matrix-lronelove')
```

or
 
```javascript
import Matrix from 'matrix-lronelove'
```

```javascript
const matrix = new Matrix(2, 2)
```
now you create a Array of two dimension with many functions in it.
for example, you can use matrix.set(1, 1, 'love'), It means you set col 1, row 1, with the value ,'love'.
**<font color="red">the index starts at 1 not 0.</font>**

### 3.some functions to use

- matrix.set(row, col, value) : set the data of matrix with value at (row, col)
- matrix.changeRow(row1, row2): change two rows
- matrix.addCol() : add one col
- **matrix.blockAnimate(row1, col1, row2, col2, right, top)**: It can make one block of the matrix to move. It is a very useful function.
- and so on.There are so many useful functions to use.

### list of all the functions:
- print(): print the array of matrix
- set(row, col, value): set value.
- changeRow(row1, row2): change two rows.
- changeCol(row1,row2): change two cols.
- fillWith(num): fill the matrix with num.
- addRows(count, num = 0): add some rows filled with num, the default value of num is 0.
- addCol(count, num = 0): add some cols filled with num, the default value of num is 0.
- removeRow(index): remove one row.
- removeCol(index): remove one col.
- find(target): find the first palce of the target.
- findAll(target): find all the places of the target.
- countFor(target): return the count of the value, target
- fillBlock(row1, row2, col1, col2, num): fill one block of the matrix with the num.
- moveToRight(steps): let the whole of the matrix move towards right.
- moveToTop(steps): let the whole of the matrix move towards top.
- animate(right, top): let the whole of the matrix move as you want.
- get(row, col): get the value by the row and col.
- blockAnimate(row1, col1, row2, col2, right, top): let one block of the matrix move as you want.
- render(selector): default render function. you can rewrite it to do anything you want. You define what your app will be as what you want!

### when to use it and how to use it ?
**when to use**
when you want to make some items move, or you just want to make a game where there is a huge need for animation.
**how to use**
1. init your array of matrix
like this
```javascript
const matrix = new Matrix(2, 2)
```
2. set a map refer to one class
for example.

```javascript
const map = {
    '0': 'active',
    '1': 'unactive'
}
```
the 'active' or the 'unactive' is one className of HMTL node.

3. set the value of the matrix
```javascript
matrix.set(1, 1, 0)
```

4. define the render function by matrix
you can just see the 'matrix.render()', you can do this by your own.
now, you can see what the page look like.
this is the default render function.
```javascript
// 下面是一个渲染的函数，便于展示二维数组 ok
Matrix.prototype.render = function (selector) {
    let dom = document.querySelector(selector);
    let html='';
    for (let i = 0; i < this.row; i++) {
        html += `<div style="
                    margin:5px;
                    flex-wrap:nowrap;
                    width: ${this.cols*40};
                    height:15px;
                    ">`;
        for (let j = 0; j < this.col; j++) {
            html += `<span onclick="console.log('row${i+1}，col${j+1}')" style="
                box-sizing: border-box;
                font-size: 14px;
                width: 30px;
                height:15px;
                display: block;
                float:left;
                ">${this.data[i][j]}</span>`
        }
        html += `</div>`
    }
    dom.innerHTML = html;
};
```
you can define you own render function.

5. operate the matrix
if you want to change the shape of the page, you just don not need to operate the HTML node.
Because you hava defined the render function.
So the only thing that you need to do is to operate the matrix. Some functions to opearet the
matrix are there.After you have opearted the matrix, you just need to use the render function again.
So you can see, the page has changed.

thank you for your usage !



