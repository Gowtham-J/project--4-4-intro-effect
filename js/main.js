const navbar = document.querySelector(".navbar");
const navbarBrand = document.querySelector(".navbar-brand");
const navbarNav = document.querySelector(".navbar-nav");

window.addEventListener("scroll", function(){
    const scrollHeight =this.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;

    if(scrollHeight > navHeight){
        navbar.classList.add("navbar-fixed");
        
        // navbarBrand.classList.add("navbar-fixed-brand");
        // navbarNav.classList.add("ms-auto");
        // navbar.style.width = "100%";

    }
    else{
        navbar.classList.remove("navbar-fixed");
        // navbarBrand.classList.remove("navbar-fixed-brand");

    }
})


//end of navbar-fixed 

// smooth click transition

const scrollLinks = document.querySelectorAll(".scroll-link");


scrollLinks.forEach(function(event){

    event.addEventListener("click", function(e){
        e.preventDefault();

        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        // console.log(element)

        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = navbarNav.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains("navbar-fixed");
        let position = element.offsetTop - navHeight;

        if(!fixedNav){
            position = position - navHeight;
        }
        if(navHeight > 62){
            position = position + containerHeight;
        }

        window.scrollTo({
            left: 0,
            top: position,
        });
        // navbarNav.style.height = 0;
        // navbarNav.style.display.toggle() = "none";
    });
    
});