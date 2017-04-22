bootstrap -- (官网)getbootstrap.com
====
#### 环境
  1. 生产环境
    * 线上环境
    * 图片优化、代码压缩
    * 代码混淆

  2. 开发环境
    * 开发者写的源码

#### bootstrap
  1. HTML css js的工具集
  2. twitter

#### 特点
  1. 组件
  2. 响应式 移动优先
  3. 字体图标
  4. 快速开发页面
  5. 对ie8等低版本浏览，支持度不好
  6. 栅格系统(多列布局) (重点)


#### ie if语句
   1. 语法：
   <!--[if lt IE 9]>
     这里写相应的引入文件
   <![endif]-->
   2. 解释:主要为了在不同版本ie加载不同文件
   3. * lt 小于
      * gt 大于
#### cdn
    * 加速网站访问速度      
#### 配置
   1. 开发目录
      * js -- jquery.min.js(1.9版本以上)
           -- bootstrap.min.js

      * css -- bootstrap.min.css
            -- bootrap.theme.min.css
      * html -- index.html    
#### bootstrap栅格系统
   1. row 必须包含在container里
   2. col 必须包含在row
   3. 列的尺寸，不同尺寸，列的宽度不同
       * 手机 xs col-xs-几列
       * 平板 sm col-sm
       * 电脑 md col-md
       * 超大屏 lg col-lg

#### 辅助类
    1. 快速浮动
        * pull-right
        * pull-left
    2. 块居中center-block   
    3. 文本 text-center

#### 使用
    1. 导航条组件
    2. 栅格布局
    3. 按钮
    4. 图标
    5. 排版

    
