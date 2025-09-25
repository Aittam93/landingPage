// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Add click handlers for contact items
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        item.addEventListener('click', function() {
            const icon = this.querySelector('i');
            if (icon.classList.contains('fa-envelope')) {
                // Copy email to clipboard
                navigator.clipboard.writeText('mattiascalas@tiscali.it').then(() => {
                    alert('Email copiata negli appunti!');
                });
            } else if (icon.classList.contains('fa-instagram')) {
                // Open Instagram (you can replace with actual Instagram URL)
                window.open('https://instagram.com', '_blank');
            } else if (icon.classList.contains('fa-strava')) {
                // Open Strava profile
                window.open('https://www.strava.com/athletes/27897081', '_blank');
            }
        });
    });
    
    // Add smooth scrolling to all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 100; // Account for mobile menu
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.service-card, .testimonial, .stat');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Add click tracking for CTA buttons
    const ctaButtons = document.querySelectorAll('.btn-primary');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Track button clicks (you can integrate with analytics here)
            console.log('CTA button clicked:', this.textContent);
        });
    });
    
    // Add mobile menu functionality (if needed)
    const createMobileMenu = () => {
        const nav = document.createElement('nav');
        nav.className = 'mobile-nav';
        nav.innerHTML = `
            <div class="mobile-nav-toggle">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="mobile-nav-menu">
                <a href="#about">Chi Sono</a>
                <a href="#contact">Contatti</a>
            </div>
        `;
        
        document.body.appendChild(nav);
        
        const toggle = nav.querySelector('.mobile-nav-toggle');
        const menu = nav.querySelector('.mobile-nav-menu');
        
        toggle.addEventListener('click', () => {
            menu.classList.toggle('active');
            toggle.classList.toggle('active');
        });
    };
    
    // Initialize mobile menu for small screens
    if (window.innerWidth <= 768) {
        createMobileMenu();
    }
    
    // Add loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });
    
});

// Add CSS for mobile navigation
const mobileNavCSS = `
.mobile-nav {
    display: none;
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1000;
}

.mobile-nav-toggle {
    width: 30px;
    height: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    cursor: pointer;
    background: rgba(255, 255, 255, 0.9);
    padding: 5px;
    border-radius: 5px;
}

.mobile-nav-toggle span {
    width: 100%;
    height: 3px;
    background: #333;
    transition: all 0.3s ease;
}

.mobile-nav-toggle.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
}

.mobile-nav-toggle.active span:nth-child(2) {
    opacity: 0;
}

.mobile-nav-toggle.active span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -6px);
}

.mobile-nav-menu {
    position: absolute;
    top: 40px;
    right: 0;
    background: white;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    padding: 20px;
    min-width: 200px;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
    transition: all 0.3s ease;
}

.mobile-nav-menu.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

.mobile-nav-menu a {
    display: block;
    padding: 10px 0;
    color: #333;
    text-decoration: none;
    border-bottom: 1px solid #eee;
}

.mobile-nav-menu a:last-child {
    border-bottom: none;
}

@media (max-width: 768px) {
    .mobile-nav {
        display: block;
    }
}
`;

// Inject mobile navigation CSS
const style = document.createElement('style');
style.textContent = mobileNavCSS;
document.head.appendChild(style);
