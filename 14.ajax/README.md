ajax
====
#### 服务器
   * wamp server php开发者环境
    1. w  --- windows
    2. a  --- apache 服务器软件
    3. m  --- mysql  数据库
    4. p  --- php    php语言环境

   * 网页浏览过程
   * 服务器文件命名禁止中文
   * wamp server
     1. localhost 本机
     2. 127.0.0.1 本机

#### ajax
   * 无刷新数据读取
     1. 行业案例： 百度地图，百度搜索关键相关推荐
   * 使用ajax 必须放在服务器端
   * 使用 ajax.js 读取 服务器 data.js里的数据

   * 字符编码问题
     1. 如果页面编码和数据文件编码不一致，
     中文出现乱码问题
     2. 所有需要数据文件需要和html编码一致

#### ajax基本使用
   * 读取json或者数组
   * 注意：服务器端返回的数据为string类型
   * json字符串转json对象：JSON.parse
   * eval() 可以计算某个字符串，并执行其中js代码

     1. var str = '1+1';eval(str);
     2. eval解析json字符串，大括号{},js会认为是语句块来处理，会报错, 转json字符串：eval('({})');
#### ajax 过程
    1. 发送请求
    2. 服务器返回数据(string类型)
    3. 解析数据
    4. 根据需求显示
#### ajax问题
    1. 编码问题
    2. 缓存问题
       1. 给url传参，保证每次参数不同
       例如： url?t=11231

#### 如何自己实现一个ajax的js库
    1. ajax
       * a --- Asynchronous  异步
       * j --- Javascript
       * a --- and
       * x --- xml

    2. 核心：XMLHttpRequest对象
       * 用于向服务器发送请求
    3. ajax的过程，
       理解为 打电话
       1.  买个手机(XMLHttpRequest)
           * new XMLHttpRequest();
       2.  拨号
           * open(type, url, 类型)
              1. type -- get/post
              2. url  -- 数据地址
              3. 类型 -- true(异步) / false(同步)
                 * 异步：多件事情一起做
                 * 同步：一件一件做
       3.  等待接通
          * readyState 记录响应
            1. 0 没有初始化
            2. 1 正在发送请求
            3. 2 send()完成，有收到全部内容
            4. 3 正在解析内容
            5. 4 解析内容完成，可以在js中调用了


       4.  接通以后，进行通话
          * status属性(请求的结果状态)
          * 获取数据 responseText
    4. form表单提交数据两种方式
       1. get
           * 数据通过url(地址栏网址)，安全性低，有长度限制
       2. post
           * 不放在url中，安全性高
    5. 了解 name属性的用途：
      用于后端接收数据

    6. http错误码
      1. 404 找不到页面
      2. 503
      3. 303    
#### ajax过程
    1. 创建 XMLHttpRequest
    2. 连接服务器：open('GET',url,true);
    3. 发送请求：send()
    4. onreadystatechange 处理响应
    5. 成功以后，拿到数据 responseText

#### jquery中ajax
    1.  $.ajax() --- 全能型
    2.  $.get()  ---get方式
    3.  $.getJSON() ---  get方式获取json格式数据
    4.  $.post() --- post方式
    5.  $.getScript() --- get方式获取js代码
