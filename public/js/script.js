// Optional: Add interactivity or animations (if needed)
// Example: Show the button after scrolling
window.addEventListener('scroll', function () {
	const whatsappPopup = document.getElementById('whatsapp-popup');
	if (window.scrollY > 100) {
	  whatsappPopup.style.display = 'block';
	} else {
	  whatsappPopup.style.display = 'none';
	}
  });
  
  // Initially hide the button
  document.getElementById('whatsapp-popup').style.display = 'none';
  