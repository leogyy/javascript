JS效果开发
====
####js实现tip效果
   ![image](https://github.com/leogyy/javascript/raw/master/preview-img/tip.png)

   1. 事件方式
      1. 兼容大多数浏览器
        * onclick on+事件名称       绑定
        * tipBtn.onclick = null;   解绑
      2. 标准浏览器
        * obj.addEventListener(eventType, Fn);     绑定 <br>
          例如： tipBtn.tipBtn.addEventListener('click', clickFn);

        * obj.removeEventListener(eventType, Fn)  解绑<br>
         例如： function clickFn(){
     				alert('click....');
     				tipBtn.removeEventListener('click', clickFn);
     		}

    2. obj.style
        * 样式对象
        * 可以设置元素的样式
        * 方式：
           1. obj.style.display = 'block'
           2. obj.style['display'] = 'block'

#### js实现实时修改页面内容
    1. obj.innerHTML
    2. obj.value
    3. document.getElementById('box')
       * 通过id
       * 返回的是object
    4. document.getElementsByTagName('p');
       * 通过html标签名
       * 返回的是类似数组的HTML集合
    5. document.getElementByClassName('text');
       * 通过class类名
       * 返回的是类似数组的HTML集合

    6. 封装函数和注释规范
        /**
        * 通过id获取html元素
        * @param string 元素的id
        * return object 获取到的元素对象
        */

         function G(sId){
       	 	return document.getElementById(sId);
       	}
