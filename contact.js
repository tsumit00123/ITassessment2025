
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');


  emailjs.init("Y636PmHxJ31nV0oyl"); 

  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    formStatus.textContent = 'Sending message...';
    formStatus.style.color = '#FFDD00'; 

    const serviceID = 'service_m2gi3l2'; 
    const templateID = 'template_3biogix'; 

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        formStatus.textContent = 'Message sent successfully! We will get back to you soon.';
        formStatus.style.color = '#00FF00'; 
        contactForm.reset();
      }, (error) => {
        formStatus.textContent = `Failed to send message: ${error.text || error}. Please try again later.`;
        formStatus.style.color = '#FF0000'; 
        console.error('EmailJS Error:', error);
      });
  });
});
