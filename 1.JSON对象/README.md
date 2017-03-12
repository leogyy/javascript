JSON对象
====
1. 声明一个空的JSON对象
  * var data = {};
2. 声明有初始数据的JSON对象
  * key : value
  * var tv = {
    name : "三生三世 十里桃花",
    actor : ["杨幂","赵又廷","迪丽热巴","高伟光"],
    imgUrl : "images/ssss.jpg",
    score : 9,
    year : "2017年",
    country : "中国大陆",
    type : "剧情 / 爱情"
  }

3. 取属性值
    * 使用 . + 属性名字：tv.name
    * 使用 [属性名] : tv['name']

4. 添加属性值
  * 使用. 添加属性值：tv.director = '林玉芬';

5. 数组转字符串
  * for循环
  * Array.join('/'):数组元素使用某个 字符串拼接，
  返回一个字符串
6. 遍历JSON对象
  * for in 遍历JSON对象
7. 添加方法
  * 方法名:function(){}
