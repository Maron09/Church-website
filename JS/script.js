// Home carousel
$('.home-carousel').owlCarousel({
    loop:true,
    margin:0,
    dots: true,
    autoplay: true,
    autoplayTimeout: 7000,
    animateOut: 'fadeOut',
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

// Navbar

window.addEventListener('scroll' , function(){
    let navbar = document.getElementById("navbar");
    navbar.classList.toggle('fixed', this.window.scrollY > 0)
})

// nav buttons
let menuBtn = document.querySelector('.menu-btn')
let darkBtn = document.querySelector('.darkbtn')


menuBtn.onclick = function() {
    document.getElementById("nav-items").classList.toggle('active');
    if (document.getElementById("nav-items").classList.contains('active')) {
        menuBtn.classList.remove("bx-menu")
        menuBtn.classList.add("bx-x")
    }else {
        menuBtn.classList.remove("bx-x")
        menuBtn.classList.add("bx-menu")
    }
}

darkBtn.onclick = function() {
    document.body.classList.toggle('dark-mode');
    darkBtn.classList.contains('bx-moon') 
        ? (darkBtn.classList.replace('bx-moon', 'bx-sun')) 
        : (darkBtn.classList.replace('bx-sun', 'bx-moon'));
};

// menu section

// let menuTabs = document.querySelector('.menu-tabs')
// menuTabs.addEventListener('click', function(e){
//     e.target.classList.contains('menu-tab-item') && !e.target.classList.contains('active') 
//     ? (menuTabs.querySelector('.active').classList.remove('active'), e.target.classList.add('active'))
//     : null;
// })

let menuTabs = document.querySelector('.menu-tabs')
menuTabs.addEventListener('click', function(e){
    if(e.target.classList.contains('menu-tab-item') && !e.target.classList.contains('active')){

        const tartget =e.target.getAttribute("data-target")

        menuTabs.querySelector('.active').classList.remove('active')

        e.target.classList.add('active')

        let menuSection = document.querySelector(".menu-section")
        menuSection.querySelector(".menu-tab-content.show").classList.remove('show')
        menuSection.querySelector(tartget).classList.add('show')
    }
    else{
        return
    }
})

// Events Carousel
$('.events-carousel').owlCarousel({
    loop:true,
    margin:30,
    dots: true,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        750:{
            items:2
        },
        1000:{
            items:2
        }
    }
})


// Team carousel
$('.team-carousel').owlCarousel({
    loop:true,
    margin:20,
    dots: true,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})


// review carousel
$('.review-carousel').owlCarousel({
    loop:true,
    margin:90,
    dots: false,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})