function rotateKeywords(containerId, interval = 2000) {
    const container = document.getElementById(containerId);
    const keywords = container.querySelectorAll('.keyword');
    let currentIndex = 0;

    setInterval(() => {
        keywords[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % keywords.length;
        keywords[currentIndex].classList.add('active');
    }, interval);
}

// Initialize rotation for each line with slight offset
rotateKeywords('rotating1', 2000);
setTimeout(() => rotateKeywords('rotating2', 2000), 666);
setTimeout(() => rotateKeywords('rotating3', 2000), 1333);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});