// Enhanced Portfolio JavaScript
document.addEventListener("DOMContentLoaded", function() {
    // Project Modal Functionality
    var modal = document.getElementById("projectPopup");
    var span = document.getElementsByClassName("close")[0];

    document.querySelectorAll('.work').forEach(item => {
      item.addEventListener('click', event => {
        event.preventDefault();

        var title = event.currentTarget.getAttribute('data-title');
        var descriptionId = event.currentTarget.getAttribute('data-description');

        if (descriptionId) {
          var descriptionElement = document.querySelector(descriptionId);
          if (descriptionElement) {
            var description = descriptionElement.innerHTML;

            document.getElementById('projectTitle').innerText = title;
            document.getElementById('projectDescription').innerHTML = description;

            modal.style.display = "block";
          }
        }
      });
    });

    // Close modal functionality
    if (span) {
      span.onclick = function() {
        modal.style.display = "none";
      }
    }

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Contact form handling
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
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
  });
  