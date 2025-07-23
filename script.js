console.log("JavaScript file is connected!");

function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("nav-active");
}

document.querySelector(".contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Your message has been sent successfully!");
});

document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".counter");
    
    counters.forEach(counter => {
        counter.innerText = "0";
        const updateCounter = () => {
            const target = +counter.getAttribute("data-target");
            const count = +counter.innerText;
            const increment = target / 50;  // Adjust speed here
            
            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCounter, 50);
            } else {
                counter.innerText = target;
            }
        };
        updateCounter();
    });
});


