cookie
====
#### cookie
  1. 用途
    * 信息存在客户端计算机上，用于客户端和服务器进行数据交互
    * 比如： 自动登录，记住用户名
    * 除了js，其他语言有cookie
  2. 特性
    * 同一个网站中所有页面共享一套cookie
    * 数量和大小有限制
        1. firefox大概50个左右，
        chrome没什么限制
        2. 每个cookie所存放的数据不能超过4k，超过4k的话，返回空字符串
    * 过期时间
      1. 如果不设置，关闭浏览器自动清除
      2. 设置以后，超过时长自动清除
    * 清除cookie
      1. 浏览器工具
      2. 代码设置，设置过期时间
   3. cookie一般只有火狐可以直接打开页面进行访问，其他浏览器需要在服务器环境使用。
#### js中如何使用cookie
    1. 设置cookie
      * document.cookie = 'key=value'
      例如：document.cookie='user=kitty';
    2. 设置过期时间
      * document.cookie="user=kitty;expires=date"
      * var date = new Date();
   	 //设置到某一天
    	 date.setDate(date.getDate()+10);
   	 date.toGMTString();
     * document.cookie='age=18;expries='+date;
   3. 获取cookie   
      * alert(document.cookie);
   4. 封装setCookie函数
   5. 封装getCookie函数
   6. 封装removeCookie函数
   7. js库 cookie.js
