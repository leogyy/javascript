事件
====
#### DOM事件级别
  1. DOM0
    * 所有浏览器都支持
    * 绑定：使用 on + 事件类型:onclick
    * 解绑：on + 事件类型 = null;
    * 一个元素只能绑定一次 同类型的事件
      1. 如果多次绑定同一类型事件，后面会覆盖前面
  2. DOM2
    * 绑定：element.addEventListener(type,fn,[useCapture])
      1. type  事件类型 click
      2. fn   执行的函数
      3. useCapture 是否使用捕获  true 或 false

    * 解绑：element.removeEventListener(type, listener, [useCapture]);
    * 可以绑定多个事件

  3. 事件目标(event target)
    * 发生事件的那个元素
  4. 事件处理函数(event handler)
    * 处理和响应事件的函数
  5. 事件对象(event object)
    * 包含特定事件的详细信息的 一个 对象
    * 鼠标位置
      1. clientX 和 clientY
        * 相对于浏览器窗口左上角
      2. pageX 和 pageY
        * 相对于文档左边缘 X
        * 相对于文档上边缘 Y
  6. 鼠标事件
    * onclick  鼠标点击
    * onmouseover  鼠标移入
    * onmouseout  鼠标移出
    * onmousemove 鼠标移动
    * onmouseup  鼠标抬起
    * onmousedown 鼠标按下

  7. 键盘事件
    * onkeydown  按下键盘按键时
    * onkeyup    按键被松开时
    * onkeypress 键盘按键被按下，并被释放的时候发生
    * keyCode 返回按键触发的时候的键盘码
    * 动态显示剩余输入文字个数
  8. 表单事件
     * 文本框等表单控件选中或者选中状态改变的时候，触发的事件
     * onfocus 获取焦点
     * onblur  失去焦点
     * onchange 内容改变时，并且点击了空白处
  9. 模拟select表单组件
     1. 点击 该组件，出现下拉选项
     2. 点击 下拉选项，组件显示文本会改变
     3. 点击 空白的地方，收起下拉选项
     4. 处理事件冒泡
  10. 事件流或者事件传播
     * 描述了浏览器是如何处理事件
     1. 事件冒泡
        * 某个事件默认会向上传播或者冒泡，会触发
     父元素以及祖先元素上的相同事件
     2. 事件捕获
     3. ie8和以下不支持事件捕获

     4. 阻止事件冒泡
        * e.stopPropagation();

  11. 事件冒泡的应用
     * 事件委托
        1. 利用事件会冒泡，而且在冒泡阶段会传播到父元素上，可以把处理程序绑定在父元素上
        2. 解决动态创建的元素，无法绑定事件的问题。
        3. 节省内容，优化性能

        
