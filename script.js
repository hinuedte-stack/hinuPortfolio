/**
 * Portfolio Website JavaScript
 * Enhanced with smooth scrolling, form validation, animations, and interactivity
 */

// ========================================
// Smooth Scrolling Enhancement
// ========================================
document.addEventListener('DOMContentLoaded', function() {
  // Add smooth scrolling to all anchor links
  const smoothScrollLinks = document.querySelectorAll('.smooth-scroll');
  
  smoothScrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Only handle internal links
      if (href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          const headerHeight = document.querySelector('header').offsetHeight;
          const targetPosition = targetElement.offsetTop - headerHeight - 20;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });
});

// ========================================
// Video Lightbox Functions
// ========================================
function openVideo(src) {
  const lightbox = document.getElementById('videoLightbox');
  const video = document.getElementById('lightboxVideo');
  
  // Set video source
  video.src = src;
  
  // Show lightbox
  lightbox.style.display = 'flex';
  
  // Play video
  video.play().catch(error => {
    console.log('Video autoplay prevented:', error);
  });
  
  // Prevent body scrolling when lightbox is open
  document.body.style.overflow = 'hidden';
  
  // Close on escape key
  document.addEventListener('keydown', closeVideoOnEscape);
}

function closeVideo() {
  const lightbox = document.getElementById('videoLightbox');
  const video = document.getElementById('lightboxVideo');
  
  // Pause and clear video
  video.pause();
  video.src = '';
  
  // Hide lightbox
  lightbox.style.display = 'none';
  
  // Restore body scrolling
  document.body.style.overflow = '';
  
  // Remove escape key listener
  document.removeEventListener('keydown', closeVideoOnEscape);
}

function closeVideoOnEscape(e) {
  if (e.key === 'Escape') {
    closeVideo();
  }
}

// Close lightbox when clicking outside video
document.addEventListener('DOMContentLoaded', function() {
  const lightbox = document.getElementById('videoLightbox');
  
  lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) {
      closeVideo();
    }
  });
});

// ========================================
// Contact Form Validation & Submission
// ========================================
function sendMessage(e) {
  e.preventDefault();
  
  // Get form elements
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const subjectInput = document.getElementById('subject');
  
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();
  const subject = subjectInput ? subjectInput.value.trim() : '';
  
  // Clear previous errors
  clearErrors();
  
  // Validate form fields
  let isValid = true;
  
  // Name validation
  if (!name || name.length < 2) {
    showError('nameError', 'Please enter your full name (at least 2 characters)');
    isValid = false;
    nameInput.classList.add('error');
  }
  
  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailPattern.test(email)) {
    showError('emailError', 'Please enter a valid email address');
    isValid = false;
    emailInput.classList.add('error');
  }
  
  // Message validation
  if (!message || message.length < 10) {
    showError('messageError', 'Please enter a message (at least 10 characters)');
    isValid = false;
    messageInput.classList.add('error');
  }
  
  if (!isValid) {
    return;
  }
  
  // If validation passes, create mailto link
  const emailSubject = subject 
    ? encodeURIComponent(`Portfolio Contact: ${subject}`)
    : encodeURIComponent(`Portfolio Contact from ${name}`);
  
  const emailBody = encodeURIComponent(
    `Name: ${name}\n` +
    `Email: ${email}\n` +
    (subject ? `Subject: ${subject}\n\n` : '\n') +
    `Message:\n${message}`
  );
  
  // Open email client
  window.location.href = `mailto:hafiza.hinu@email.com?subject=${emailSubject}&body=${emailBody}`;
  
  // Show success message
  showSuccessMessage();
  
  // Reset form after a delay
  setTimeout(() => {
    document.getElementById('contactForm').reset();
    clearErrors();
  }, 2000);
}

// Helper function to show error messages
function showError(errorId, message) {
  const errorElement = document.getElementById(errorId);
  if (errorElement) {
    errorElement.textContent = message;
    errorElement.style.display = 'block';
  }
}

// Helper function to clear all errors
function clearErrors() {
  const errorElements = document.querySelectorAll('.error-message');
  errorElements.forEach(element => {
    element.textContent = '';
    element.style.display = 'none';
  });
  
  // Remove error class from inputs
  const inputs = document.querySelectorAll('.form-group input, .form-group textarea');
  inputs.forEach(input => {
    input.classList.remove('error');
  });
}

