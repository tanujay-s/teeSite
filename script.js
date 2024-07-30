const testimonials = [
    '"Great quality and fast shipping!" - Jane Doe',
    '"Amazing designs & excellent service" - John Smith',
    '"I love the variety and prices are great!" - Alexendra'
  ];
  
  let currentTestimonial = 0;
  
  function updateTestimonial() {
    const testimonialElement = document.querySelector('#testimonials blockquote');
    testimonialElement.textContent = testimonials[currentTestimonial];
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  }
  
  setInterval(updateTestimonial, 3000); 
  document.addEventListener('DOMContentLoaded', updateTestimonial);