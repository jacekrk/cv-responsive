
// skills filler
document.querySelectorAll(".filler").forEach((item) => {
    
    if (window.innerWidth > 700){
        item.classList.add("fill-anim")
    }

    else{
        window.addEventListener("scroll", () => {
            if (window.scrollY > 500){
                item.classList.add("fill-anim");
            }
        })
    }
})

// menu activation (mobile only)
document.querySelector(".burger").addEventListener("click", () => {
    document.querySelector(".burger").classList.toggle("active-menu");
    document.querySelector("body").classList.toggle("active-menu");
    document.querySelector(".menu").classList.toggle("active-menu");
})

// menu scroll to (jquery)
$('.menu nav ul li a').on('click', function() {
    const goToSection = "#" + $(this).attr('class');
    
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top
    })
    $('body, .burger, .menu').removeClass('active-menu')
})