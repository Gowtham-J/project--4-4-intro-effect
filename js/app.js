gsap.registerPlugin("scrollTrigger")


gsap.from(".navbar", {
    duration: 1,
    y: '-100%',
    ease: 'power2',
    scrollTrigger: '.navbar'
});

gsap.from(".banner-image", {
    duration:1,
    x: '100vw',
    ease: 'power1',
    delay: .3
    });

gsap.from(".banner-text", {
    duration: 1, x: '-100vw',
    ease:'power1',
    delay: .6
     });

gsap.from(".about-row > div", {
    duration: 1,
    opacity: 0,
    stagger: .5,
    delay: 1,
    scrollTrigger: '.about-img'
     });

gsap.from(".service-img", {
    duration: 1,
    x: '-100vw',
    opacity: 0,
    ease: 'power3',
    delay: .5,
    scrollTrigger:'.service-content'
 });

gsap.from(".service-texts", {
    duration: 1, 
    x: '100vw', 
    opacity: 0, 
    ease: 'power3', 
    delay: .5 ,
    scrollTrigger:'.service-content'

});

gsap.from(".portfolio-header", {
    duration: 1,
    ease: 'bounce',
    opacity: 0,
    delay: .3,
    y: '-30%',
    scrollTrigger: '.portfolio-header'
})

gsap.from(".portfolio-row > div", {
    duration: 1,
    ease: 'power3',
    opacity: 0,
    delay: .6,
    y: '100%',
    scrollTrigger: '.portfolio-row',
    stagger: .2,
})

gsap.from(".blog-text, .blog-side-image", {
    duration: 1,
    ease: 'expo',
    opacity: 0,
    delay: .3,
    scrollTrigger: '.blog-tab'
    
})

gsap.from(".blog-cover", {
    duration: 1,
    x: '-100vw',
    opacity: 0,
    ease: 'power3',
    delay: .5,
    scrollTrigger:'.blog-cover'
 });

gsap.from(".blog-content-cover", {
    duration: 1, 
    x: '100vw', 
    opacity: 0, 
    ease: 'power3', 
    delay: .5 ,
    scrollTrigger:'.blog-content-cover'

});


gsap.from(".message-form", {
    duration: 1,
    x: '-100vw',
    opacity: 0,
    ease: 'power3',
    delay: .5,
    scrollTrigger:'.message-form'
 });

gsap.from(".message-content", {
    duration: 1, 
    x: '100vw', 
    opacity: 0, 
    ease: 'power3', 
    delay: 1 ,
    scrollTrigger:'.message-content'

});