动画
====
1. css3动画(ie兼容问题)
  * transition 过渡动画
  * animation  帧动画
  * js可以控制css3动画
    1. obj.style.属性 和 css3 的transition 配合
    2. className 添加类和删除类 和css3 的transition 配合
2. JS动画
  * offset系列
    1. offsetLeft  得到距离左侧的位置
    2. offsetTop
    3. offsetWidth
    4. offsetHeight
  * offsetLeft 和 style.left 区别
    1. style.left定位元素才能取值
    2. style.left 可以赋值,得到的值为 xxpx
      而offsetLeft得到的是 数字
    3. style.left 只能得到行内样式。
    4. offsetLeft 只读，style.left 可以读写
    5. 重点： 取值用offsetLeft，设置值用style.left
  * 匀速运动
    1. 获取元素当前的 offsetLeft
    2. 设置元素的style.left  = offsetLeft + 某个数值
    3. 设置定时器，不断执行 1. 2.
    4. 到一定位置，清除定时器
  * 匀速运动move函数
    1. move(obj, nNum);
  * move函数应用
    1. 动画导航
       * onmouseover鼠标悬停
       * onmouseout 鼠标移开
       * offsetLeft
