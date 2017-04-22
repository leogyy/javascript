正则表达式
====
#### 正则表达式
  * Regular Expression
   使用字符串描述或者匹配一系列某写规则的字符串(php,java都支持)
  * 字符串
  * 去匹配另一个字符串
  * 例如：\bis\b 匹配 单词is
#### 正则表达式图形
   * https://regexper.com

#### 语法
  * \b 词边界
  * \d 表示数字
  * {num} 表示量词 例如{4}
  * ^  表示开头
  * $  表示结尾
  * [] 表示或
  * . 表示任意字符
  * \  代表转义
  * + 至少有一个
  * \s 表示空白符
  * g global 全局搜索
  * () 分组
  * | 或
  * * 出现零次或者多次(任意次)
  * 日期：2017/03/31 2017-03-31
    1. ^\d{4}[/-]\d{2}[/-]\d{2}$
  * 单词
     1. \b单词\b
  * http://开头 .jpg结尾的url
     1. ^http:\/\/.+\.jpg$    
#### js中使用正则表达式
  1. 创建方式
    Reg对象
    * var reg = /正则表达式/;
    * var reg = new RegExp('正则表达式')
  2. 使用方式
    * 配合字符串相关方法
      1. str.replace(reg, '最终值')
      2. str.search() 忽略全局g
      3. str.match

    * Reg对象上的方法
      1. Reg.exec(str)
       * 没有匹配，返回null
       * 匹配成功，返回数组
      2. Reg.test(str) 避免使用全局 g  
         * 返回 true 和false  
      
