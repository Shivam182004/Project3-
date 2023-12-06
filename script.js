var tl = gsap.timeline()

tl.from("#nav img , #part2 h1 , #part3", {
   y : -100 ,
   duration : 1.5,
   delay:0,
   stagger:1,
   opacity: 0
   
})

tl.from("#text h1", {
    y:100,
    duration:1.5,
    delay:2,
    stagger:1
})

tl.from("#text img",{
    y:70,
    duration:1,
    delay:.5,
    // stagger:1
    
})
