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
  * document.getElementsByClassName
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
11. 节点信息
   * nodeType
     1. 文本节点 为 3
     2. 元素节点 为 1
   * nodeName
     1. 元素节点 为  大写的 标签，例如: UL
     2. 文本节点 为 #text
12. 子节点
   * firstChild 第一个子节点 ie下获取的是元素，chrome下会获取第一个空节点，例如回车
   * lastChild  最后一个子节点，也有兼容问题,同上
   * firstElementChild 第一个元素子节点
   * lastElementChild  最后一个元素子节点
   * childeNodes 所有的节点，包括回车等
   * children 空节点不会计算在内
13. 兄弟节点
   * nextSibling  下一个节点
   * previousSibling  上一个节点
   * nextElementSibling 下一个元素节点
   * previousElementSibling 上一个元素节点
   * 案例：留言板
   * ![image](https://github.com/leogyy/javascript/raw/master/preview-img/msg.png)
<br>
   * 案例：排序
     1. insertBefore(要插入的节点，
       在哪个节点之前插入)
     2. nextElementSibling
     3. previousElementSibling
     4. 向上：把当前的li，插入到它的 上一个兄弟节点前面
     5. 向下：把当前的li的 下一个兄弟节点，插入到当前 li的前面
  * ![image](https://github.com/leogyy/javascript/raw/master/preview-img/paixu.png)