// Show success message
function showSuccessMessage() {
  const submitButton = document.querySelector('.btn-submit');
  const originalText = submitButton.querySelector('span').textContent;
  
  submitButton.querySelector('span').textContent = 'Message Sent! ✓';
  submitButton.style.background = '#10b981';
  
  setTimeout(() => {
    submitButton.querySelector('span').textContent = originalText;
    submitButton.style.background = '';
  }, 3000);
}

// Real-time form validation
document.addEventListener('DOMContentLoaded', function() {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  
  // Name validation on input
  if (nameInput) {
    nameInput.addEventListener('input', function() {
      if (this.value.trim().length >= 2) {
        this.classList.remove('error');
        document.getElementById('nameError').textContent = '';
      }
    });
  }
  
  // Email validation on input
  if (emailInput) {
    emailInput.addEventListener('input', function() {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailPattern.test(this.value.trim())) {
        this.classList.remove('error');
        document.getElementById('emailError').textContent = '';
      }
    });
  }
  
  // Message validation on input
  if (messageInput) {
    messageInput.addEventListener('input', function() {
      if (this.value.trim().length >= 10) {
        this.classList.remove('error');
        document.getElementById('messageError').textContent = '';
      }
    });
  }
});

// ========================================
// Skills Progress Bar Animation
// ========================================
function animateProgressBars() {
  const progressBars = document.querySelectorAll('.progress-fill');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const progressBar = entry.target;
        const progress = progressBar.getAttribute('data-progress');
        
        // Animate progress bar
        progressBar.style.width = '0%';
        setTimeout(() => {
          progressBar.style.width = progress + '%';
        }, 100);
        
        observer.unobserve(progressBar);
      }
    });
  }, {
    threshold: 0.5
  });
  
  progressBars.forEach(bar => observer.observe(bar));
}

// Initialize progress bar animations when page loads
document.addEventListener('DOMContentLoaded', animateProgressBars);

// ========================================
// Scroll Animations for Sections
// ========================================
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.skill-card, .project-card, .achievement-card, .edu-card');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, index * 100);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  animatedElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(element);
  });
}

// Initialize scroll animations
document.addEventListener('DOMContentLoaded', initScrollAnimations);

// ========================================
// Navbar Background on Scroll
// ========================================
function handleNavbarScroll() {
  const header = document.querySelector('header');
  let lastScroll = 0;
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
      header.style.background = 'rgba(255, 255, 255, 0.98)';
      header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
      header.style.background = 'rgba(255, 255, 255, 0.95)';
      header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.05)';
    }
    
    lastScroll = currentScroll;
  });
}

// Initialize navbar scroll handler
document.addEventListener('DOMContentLoaded', handleNavbarScroll);

// ========================================
// Skill Card Hover Effects
// ========================================
document.addEventListener('DOMContentLoaded', function() {
  const skillCards = document.querySelectorAll('.skill-card');
  
  skillCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });
});

// ========================================
// Project Card Interactive Effects
// ========================================
document.addEventListener('DOMContentLoaded', function() {
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach(card => {
    const overlay = card.querySelector('.project-overlay');
    
    card.addEventListener('mouseenter', function() {
      const thumbnail = this.querySelector('.project-thumbnail');
      if (thumbnail) {
        thumbnail.style.transform = 'scale(1.1)';
      }
    });
    
    card.addEventListener('mouseleave', function() {
      const thumbnail = this.querySelector('.project-thumbnail');
      if (thumbnail) {
        thumbnail.style.transform = 'scale(1)';
      }
    });
  });
});

// ========================================
// Icon Item Tooltip Enhancement
// ========================================
document.addEventListener('DOMContentLoaded', function() {
  const iconItems = document.querySelectorAll('.icon-item');
  
  iconItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.style.zIndex = '10';
    });
    
    item.addEventListener('mouseleave', function() {
      this.style.zIndex = '1';
    });
  });
});

// ========================================
// Social Links Hover Animation
// ========================================
document.addEventListener('DOMContentLoaded', function() {
  const socialLinks = document.querySelectorAll('.social-link');
  
  socialLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
      this.style.transform = 'translateX(10px)';
    });
    
    link.addEventListener('mouseleave', function() {
      this.style.transform = 'translateX(0)';
    });
  });
});

// ========================================
// Loading Animation (Optional)
// ========================================
window.addEventListener('load', function() {
  document.body.classList.add('loaded');
});

// ========================================
// Console Welcome Message
// ========================================
console.log('%cWelcome to Hafiza Hydar Hinu\'s Portfolio!', 'color: #0b63d0; font-size: 20px; font-weight: bold;');
console.log('%cLooking for the source code? Check out the repository!', 'color: #64748b; font-size: 14px;');
