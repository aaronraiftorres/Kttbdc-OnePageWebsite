document.addEventListener("DOMContentLoaded", function() {
    const dropdown = document.querySelector(".dropdown");
    const menu = document.querySelector(".dropdown-menu");

    dropdown.addEventListener("mouseenter", function() {
        menu.style.display = "block";
    });

    dropdown.addEventListener("mouseleave", function() {
        menu.style.display = "none";
    });
});

function openPopup(id) {
    document.getElementById(id).style.display = "flex";
}

function closePopup(id) {
    document.getElementById(id).style.display = "none";
}
// Close dropdown when clicking outside
document.addEventListener('click', function (event) {
    let dropdowns = document.querySelectorAll('.dropdown-menu');
    dropdowns.forEach(menu => {
        if (!menu.parentElement.contains(event.target)) {
            menu.classList.remove('show');
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".partners-carousel");
    const partners = Array.from(carousel.children);

    setInterval(() => {
        carousel.appendChild(partners[0]); 
        partners.push(partners.shift());
    }, 2000); 

});

// Ensure pop-ups remain hidden on page load
document.addEventListener("DOMContentLoaded", function () {
    // Hide all pop-ups initially
    document.querySelectorAll(".popup").forEach((popup) => {
        popup.style.display = "none";
    });

    // Attach event listeners to buttons inside .logo-card
    document.querySelectorAll(".logo-card button").forEach((button) => {
        button.addEventListener("click", function () {
            let unit = this.innerText.toLowerCase(); // Convert button text to lowercase
            openPopup(`${unit}-popup`);
        });
    });
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let isValid = true;

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("messageError").textContent = "";

    if (name === "") {
        document.getElementById("nameError").textContent = "Name is required.";
        isValid = false;
    }
    if (email === "" || !emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Enter a valid email address.";
        isValid = false;
    }
    if (message === "") {
        document.getElementById("messageError").textContent = "Message is required.";
        isValid = false;
    }

    if (isValid) {
        document.getElementById("successMessage").style.display = "block";
        setTimeout(() => {
            document.getElementById("successMessage").style.display = "none";
        }, 2000);
        
        this.reset();
    }
});

document.querySelectorAll('.popup').forEach(popup => {
    let slides = popup.querySelectorAll('.slide');
    let index = 0;

    function showSlide(n) {
        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === n);
        });
    }

    // Initialize first slide
    showSlide(index);

    let nextBtn = popup.querySelector('.next');
    let prevBtn = popup.querySelector('.prev');

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            index = (index + 1) % slides.length;
            showSlide(index);
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            index = (index - 1 + slides.length) % slides.length;
            showSlide(index);
        });
    }
});