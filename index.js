// Modern Portfolio JavaScript
document.addEventListener("DOMContentLoaded", function() {
    // Theme Management
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const currentTheme = localStorage.getItem('theme') || 'light';

    // Set initial theme
    body.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);

    // Theme toggle functionality
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const currentTheme = body.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

            body.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
        });
    }

    function updateThemeIcon(theme) {
        const icon = themeToggle?.querySelector('i');
        if (icon) {
            icon.className = theme === 'dark' ? 'icon-sun' : 'icon-moon';
        }
    }

    // Mobile Navigation
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            const icon = this.querySelector('i');
            icon.className = navMenu.classList.contains('active') ? 'icon-close' : 'icon-menu';
        });

        // Close mobile menu when clicking on nav links
        document.querySelectorAll('.nav-item a').forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                const icon = mobileMenuToggle.querySelector('i');
                icon.className = 'icon-menu';
            });
        });
    }

    // Active Navigation Highlighting
    const navLinks = document.querySelectorAll('.nav-item a');
    const sections = document.querySelectorAll('section[id]');

    function updateActiveNav() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav);

    // Project Modal Functionality
    const modal = document.getElementById("projectPopup");
    const span = document.getElementsByClassName("close")[0];

    document.querySelectorAll('.project-link[data-description]').forEach(item => {
        item.addEventListener('click', event => {
            event.preventDefault();

            const title = event.currentTarget.getAttribute('data-title');
            const descriptionId = event.currentTarget.getAttribute('data-description');

            if (descriptionId) {
                const descriptionElement = document.querySelector(descriptionId);
                if (descriptionElement && modal) {
                    const description = descriptionElement.innerHTML;

                    document.getElementById('projectTitle').innerText = title;
                    document.getElementById('projectDescription').innerHTML = description;

                    modal.style.display = "block";
                    document.body.style.overflow = 'hidden';
                }
            }
        });
    });

    // Close modal functionality
    if (span) {
        span.onclick = function() {
            modal.style.display = "none";
            document.body.style.overflow = 'auto';
        }
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.body.style.overflow = 'auto';
        }
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.modern-header')?.offsetHeight || 0;
                const targetPosition = target.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Enhanced Contact Form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Show loading state
            const submitBtn = this.querySelector('.form-submit');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="icon-spinner"></i> Sending...';
            submitBtn.disabled = true;

            // Simulate form submission
            setTimeout(() => {
                alert('Thank you for your message! I will get back to you soon.');
                this.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }

    // Typing Animation
    const typingElement = document.querySelector('.typing-animation');
    if (typingElement) {
        const text = 'Hakan GÜL';
        let index = 0;

        function typeWriter() {
            if (index < text.length) {
                typingElement.textContent = text.slice(0, index + 1);
                index++;
                setTimeout(typeWriter, 150);
            }
        }

        setTimeout(typeWriter, 1000);
    }

    // Skill Progress Animation
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };

    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBars = entry.target.querySelectorAll('.skill-progress-bar');
                progressBars.forEach(bar => {
                    const width = bar.style.width;
                    bar.style.width = '0%';
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 200);
                });
            }
        });
    }, observerOptions);

    document.querySelectorAll('.skill-category').forEach(category => {
        skillObserver.observe(category);
    });

    // Scroll-triggered animations
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-fadeInUp, .animate-fadeInLeft, .animate-fadeInRight').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        animationObserver.observe(el);
    });

    // Header scroll effect
    const header = document.querySelector('.modern-header');
    if (header) {
        window.addEventListener('scroll', () => {
            const isDark = body.getAttribute('data-theme') === 'dark';

            if (window.scrollY > 100) {
                if (isDark) {
                    header.style.background = 'rgba(26, 32, 44, 0.98)';
                    header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
                } else {
                    header.style.background = 'rgba(255, 255, 255, 0.98)';
                    header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
                }
            } else {
                if (isDark) {
                    header.style.background = 'rgba(26, 32, 44, 0.95)';
                } else {
                    header.style.background = 'rgba(255, 255, 255, 0.95)';
                }
                header.style.boxShadow = 'none';
            }
        });
    }

    // Add loading animation for external links
    document.querySelectorAll('a[target="_blank"]').forEach(link => {
        link.addEventListener('click', function() {
            this.style.opacity = '0.7';
            setTimeout(() => {
                this.style.opacity = '1';
            }, 1000);
        });
    });

    // Parallax effect for floating elements
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.floating-element');

        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
});
  