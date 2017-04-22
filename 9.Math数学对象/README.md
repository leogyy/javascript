数学对象
====
#### 常用方法
  1. Math.abs(num) 绝对值
  2. Math.floor(x) 向下取整
  3. Math.ceil(x)  向上取整
  4. Math.round(x) 四舍五入到最接近整数
  5. Math.max(x,y) 取最大值
  6. Math.min(x,y) 取最小值
  7. Math.sqrt(x) 平方根
  8. Math.sin() tan acos asin
  9. Math.pow(x,y) x的y次幂
  10. Math.random() 0到1之间随机小数


#### 数学常量
  1. Math.E 对数的底数
  2. Math.PI 圆周率
#### 获取指定区间的随机正整数
  1. 3-7 之间的随机整数
     3 4 5 6 7
  2. (n, m)
    例如 n = 3， m = 7

公式: Math.floor(Math.random()*(m - n + 1) + n )  
   1. 0.12 * 5 + 3 = 3.6 3
   2. 0.95 * 5 + 3 = 7.75 向下取整 7
函数： getRandom(3,7)  
  3. 应用随机颜色
    1. getRandom函数
    2. 颜色存在数组arr中
    3. num:获取随机正整数在 0 到 数组长度-1 之间
    4. 取值 arr[随机正整数]
  4. 应用随机位置
     1. 0 到可视区宽度-元素自身宽度
     2. 0 到可视区高度- 元素自身高度
#### 中午吃什么
   1. 事件 onclick
   2. setInterval 定时器
   3. 随机数
   4. DOM操作
#### 消除小游戏
* 需求分析
   1. 事件 onclick
   2. js动画 move函数(从上到下运动)
   3. 点击小方块，分数加1，消除小方块，重新随机创建一个小方块
   4. 不点击触底以后，分数减1，消除小方块，重新随机创建一个小方块
      * 分数减1以后，不为0
      * 分数减1以后，为0，提示game over
* 代码结构
  1. 动态创建游戏元素div
     * class 定义大小
     * 背景颜色 随机
     * left 随机
  2. 回调函数
     * 某个函数执行完成以后，函数里调用另一个函数
     * 改造move函数，加入回调函数,可以在动画执行完成以后，在回调函数callback执行某些逻辑操作
       1. move(obj, nNum, callback);
