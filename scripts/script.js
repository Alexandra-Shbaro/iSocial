document.addEventListener("DOMContentLoaded", function () {

    // Select the header element
    const header = document.querySelector('header');

    // Add a scroll event listener
    window.addEventListener('scroll', () => {
        // Check if the scroll position is greater than 0
        if (window.scrollY > 0) {
            // Change the header background when scrolled
            header.classList.add("scrolled-header")
        } else {
            // Reset the background when at the top
            header.classList.remove("scrolled-header")
        }
    });

    // Animate main heading
    gsap.from(".hero h1:first-of-type", {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out"
    });

    // Animate subheading paragraph
    gsap.from(".hero p", {
        y: 50,
        opacity: 0,
        duration: 1.1,
        delay: 0.6,
        ease: "power3.out"
    });

    // Animate third heading
    gsap.from(".hero h1:nth-of-type(2)", {
        y: 50,
        opacity: 0,
        duration: 1.3,
        delay: 1.2,
        ease: "power3.out"
    });

    // Animate buttons to slide in horizontally
    gsap.from(".hero .get-started", {
        x: -100, // Start from left
        opacity: 0,
        duration: 1,
        delay: 1.5,
        ease: "power3.out"
    });

    gsap.from(".hero .discover-more", {
        x: 100, // Start from right
        opacity: 0,
        duration: 1,
        delay: 1.5,
        ease: "power3.out"
    });


});

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card.querySelector('.card-front'), { rotationY: 180, duration: 0.35 });
        gsap.to(card.querySelector('.card-back'), { rotationY: 0, duration: 0.5 });
    });

    card.addEventListener('mouseleave', () => {
        gsap.to(card.querySelector('.card-front'), { rotationY: 0, duration: 0.35 }); // Faster rotation back
        gsap.to(card.querySelector('.card-back'), { rotationY: 180, duration: 0.5 }); // Faster rotation back
    });
});



