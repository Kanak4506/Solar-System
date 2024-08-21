// Navbar animation
anime({
    targets: '.nav_bar div',
    translateY: [-50, 0],
    opacity: [0, 1],
    duration: 1500,
    easing: 'easeOutExpo',
});

// Hero section heading animation
anime({
    targets: '.hero_section div:last-child h1',
    translateX: [0, 100],
    opacity: [0, 1],
    duration: 1500,
    easing: 'easeOutExpo',
});
anime({
    targets: '.hero_section div:last-child p',
    translateX: [0, 100],
    opacity: [0, 1],
    duration: 2500,
    easing: 'easeOutExpo',
});



// Array of target values for each '.number' element
const targetValues = [1483, 783, 213]; // Replace with your desired values for each '.number' element

// Select all elements with the class 'number'
const numbers = document.querySelectorAll('.number');

// Function to animate the numbers
function animateNumber(element, value) {
    anime({
        targets: element,
        innerHTML: [0, value],
        duration: 2000,
        easing: 'linear',
        round: 1,  // Ensures the number doesn't have decimals
        update: function (anim) {
            element.innerHTML = `${anim.animations[0].currentValue.toFixed(0)} +`;
        }
    });
}

// Create an IntersectionObserver to trigger animation when elements are in view
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            animateNumber(entry.target, targetValues[index]);
            observer.unobserve(entry.target); // Unobserve to prevent re-triggering
        }
    });
}, { threshold: 0.5 }); // Trigger when 50% of the element is in view

// Observe each '.number' element
numbers.forEach((number, index) => {
    observer.observe(number);
});

