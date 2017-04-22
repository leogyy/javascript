BOM
====
  1. BOM 浏览器对象模型
    * B  browser  浏览器
    * O  object   对象
    * M  model    模型
    * 简明理解：浏览器提供给开发着的js接口
  2. 核心对象是window，双重身份
    * 所有的全局变量和全局函数都在window上,window对象相当于 js的全局变量
    * 通过js访问浏览器的一个接口

#### window对象
  1. window.alert('提示内容')  //警告框

  2. window.cofirm('提示内容') //对话框
    * 用户点击确认, 返回true
    * 用户点击取消, 返回false

  3. window.prompt('默认提示语'); //输入框
    * 用户点击确定，返回 输入的文本
    * 用户点击取消，返回 null

  4. window.open(pageurl, name, param)
    * pageurl  要打开的地址
    * name  窗口的名字
    * param 窗口参数 逗号隔开
      1. width
      2. height
      3. left
      4. top
  5. 常用方法
    * window.onload 页面加载
    * window.unload 页面卸载
    * window.onscroll 滚动条滚动的时候
    * window.onresize 浏览器窗口缩放

#### 滚动距离
  0. scrollLeft  横向滚动距离
  1. document.body.scrollTop //chrome等标准浏览器
  2. document.documentElement.scrollTop
   //ie
  3. 兼容
     * ||
     * // 或 前面如果是false,
 		   // 执行 或 后面的 语句,
       // 否则 直接执行前面的语句.
     * var top = document.body.scrollTop || document.documentElement.scrollTop   
  4.返回顶部
    * 锚点
      1. <div id="top"></div>
      按钮：<a href="#top">返回顶部</a>
    * 动画方式
      1. setInterval
      2. 不断改变scrollTop 到 0
  5. 运动原理
    * 匀速运动： 当前的值 - 固定的值(speed)
    * 缓冲运动： 当前的值 - 不断变化的值(speed)

#### 定时器
  * setInterval
  * setTimeout

#### location对象
  * 获取当前访问网页的信息
  * location.href 当前页面的完整地址
  * location.hash 用于页面内跳转，获取的是字符串
  为 '#xxxx'
    1. 页面导航
  * location.host 服务器名称和端口号
  * location.hostname 不带端口号的服务器名称
  * location.search 返回查询字符串，包括问号
  * location.port 端口号
  * location.reload() 当前页面重新加载

#### history对象
  1. 历史记录对象，js操作浏览器历史记录的接口
  2. history.back() 后退  回到历史记录的上一步
  3. history.forward() 前进
  4. history.go(n) 回到第n步
     history.go(-1)  等同于 history.back()
     history.go(1)   等同于 history.forward()

#### navigator对象
  1. userAgent(用户代理) ：获取一些客户端浏览器信息 名称 引擎  操作系统
  2. appCodeName 浏览器的字符串表示
  3. appName 浏览器的名称
  4. appVersion 内核和浏览器的版本
  5. platform  操作系统
  6. 应用：返回用户浏览器等信息
    * indexOf(str) 字符串方法：
     返回 str 首次出现的索引

#### 遮罩弹层
  1. 定位
    * fixed
  2. opacity
  3. 相对可视区 水平 垂直居中
    * 弹层打开的时候，水平垂直居中
    * 浏览器窗口缩放的时候，水平垂直居中onresize
  4. 遮罩层 覆盖整个页面高度
    1. 可视区尺寸
      * document.documentElement.clientWidth
      * document.documentElement.clientHeight
    2. 文档尺寸
      * document.documentElement.scrollWidth
      * document.documentElement.scrollHeight
  5. 点击按钮打开和关闭
  6. div 相对可视区 水平垂直居中
    1. js做法
      * 距离左侧left = (可视区宽度 - 元素宽度) / 2

      * 距离顶部top = (可视区高度 - 元素高度) / 2

      
