数组
====
#### 数组
1. 声明数组
  * var arr = ['a','b','c'];
  * var arr = []; //空数组
  * var arr = new Array('a','b');
2. 其他类型
  * function
    1. var test = function(){}
    2. var test = new Function

  * string  
    1. new String
3. for循环遍历
4. length 长度
#### 数组基本操作
  5. 数组push， 尾部添加
    1. arr.push(元素)
  6. 数组pop   尾部删除
    1. arr.pop()
  7. shift  头部删除
    1. arr.shift()
  8. unshift 头部添加
    2. arr.unshift(元素)
  9. join 数组转字符串，按某个字符连接
  10. splice(开始位置，长度，元素) 从开始位置，删除几个元素  
     * 删除 arr.splice(1,2);删除从索引1开始，包括自身的两个元素
     * 插入 arr.splice(2, 0,'x');
    长度为0的时候，可以插入元素
     * 替换 arr.splice(2, 2, 'x');
  11. slice(起始位置，结束位置)
     * 取数组的一片，不包括结束位置
####
  1. 排序
    * sort()
    * sort(function(){

      }) 使用自定义函数，函数返回值
      1. -1 第一个数比第二个数靠右
      2. 1  第一个数比第二个数靠左
      3. 0  大小一样
    * localeCompare //按当地的习惯来排
  2. reverse() 反转数组
     * 1 2 3 4 5 反转 5 4 3 2 1   
#### 数组连接
  1. concat
#### 数组去重
  1. [1,2,3,2,4,1,5,3,2,6] 去重得到
     [1,2,3,4,5,6]
      新建数组[]，遍历旧数组，取元素
      判断新数组是否有某个数据，没有push，有跳过
     1. [1]  
     2. [1,2]
     3. [1,2,3]
     4. [1,2,3]
     5. [1,2,3,4]
        ....
     6. [1,2,3,4,5,6]

   2. 判断某个数据 是否在数组中存在
       [1,2,3,4]

         3  true
         0  false    
      funciton arrHasEl(arr,el){

      }
