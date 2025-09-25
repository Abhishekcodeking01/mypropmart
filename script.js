// Enhanced JavaScript for MyPropMart Website
document.addEventListener('DOMContentLoaded', function() {

    // Smooth loading animation
    document.body.style.opacity = '0';
    document.body.style.transform = 'translateY(20px)';

    setTimeout(() => {
        document.body.style.transition = 'all 0.6s ease-out';
        document.body.style.opacity = '1';
        document.body.style.transform = 'translateY(0)';
    }, 100);

    // Enhanced Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navbar = document.querySelector('.navbar');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');

            // Animate hamburger
            const spans = hamburger.querySelectorAll('span');
            if (hamburger.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });

        // Close menu when clicking on a link with smooth animation
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');

                const spans = hamburger.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }

    // Enhanced Navbar Scroll Effect
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > 100) {
            navbar.classList.add('scrolled');

            // Hide/show navbar on scroll
            if (scrollTop > lastScrollTop && scrollTop > 200) {
                navbar.style.transform = 'translateY(-100%)';
            } else {
                navbar.style.transform = 'translateY(0)';
            }
        } else {
            navbar.classList.remove('scrolled');
            navbar.style.transform = 'translateY(0)';
        }

        lastScrollTop = scrollTop;
    });

    // Intersection Observer for Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
                entry.target.style.opacity = '1';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.service-card, .value-card, .stat, .expertise-item, .contact-item').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });

    // Enhanced Contact Form Handling
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        const inputs = contactForm.querySelectorAll('input, select, textarea');

        // Add floating label effect
        inputs.forEach(input => {
            // Create floating label
            if (input.placeholder) {
                const label = document.createElement('label');
                label.textContent = input.placeholder;
                label.style.cssText = `
                    position: absolute;
                    top: 18px;
                    left: 20px;
                    color: #999;
                    font-size: 1.1rem;
                    pointer-events: none;
                    transition: all 0.3s ease;
                    background: white;
                    padding: 0 5px;
                `;

                const formGroup = input.parentElement;
                formGroup.style.position = 'relative';
                formGroup.appendChild(label);

                // Handle focus/blur events
                input.addEventListener('focus', () => {
                    label.style.top = '-8px';
                    label.style.fontSize = '0.9rem';
                    label.style.color = '#667eea';
                });

                input.addEventListener('blur', () => {
                    if (!input.value) {
                        label.style.top = '18px';
                        label.style.fontSize = '1.1rem';
                        label.style.color = '#999';
                    }
                });

                // Check if field has value on load
                if (input.value) {
                    label.style.top = '-8px';
                    label.style.fontSize = '0.9rem';
                    label.style.color = '#667eea';
                }
            }

            // Add validation styling
            input.addEventListener('blur', validateField);
        });

        // Form submission with enhanced UX
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Validate all fields
            let isValid = true;
            inputs.forEach(input => {
                if (!validateField({ target: input })) {
                    isValid = false;
                }
            });

            if (isValid) {
                // Show loading state
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Sending...';
                submitBtn.disabled = true;
                submitBtn.style.opacity = '0.7';

                // Simulate form submission
                setTimeout(() => {
                    // Show success message with animation
                    showNotification('Thank you for your message! We will contact you soon.', 'success');
                    contactForm.reset();

                    // Reset floating labels
                    inputs.forEach(input => {
                        const label = input.parentElement.querySelector('label');
                        if (label) {
                            label.style.top = '18px';
                            label.style.fontSize = '1.1rem';
                            label.style.color = '#999';
                        }
                    });

                    // Reset button
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.opacity = '1';
                }, 2000);
            }
        });
    }

    // Field validation function
    function validateField(e) {
        const field = e.target;
        const value = field.value.trim();
        let isValid = true;

        // Remove previous error styling
        field.style.borderColor = 'rgba(102, 126, 234, 0.2)';

        // Validation rules
        if (field.required && !value) {
            isValid = false;
        } else if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
            }
        } else if (field.type === 'tel' && value) {
            const phoneRegex = /^[\d\s\+\-\(\)]{10,}$/;
            if (!phoneRegex.test(value)) {
                isValid = false;
            }
        }

        // Apply error styling
        if (!isValid) {
            field.style.borderColor = '#e74c3c';
            field.style.boxShadow = '0 0 10px rgba(231, 76, 60, 0.2)';
        } else {
            field.style.borderColor = '#2ecc71';
            field.style.boxShadow = '0 0 10px rgba(46, 204, 113, 0.2)';
        }

        return isValid;
    }

    // Enhanced notification system
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'success' ? 'linear-gradient(135deg, #2ecc71, #27ae60)' : 'linear-gradient(135deg, #667eea, #764ba2)'};
            color: white;
            padding: 20px 25px;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            z-index: 10000;
            transform: translateX(400px);
            transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            font-weight: 600;
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255,255,255,0.2);
            max-width: 350px;
        `;

        notification.innerHTML = `
            <div style="display: flex; align-items: center; gap: 10px;">
                <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}" style="font-size: 1.2rem;"></i>
                <span>${message}</span>
            </div>
        `;

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Auto remove
        setTimeout(() => {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 400);
        }, 4000);
    }

    // Enhanced smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 100;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.3;
            hero.style.transform = `translateY(${rate}px)`;
        });
    }

    // Stats counter animation
    const stats = document.querySelectorAll('.stat h3');
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const stat = entry.target;
                const finalValue = parseInt(stat.textContent.replace(/\D/g, ''));
                const suffix = stat.textContent.replace(/\d/g, '');
                let currentValue = 0;
                const increment = finalValue / 50;
                const timer = setInterval(() => {
                    currentValue += increment;
                    if (currentValue >= finalValue) {
                        stat.textContent = finalValue + suffix;
                        clearInterval(timer);
                    } else {
                        stat.textContent = Math.floor(currentValue) + suffix;
                    }
                }, 40);
                statsObserver.unobserve(stat);
            }
        });
    }, { threshold: 0.7 });

    stats.forEach(stat => {
        statsObserver.observe(stat);
    });

    // Enhanced button hover effects
    document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.02)';
        });

        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Card tilt effect
    document.querySelectorAll('.service-card, .value-card').forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;

            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });

    // Preload critical resources
    const criticalImages = [
        // Add any critical images here
    ];

    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });

    console.log('🏠 MyPropMart website loaded successfully! Enhanced version active.');
});

// Enhanced page visibility handling
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        document.title = '💼 Come back to MyPropMart!';
    } else {
        document.title = 'MyPropMart - Premium Real Estate Solutions';
    }
});

// Service Worker registration for better performance (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js').then(function(registration) {
            console.log('SW registered: ', registration);
        }).catch(function(registrationError) {
            console.log('SW registration failed: ', registrationError);
        });
    });
}
