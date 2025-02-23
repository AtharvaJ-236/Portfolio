document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.5 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .fade-in-scale, .project-card');
    animatedElements.forEach(element => {
        observer.observe(element);
    });
});
