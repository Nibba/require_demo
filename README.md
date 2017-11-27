# require.js demo

### 1.使用原因

因为在项目中，往往需要引入很多个js文件，并且依次加载，使得网站失去响应时间不确定，影响打开网站速度。

其次多个js文件依赖必须严格保证加载顺序，当依赖关系复杂时，无论是引入还是维护都变得困难

### 2.加载require.js
`<script src="require.js" defer async='true' ></script>`

defer属性和async都是表示文件异步加载，也可以不加但是把引入文件放在html文件底部，否则会影响页面响应时间

### 3.require.config

```
    require.config({
        baseUrl:'js/libs',
    　　paths: {
    　　　　"jquery": "jquery-3.2.1.min",
            "math":"test"
    　　}
    });
```
baseurl顾名思义，为引入依赖文件夹
paths则给依赖命名，并需要写入依赖文件名

### 4.模块文件

```
require(['jquery','math'],function($,math){
    console.log("test:"+$("body"),math.add(1,2))
})
```
