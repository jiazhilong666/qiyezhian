window.onload=function () {
    let dot = document.querySelectorAll(".dot");
    let pic = document.querySelectorAll(".pic");
    let banner = document.querySelector(".banner");
    let zuojiantou = document.querySelector(".zuojiantou");
    let youjiantou = document.querySelector(".youjiantou");
    index=0;
    let flag="ture";
           /*轮播点与轮播图，图随点动*/
    for (let i=0;i<dot.length;i++){
        dot[i].onclick=function () {
        for (let j=0;j<dot.length;j++) {
            // dot[j].className="dot";
            // pic[j].style.zIndex=10;
            animate(pic[j],{opacity:0});
            dot[j].classList.remove("hot")
        }
            animate(pic[i],{opacity:1});
            dot[i].classList.add("hot");
        // dot[i].className="dot hot";
        //     pic[i].style.zIndex=999;
            index = i;
    }
    }
            /*自动循环轮播*/
   let set = setInterval(move,2000);
    function move() {
        index++;
        if (index===pic.length) {
            index=0;
        }
        for (let i=0;i<pic.length;i++) {
            animate(pic[i],{opacity:0});
            dot[i].classList.remove("hot");
        }
        dot[index].classList.add("hot");
        animate(pic[index],{opacity:1},function () {
            flag=true;});
        // pic.forEach(function (element) {
        //     element.style.zIndex=10;
        // });
        // dot.forEach(element=>element.className="dot")
        // pic[index].style.zIndex=999;
        // dot[index].className="dot hot"
    }

    function movez() {
        index--;
        if (index<0) {
            index=pic.length-1;
        }
        for (let i=0;i<pic.length;i++) {
            animate(pic[i],{opacity:0});
            dot[i].classList.remove("hot");
        }
        dot[index].classList.add("hot");
        animate(pic[index],{opacity:1},function () {
            flag=true;});
        // pic.forEach(function (element) {
        //     element.style.zIndex=10;
        // });
        // dot.forEach(element=>element.className="dot")
        // pic[index].style.zIndex=999;
        // dot[index].className="dot hot"
    }
             /*移入移出轮播时*/
   banner.onmouseenter = function () {
    clearInterval(set)
}
    banner.onmouseleave = function () {
        set=setInterval(move,2000)
    }
             /*箭头控制轮播*/
     youjiantou.onclick=function () {
         if(!flag){
             return;
         }
         flag=false;
         move()
}
    zuojiantou.onclick=function () {
        if(!flag){
            return;
        }
        flag=false;
        movez()
    }
}
