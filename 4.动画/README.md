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
    1. offsetLeft
       * 如果父辈元素中有定位的元素，那么就返回距离当前元素最近的定位元素边缘的距离。
       * 如果父辈元素中没有定位元素，那么就返回相对于body左边缘距离。
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
  * 无缝滚动
    1. 复制一份相同的内容放到滚动元素中
    2. 当滚动到一半的是，立即设置滚动元素left为0
  * 获取元素的当前样式
    1. getComputedStyle(obj, false)[attr] //ie8及以下ie不支持
    2. obj.currentStyle[attr] // ie8及以下使用
    3. 自己封装的getStyle函数
    4. function getStyle(obj, attr){
  		if(obj.currentStyle){ //ie8
  			return obj.currentStyle[attr];
  		}else{ //chrome等标准
  			return getComputedStyle(obj, false)[attr]
  		}
  	}
  * 属性检测
    1. 判断某个属性，在某个浏览器环境中是否支持
    2. if(obj.currentStyl)





  * 透明度fade函数
