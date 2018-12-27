# matrix   一个操作生成并二维数组的工具
## 使用:
a. 直接引入matrix.js,即可食用
b. 可以使用npm安裝
npm i matrix-lronelove --save

在js文件里面
```javascript
  const Matrix = require('matrix-lronelove')
  const matrx = new Matrix(2, 2) // 生成2行2列的数组
```
## 常用方法：
col: 列   row: 行  value: 值
1. matrix = new Matrix(2, 2)： 生成2行2列的数据结构
2. set(col, row, value): row行col列设置value
3. changeRow(row1, row2): 换行
4. removeCol(col)： 删除某行
5. find(value): 寻找某个数的第一个位置
6. findAll(value): 寻找某个数的所有位置
7. fillBlock(row1, row2, col1, col2, value): **在某个区域填充某个数**
8. moveToRight(steps): 向右移动几行
