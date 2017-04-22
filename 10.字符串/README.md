字符串
====
#### 基本应用
  1. var str = '';
    * 连接字符串 +
    * new String('abc') //包装类/实例化
    * length
#### 常用方法
  2. * split 分割成数组
     * indexOf 字符或者字符串第一次出现的位置，没找到返回-1
     * lastIndexOf() 字符最后出现的位置
     * search于indexOf相似，配合正则表达式使用
     * match 与正则表达式配合使用
     * replace('a','b');查找并替换， b 替换 a
       1. 可以和正则表达式一起使用
  3. 截取方法
    * slice(开始位置，结束位置)抽取一个子串

      1. 没有指定结束位置，截取到最后
    * substring(开始位置，结束位置)
    * slice和substring的区别
      1. slice(-1) 负数，变成倒数第几个
      2. substring(-1) 负数，相当于substring(0)
    * substr
    * toLowerCase() 转小写
    * toUpperCase() 转大写

#### json对象和json字符串
    1. json对象：{}
       * js可以之间操作，使用.和[]
       * for in
    2. json字符串
       * json格式的字符串   
    3. json字符串和json对象的互转
       * json字符串转json对象，方便之间使用js调用
       * json字符串转json对象
         1. JSON.parse(str);
         2. eval(str);
       * json对象转json字符串
         1. JSON.stringify(obj)
         2. obj.toJSONString();   
