document.addEventListener('DOMContentLoaded', () => {
    // mobile navigation toggle
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    burger.addEventListener('click', () => {
        // toggle nav
        nav.classList.toggle('nav-active');

        // animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        // burger animation
        burger.classList.toggle('toggle');
    });

    // close nav when a link is clicked (for single-page navigation)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('nav-active');
            burger.classList.remove('toggle');
            navLinks.forEach(item => item.style.animation = ''); // reset animation
        });
    });

    // simple "read more" functionality for destination cards
    const readMoreButtons = document.querySelectorAll('.read-more-btn');
    readMoreButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const destination = event.target.dataset.destination;
            alert(`You clicked Read More for: ${destination.charAt(0).toUpperCase() + destination.slice(1)}. In a real website, this would navigate to a detailed page or show a Modal.`);
            // In a real application, you'd load more details or navigate to a new page here.
            // Example: window.location.href = `destination/${destination}.html`;
        });
    });

    // basic form submission alert
    const tripForm = document.querySelector('.trip-form');
    if (tripForm) {
        tripForm.addEventListener('submit', (event) => {
            event.preventDefault(); // prevent actual form submission

            const destinationSelect = document.getElementById('destination-select').value;
            const travelDates = document.getElementById('travel-dates').value;
            const numTravelers = document.getElementById('num-travelers').value;

            if (travelDates && numTravelers) {
                alert(`Trip Plan Request:\nDestination: ${destinationSelect || 'Any'}\nDates: ${travelDates}\nTravelers: ${numTravelers}\n\nThank you for your interest! We'll get back to you. `,'success');
                tripForm.reset();
            } else {
                alert('Please fill in travel dates and number of travelers.');
            }
        });
    }
});
