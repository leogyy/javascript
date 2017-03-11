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
      ```
        /**
        * 通过id获取html元素
        * @param string 元素的id
        * return object 获取到的元素对象
        */

         function G(sId){
       	 	return document.getElementById(sId);
       	}
    ```    

####检测QQ号
 ![image](https://github.com/leogyy/javascript/raw/master/preview-img/qqcheck.png)
            1. js获取input的值
                * obj.value
            2. input值的类型
                 * string 字符串
                 * string.length 字符串的长度
            3. 检测变量类型
                 * typeof()
                 * 返回值：string number object function boolean
            4. 字符串转数字
               * parseInt 转整数，遇到第一个不是数字的字符停止
                  1. '12345'   --> 12345
                  2. '12345.6' --> 12345
                  3. '12345abc'--> 12345
                  4. 'abc123'  --> NaN   简单理解：not an number
                  5. '123abc456'--> 123

               * parseFloat 转小数
                 1. '12345.6' --> 12345.6

               * Number()
                 1. '12345'    --> 12345
                 2. '12345.6'  --> 12345.6
                 3. '12345abc' --> NaN
                 4. 'abc'      --> NaN

            5. isNaN() 是否是NaN
               false  不是NaN 是number
               true   是NaN   不是number
            6. 判断 字符串 转换后 是否 是小数
                * parseInt(inputValue) != Number(inputValue)
                * parseInt转换input的字符串和Number转换完成
                不一致，则是小数吧
