document.addEventListener("DOMContentLoaded", function() {
    // Smooth scroll on page load with hash
    const hash = window.location.hash;
    if (hash) {
        const targetElement = document.querySelector(hash);
        if (targetElement) {
            const headerOffset = document.querySelector('header').offsetHeight;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }

    // Smooth scroll for navigation links
    document.querySelectorAll('header nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            const headerOffset = document.querySelector('header').offsetHeight;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });

    // Typewriter effect
    const textH1 = "Hey there,";
    const textH2 = "I train machines.";
    const typingSpeed = 100; // Adjust typing speed (milliseconds)
    let i = 0;
    let j = 0;

    function typeWriterH1() {
        if (i < textH1.length) {
            document.getElementById("typed-text-h1").innerHTML += textH1.charAt(i);
            i++;
            setTimeout(typeWriterH1, typingSpeed);
        } else {
            typeWriterH2();
        }
    }

    function typeWriterH2() {
        if (j < textH2.length) {
            document.getElementById("typed-text-h2").innerHTML += textH2.charAt(j);
            j++;
            setTimeout(typeWriterH2, typingSpeed);
        }
    }

    typeWriterH1();

    // ScrollReveal animations
    ScrollReveal().reveal('.card', {
        interval: 100,
        distance: '50px',
        origin: 'bottom',
        duration: 1000,
    });

    // Scroll to top button
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });

    scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });

    // Highlight active navigation link on scroll
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("header nav ul li a");

    function changeLinkState() {
        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove("active"));
        navLinks[index].classList.add("active");
    }

    changeLinkState();
    window.addEventListener("scroll", changeLinkState);
});
