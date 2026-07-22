document.addEventListener('DOMContentLoaded', () => {
    const triggers = document.querySelectorAll('.scroll-trigger');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.15 });
    triggers.forEach(trigger => observer.observe(trigger));
});
