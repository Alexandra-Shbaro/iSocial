document.addEventListener("DOMContentLoaded", function () {
    // Select the header element
    const header = document.querySelector('header');

    // Add a scroll event listener to change header background
    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            header.classList.add("scrolled-header");
        } else {
            header.classList.remove("scrolled-header");
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

    gsap.from(".hero p", {
        y: 50,
        opacity: 0,
        duration: 1.1,
        delay: 0.6,
        ease: "power3.out"
    });

    gsap.from(".hero h1:nth-of-type(2)", {
        y: 50,
        opacity: 0,
        duration: 1.3,
        delay: 1.2,
        ease: "power3.out"
    });

    // Animate buttons to slide in horizontally
    gsap.from(".hero .get-started", {
        x: -100,
        opacity: 0,
        duration: 1,
        delay: 1.5,
        ease: "power3.out"
    });

    gsap.from(".hero .discover-more", {
        x: 100,
        opacity: 0,
        duration: 1,
        delay: 1.5,
        ease: "power3.out"
    });

    // Animate about cards in a staggered manner when they enter the viewport
    const cards = document.querySelectorAll(".about-card");
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
    };

    const animateCards = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const timeline = gsap.timeline();

                cards.forEach((card, index) => {
                    timeline.fromTo(card,
                        {
                            opacity: 0,
                            y: 30,
                            scale: 0.9
                        },
                        {
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            duration: 1,
                            ease: "power2.out",
                            delay: index * 0.3
                        }
                    );
                });


                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(animateCards, options);

    cards.forEach(card => {
        observer.observe(card);
    });

    const flipCards = document.querySelectorAll('.card');

    flipCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card.querySelector('.card-front'), { rotationY: 180, duration: 0.35 });
            gsap.to(card.querySelector('.card-back'), { rotationY: 0, duration: 0.5 });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card.querySelector('.card-front'), { rotationY: 0, duration: 0.35 });
            gsap.to(card.querySelector('.card-back'), { rotationY: 180, duration: 0.5 });
        });
    });

    const whyUsSection = document.querySelector(".why-us");
    const reasons = document.querySelectorAll(".why-us .reason");

    const whyUsObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                gsap.from(reasons, {
                    opacity: 0,
                    x: -50,
                    duration: 1,
                    stagger: 0.3,
                    ease: "power3.out"
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    whyUsObserver.observe(whyUsSection);
});
