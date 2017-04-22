var Ajax = null;
// 1. 创建XMLHttpRequest对象，相当于买个手机
Ajax = new XMLHttpRequest();

var url = 'data.js';

// 2. 连接服务器
console.log(Ajax.readyState); //0
Ajax.open('GET', url, true);
// 3. 发送请求

Ajax.send();
console.log(Ajax.readyState); //1

// 4. 接收服务器响应
// 类似于 window.onload = function(){}
Ajax.onreadystatechange = function(){
  console.log(Ajax.readyState);
  if(Ajax.readyState == 4){ //完成
     if(Ajax.status == 200){ //成功
       console.log(Ajax.responseText);
     }
  }
}
