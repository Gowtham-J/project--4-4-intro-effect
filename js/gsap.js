const tl = gsap.timeline({defaults: {ease: 'power1.out'}});

tl.to(".text", {
    duration: 1,
    y: 0,
    stagger: .3,
})

tl.to(".slider", {
    duration: 1.5,
    y: '-100%',
    delay: .5

})

tl.to(".intro", {
    duration: 1,
    y: '-100%',
    
}, "-=1")

tl.from(".navbar", {
    duration: 1,
    opacity: 0,


})
tl.from(".banner-area", {
    duration: 1,
    opacity: 0,


}, "-=.5")


