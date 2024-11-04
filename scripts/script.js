document.addEventListener("DOMContentLoaded", function() {
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
