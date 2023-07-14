const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Get form data
  const formData = new FormData(this);
  
  // Perform form submission logic here (e.g., send the data to a server)
  
  // Clear the form after submission
  this.reset();
});
