$(function(){
    //    动态计算屏幕宽度，来设置1rem的值
    var width = window.screen.width
    var rem = width/10 ;
    // 设置根结点字体大小
    var html = document.getElementsByTagName('html')[0]
    console.log('屏幕宽度',width,html)
    html.style.fontSize = rem + 'px'
    
}) 