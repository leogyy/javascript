JS效果开发
====
js实现tip效果
####

   1. 事件方式
      1. 兼容大多数浏览器
        * onclick on+事件名称       绑定
        * tipBtn.onclick = null;   解绑
      2. 标准浏览器
        * obj.addEventListener(eventType, Fn);     绑定
          例如： tipBtn.tipBtn.addEventListener('click', clickFn);

        * obj.removeEventListener(eventType, Fn)  解绑
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
