$(document).ready(function () {

    $('#home').fadeIn(1000);
    $('#welcomeImage').fadeIn(1500);

    const sections = document.querySelectorAll('.box');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-viewport');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });

    const sections2 = document.querySelectorAll('.inner-box');

    const observer2 = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-viewport');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    sections2.forEach(section => {
        observer2.observe(section);
    });

    // Create an intersection observer
    const observer3 = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-viewport');
                observer.unobserve(entry.target); // Stop observing after animation starts
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of the element is in view

    // Observe each .sarvices-card
    document.querySelectorAll('.sarvices-card').forEach(card => {
        observer3.observe(card);
    });

});

