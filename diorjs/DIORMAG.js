// $(function () {
//     let img = $(".main>img");
//     let span = $(".tiao>.kuai>span");
//     let yjt = $(".yjt");
//     let zjt = $(".zjt");
//     let index=0;
//     yjt.click(function() {
//
//         index++;
//         if (index==img.length) {
//             index=0
//         }
//
//     })
// })
window.onload = function () {
    let img = document.querySelectorAll(".main>img");
    let span = document.querySelector(".tiao>.kuai>span");
    let yjt = document.querySelector(".yjt>i");
    let zjt = document.querySelector(".zjt>i");
    let index=0;
    let flag="true";
    let img1 = document.querySelectorAll(".main1>img");
    let span1 = document.querySelector(".tiao1>.kuai1>span");
    let rjt = document.querySelector(".rjt>i");
    let ljt = document.querySelector(".ljt>i");
    let index1=0;
    let flag1="true";
                 //右
    yjt.onclick =function () {
        span.innerText++;
        if (span.innerText>11){
            span.innerText=1
        }
        if (!flag){
            return
        }
        flag=false;

        index++;
        if (index===img.length){
            index=0;
        }
        for (let i = 0; i < img.length; i++) {
            animate(img[i], {opacity: 0});

        }
        animate(img[index], {opacity: 1},function () {
            flag=true;
        })
    }

                  //左
    zjt.onclick =function () {
        span.innerText--;
        if (span.innerText<1){
            span.innerText=11
        }
        if (!flag){
            return
        }
        flag=false;

        index--;
        if (index<0){
            index=img.length-1;
        }
        for (let i = 0; i < img.length; i++) {
            animate(img[i], {opacity: 0});

        }
        animate(img[index], {opacity: 1},function () {
            flag=true;
        })
    }


            /*右*/
    rjt.onclick =function () {
        span1.innerText++;
        if (span1.innerText>3){
            span1.innerText=1
        }
        if (!flag1){
            return
        }
        flag1=false;

        index1++;
        if (index1===img1.length){
            index1=0;
        }
        for (let i = 0; i < img1.length; i++) {
            animate(img1[i], {opacity: 0});

        }
        animate(img1[index1], {opacity: 1},function () {
            flag1=true;
        })
    }
               /*左*/
    ljt.onclick =function () {
        span1.innerText--;
        if (span1.innerText<1){
            span1.innerText=3
        }
        if (!flag1){
            return
        }
        flag1=false;

        index1--;
        if (index1<0){
            index1=img1.length-1;
        }
        for (let i = 0; i < img1.length; i++) {
            animate(img1[i], {opacity: 0});

        }
        animate(img1[index1], {opacity: 1},function () {
            flag1=true;
        })
    }
}