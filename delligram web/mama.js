z// Scroll animation
const sections = document.querySelectorAll('section');
const options = {
    root: null,
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});

// Back to Top button
const backToTopButton = document.createElement('button');
backToTopButton.textContent = '↑';
backToTopButton.id = 'back-to-top';
backToTopButton.style.display = 'none';
backToTopButton.style.position = 'fixed';
backToTopButton.style.bottom = '20px';
backToTopButton.style.right = '20px';
backToTopButton.style.padding = '10px';
backToTopButton.style.backgroundColor = '#333';
backToTopButton.style.color = '#fff';
backToTopButton.style.border = 'none';
backToTopButton.style.borderRadius = '5px';
backToTopButton.style.cursor = 'pointer';
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Image Carousel for Portfolio
const portfolioItems = document.querySelectorAll('.portfolio-item');
let currentIndex = 0;

function showPortfolioItem(index) {
    portfolioItems.forEach((item, i) => {
        item.style.display = i === index ? 'block' : 'none';
    });
}

showPortfolioItem(currentIndex);

setInterval(() => {
    currentIndex = (currentIndex + 1) % portfolioItems.length;
    showPortfolioItem(currentIndex);
}, 3000); // Change image every 3 seconds
