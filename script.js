// Basic JavaScript for portfolio website
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

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

    // Button click handlers
    const viewWorkBtns = document.querySelectorAll('.btn-primary, .card-btn');
    const getInTouchBtn = document.querySelector('.btn-secondary');

    viewWorkBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Scroll to work section
            const workSection = document.getElementById('work');
            if (workSection) {
                workSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    if (getInTouchBtn) {
        getInTouchBtn.addEventListener('click', function() {
            alert('Contact functionality would go here. Add your email or contact form!');
        });
    }

    // Animate skill bars on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBars = entry.target.querySelectorAll('.skill-progress');
                skillBars.forEach(bar => {
                    bar.style.transition = 'width 1s ease-in-out';
                    bar.style.animationDelay = '0.5s';
                });
            }
        });
    }, observerOptions);

    // Observe capability cards for animation
    document.querySelectorAll('.capability-card').forEach(card => {
        observer.observe(card);
    });

    // Add hover effects to skill tags
    document.querySelectorAll('.skill-tag').forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 4px 12px rgba(31, 156, 254, 0.15)';
        });

        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });

    // Header scroll effect
    let lastScrollTop = 0;
    const header = document.querySelector('.header');

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.style.background = 'rgba(10, 10, 10, 0.9)';
            header.style.backdropFilter = 'blur(20px)';
        } else {
            header.style.background = 'transparent';
            header.style.backdropFilter = 'blur(10px)';
        }

        lastScrollTop = scrollTop;
    });

    // Add typing animation to name
    const nameElement = document.querySelector('.name-animation');
    if (nameElement) {
        const originalText = nameElement.textContent;
        let index = 0;
        
        function typeWriter() {
            if (index < originalText.length) {
                nameElement.textContent = originalText.substring(0, index + 1);
                index++;
                setTimeout(typeWriter, 150);
            }
        }
        
        // Start typing animation after a short delay
        setTimeout(() => {
            nameElement.textContent = '';
            typeWriter();
        }, 1000);
    }

    // Console message for developers
    console.log('👋 Welcome to the portfolio! This is a modern automation-focused website.');
    console.log('🔧 Built with HTML, CSS, and JavaScript');
    console.log('🚀 Ready to be customized for your needs!');
});
