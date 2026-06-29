/* ==========================================================================
   GREAT EMAVIC GADGETS - FUNCTIONAL CORE SCRIPT ENGINE
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile navigation menu mechanics
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('open');
            hamburger.classList.toggle('active');
        });
    }

    // 2. Translucent Navigation control tracking point on scroll events
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 3. Scroll Triggered Visual Animation Engine using IntersectionObserver
    const fadeSections = document.querySelectorAll('.fade-in-section');
    const animationOptions = {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px"
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Execution optimized
            }
        });
    }, animationOptions);

    fadeSections.forEach(section => {
        scrollObserver.observe(section);
    });

    // 4. Client Side Grid Product Catalog Filtration Engine
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('#productsGrid .glass-card');

    if (filterButtons.length > 0 && productCards.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Adjust dynamic selection target states
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                const selectedCategory = button.getAttribute('data-filter');

                productCards.forEach(card => {
                    const cardCategory = card.getAttribute('data-category');
                    if (selectedCategory === 'all' || cardCategory === selectedCategory) {
                        card.style.display = 'flex';
                        // Short delay to reset scaling trigger animations smoothly
                        setTimeout(() => card.style.opacity = '1', 10);
                    } else {
                        card.style.opacity = '0';
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // 5. Video Player Overlays and Modal Framework controls
    const watchVideoBtn = document.getElementById('watchVideoBtn');
    const embeddedProductVideo = document.getElementById('embeddedProductVideo');
    const videoModal = document.getElementById('videoModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modalVideo = document.getElementById('modalVideo');

    function openModal() {
        if (videoModal && modalVideo) {
            videoModal.classList.add('active');
            modalVideo.play().catch(err => console.log("Auto-play blocked by client environment rules"));
        }
    }

    function closeModal() {
        if (videoModal && modalVideo) {
            videoModal.classList.remove('active');
            modalVideo.pause();
            modalVideo.currentTime = 0;
        }
    }

    if (watchVideoBtn) watchVideoBtn.addEventListener('click', openModal);
    if (embeddedProductVideo) embeddedProductVideo.addEventListener('click', openModal);
    if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
    
    // Safety close-out logic when clicking backing structure matrices
    if (videoModal) {
        videoModal.addEventListener('click', (e) => {
            if (e.target === videoModal) closeModal();
        });
    }

    // 6. Dynamic Countdown Time Loop Execution Array
    const countdownElement = document.getElementById('dealCountdown');
    if (countdownElement) {
        // Establishes target matrix window localized 72 hours forward from user context entrance
        let countdownTarget = localStorage.getItem('emavic_deal_target');
        if (!countdownTarget) {
            countdownTarget = new Date().getTime() + (72 * 60 * 60 * 1000);
            localStorage.setItem('emavic_deal_target', countdownTarget);
        }

        const runTimer = () => {
            const now = new Date().getTime();
            const timeDifference = countdownTarget - now;

            if (timeDifference <= 0) {
                // Loop simulation resets automatically once target time frame collapses
                localStorage.setItem('emavic_deal_target', new Date().getTime() + (72 * 60 * 60 * 1000));
                return;
            }

            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            document.getElementById('days').textContent = days.toString().padStart(2, '0');
            document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
            document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
            document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
        };

        setInterval(runTimer, 1000);
        runTimer(); // Execute right away
    }

    // 7. Secure Local UI Contact Submission Simulation Channels
   // 7. WhatsApp Contact Submission Channels
const formElement = document.getElementById('contactForm');
const alertElement = document.getElementById('submissionAlert');

if (formElement) {
    formElement.addEventListener('submit', function(e) {
        e.preventDefault(); // Stops the page from refreshing or breaking

        try {
            // 1. Grab values safely using your exact HTML IDs
            const name = document.getElementById('formName') ? document.getElementById('formName').value : 'Customer';
            const email = document.getElementById('formEmail') ? document.getElementById('formEmail').value : 'Not provided';
            const phone = document.getElementById('formPhone') ? document.getElementById('formPhone').value : 'Not provided';
            const message = document.getElementById('formMessage') ? document.getElementById('formMessage').value : '';

            // 2. Your business WhatsApp number (with country code, no + or spaces)
            const myWhatsAppNumber = "2349041142804"; 

            // 3. Construct a clean, readable message string for WhatsApp
            const textMessage = `Hello Great Emavic Gadgets,%0A%0A` +
                                `:%0A%0A` +
                                `*Name:* ${encodeURIComponent(name)}%0A` +
                                `*Email:* ${encodeURIComponent(email)}%0A` +
                                `*Phone:* ${encodeURIComponent(phone)}%0A%0A` +
                                `*Message:*%0A${encodeURIComponent(message)}`;

            // 4. Construct the official API URL
            const whatsappUrl = `https://wa.me/${myWhatsAppNumber}?text=${textMessage}`;

            // 5. Open WhatsApp securely in a new browser tab
            window.open(whatsappUrl, '_blank');

            // 6. Display your existing custom HTML submission alert banner
            if (alertElement) {
                alertElement.textContent = `Opening WhatsApp to send your message, thank you ${name}!`;
                alertElement.style.display = 'block';
                
                setTimeout(() => {
                    alertElement.style.display = 'none';
                }, 6000);
            }

            // 7. Clear out the form fields for the user
            formElement.reset();
            
        } catch (error) {
            console.error("Form redirection error: ", error);
        }
    });
}

}); // THIS CLOSES THE MAIN DOMCONTENTLOADED OPENER AT THE VERY END OF YOUR FILE