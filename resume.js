// Add active class to the clicked menu item
const menuItems = document.querySelectorAll('#menu li a');
menuItems.forEach(item => {
  item.addEventListener('click', function(e) {
    e.preventDefault();
    menuItems.forEach(item => item.classList.remove('active'));
    this.classList.add('active');
    
    const targetSection = document.querySelector(this.getAttribute('href'));
    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: 'smooth'
    });
  });
});
