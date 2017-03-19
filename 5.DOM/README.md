DOM
====
1. DOM ：文档对象模型
  * D --- document 文档
  * O --- object  对象
  * M --- model   模型
2. 节点
  * 层级划分
    1. 父节点
    2. 子节点
    3. 兄弟节点
  * 类型划分
    1. 元素节点 element node <p></p>  
    2. 文本节点 text node   '哈哈哈哈'
3. innerHTML
  * 会覆盖原来节点中内容。
4. DOM常用操作
  * 获取节点
  * 创建节点
  * 插入节点
  * 删除节点
5. 获取节点
  * document.getElementById
  * document.getElementsByTagName
  * document.getElementsByClasName
  * document.querySelectorAll('.box') //
  通过css选择器，有兼容问题
  * document.querySelector('.box')
   通过css选择器，有兼容问题,获取第一个

6. 创建节点
  * document.createElement('li')  //创建元素节点
  * document.createTextNode('三生三世') //创建文本节点

7. 插入节点：把js生成的节点，插入到页面中显示出来。
  * 父节点.appendChild(节点)  //插入节点
  * 父节点.insertBefore(在哪个节点之前插入，要插入节点)
  * insertBefore 兼容问题
    1. insertBefore 的第二个参数，如果初始为空，ie会报错，chrome等浏览器没有问题

8. 属性操作
  * setAttribute 设置节点属性
    1. setAttribute('src', 'images/xx.png')
       * 可以设置自定义属性
  * getAttribute(属性名)   

9. 删除节点
  1. 父节点.removeChild(要删除的节点)

10. 父节点
  * 子节点.parentNode
  * 父节点的父节点   
    1. 子节点.parentNode.parentNode
