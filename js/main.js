// console.log("加载成功")


require.config({
    baseUrl:'js/libs',
　　paths: {
　　　　"jquery": "jquery-3.2.1.min",
        "math":"test"
　　}
});

require(['jquery','math'],function($,math){
    console.log("test:"+$("body"),math.add(1,2))
})

