
let utils = {
    resizeIcon: function(imgSrc){
        // 获取屏幕宽度
        let windowWidth = window.screen.width,
            // 判断屏幕属于大还是小
            isSmallScreen = windowWidth < 768;
        // console.log(imgSrc,(imgSrc.substring(0,imgSrc.lastIndexOf(".")).trim().toLowerCase()) + '@2x.png');
        return isSmallScreen ? imgSrc : (imgSrc.substring(0,imgSrc.lastIndexOf(".")).trim().toLowerCase()) + '@2x.png';
    },
    lazyload:function (img) {
        var seeHeight = document.documentElement.clientHeight; //可见区域高度
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop; //滚动条距离顶部高度
        for (var i = n; i < num; i++) {
            if (img[i].offsetTop < seeHeight + scrollTop) {
                if (img[i].getAttribute("src") == "default.jpg") {
                    img[i].src = img[i].getAttribute("data-src");
                }
                n = i + 1;
            }
        }
    }
}


export default utils;
