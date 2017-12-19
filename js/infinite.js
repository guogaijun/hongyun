//无限加载
function checkImg(){
    var oCont = document.getElementsByClassName("cycle")[0];
    var oDiv3 = document.createElement("div");
    oDiv3.className="cycle3";
    var oDiv4 = document.createElement("div");
    oDiv4.className="cycle4";
    var oDiv5 = document.createElement("div");
    oDiv5.className="cycle5";
    var oDiv6 = document.createElement("div");
    oDiv6.className="cycle6";
    var oDiv7 = document.createElement("div");
    oDiv7.className="cycle7";
    var oDiv8 = document.createElement("div");
    oDiv8.className="cycle8";
    
    oCont.appendChild(oDiv3);
    oCont.appendChild(oDiv4);
    oCont.appendChild(oDiv5);
    oCont.appendChild(oDiv6);
    oCont.appendChild(oDiv7);
    oCont.appendChild(oDiv8);
    
	isScrollToPageBottom();
	watchScroll();
}

function getViewportSize(w){
    //使用指定的窗口，如果不带参数则使用当前窗口
    w=w||window;
    //除了IE8及更早的版本以外，其他浏览器都能用
    if(w.innerWidth!=null)return{w:w.innerWidth,h:w.innerHeight};
    //对标准模式下的IE（或任意浏览器）
    var d=w.document;
    if(document.compatMode=="CSS1Compat")
        return{w:d.documentElement.clientWidth,
            h:d.documentElement.clientHeight};
    //对怪异模式下的浏览器
    return{w:d.body.clientWidth,h:d.body.clientHeight};
}

//检测滚动条是否滚动到页面底部
function isScrollToPageBottom(){
    //文档高度
    var documentHeight=document.documentElement.offsetHeight;
    var viewPortHeight=getViewportSize().h;
    var scrollHeight=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;
    return documentHeight-viewPortHeight-scrollHeight<10;
}

//页面滚到底部的时候加载新的图片
function watchScroll(){
    if(!isScrollToPageBottom()){
        setTimeout(arguments.callee,400);
        return;
    }else{
        checkImg();
    }
}
