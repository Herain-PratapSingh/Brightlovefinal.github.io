var timel= gsap.timeline();
timel.from(".nav img,.r2a,.r2b,.r3",{
    y : -100,
    delay : 0.5,
    duration :0.5,
    opacity:0,
    stagger : 0.5
})
timel.from(".hl,.yn,.only",{
    y :-100,
    delay : 0.5,
    duration :1,
    opacity:0,
    stagger : 0.5

})


timel.to(".qm",{
    opacity:0
})
timel.from(".fullstop",{
    opacity:0
})
timel.from(".part3a,.part3b,.part3c",{
    x:-100,
    duration :0.5,
    opacity:0,
    stagger : 0.5
})

gsap.to(".partb2",{
    scrollTrigger:{
        Trigger:".partb2",
        //markers:true,
        start : "400 30%",
        end: "500 60%",
        toggleActions:"restart reverse",
        scrub:2,
    },
    scale : 1.2,
    duration: .5,
})

gsap.to(".page3a",{
    x:-400,
    duration : 5,
    scrollTrigger:{
        Trigger:".page3a",
        //markers:true,
        start: "1700 550",
        end:"1840 631",
        toggleActions:"restart reverse restart",
        scrub:2,
        //pin:true,
    }
})


gsap.from(".txtp5",{
    x:800,
    duration : 1.2,
    scrollTrigger:{
        Trigger:".ppl",
        //markers:true,
        start: "3850 550",
        end:"4100 631",
        toggleActions:"restart reverse restart",
        scrub:2,
        //pin:true,
    }
})

ScrollTrigger.create({
    trigger:".page3b4",
    start:"1600 500",
    end:"3700 90%",
    pin:".page3a",
    toggleActions:"restart reverse restart",
})









/*
gsap.from(".txtp5",{
    x:150,
    delay:0.5,
    duration:0.2,
    opacity:0,
    stagger:0.3
})*/



/*
$(document).ready(function() {
    TweenMax.set(".pplwrap2",{width});

    var t3 = new TimeLineLite();

    $(document).on("mouseover",".lisppl",function(event){
        t3=new TimeLineLite();
        t3.to($(".pplwrap2"), 1 ,{
           width:"600px",
           ease: Expo.easeInOut
        });
    }).on("mouseout",".lisppl",function(event){
        t3= new TimeLineLite();
        t3.to($(".pplwrap2"),0.5,{
            width:0,
            ease:Expo.easeInOut
        });
    });   
});
*/
















































/*
var t2 = gsap.timeline({ScrollTrigger:{
    Trigger : ".page3b",
    markers: true,
    start: "538% 520%",
    end:"900%,950%",
    scrub:2,
    pin:true
}});

t2.to(".page3b",{
    top:"40%",
},'a')
.to("#card1",{
    top:"85%",
},'a')
.to("#card2",{
    top:"200%",
},'a')
.to("#card2",{
    top:"100%",
},'b')
.to("#card1",{
    width: "65%",
    height: "65vh"
},'b')
.to("card3",{
    top:"-200%"
},'b')
.to("card3",{
    top:"-200%"
},'c')
.to('#card2',{
    width:"70%",
    height:"70vh"
},'c')
*/
/*
gsap.registerPlugin(ScrollTrigger);  

const wrap =document.querySelector(".wrap");
let wrapWidth = wrap.offsetWidth;
let amountToScroll = wrapWidth-window.innerWidth;

const tween =gsap.to(wrap,{
    x:-amountToScroll,
    duration:3,
    ease:none
});

ScrollTrigger.create({
    trigger:".page4",
    start:"top 20%",
    end:"+=" + amountToScroll,
    pin:true,
    animation:tween,
    scrub:1,
    markers:true
})*/