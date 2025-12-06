// script.js - minimal interactions: smooth scroll and mock form behavior
document.addEventListener('DOMContentLoaded', function(){
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(!target) return;
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });

  // Top CTA open signup
  const ctaTop = document.getElementById('cta-top');
  if(ctaTop){
    ctaTop.addEventListener('click', function(){ document.querySelector('#signup').scrollIntoView({behavior:'smooth'}); });
  }

  // Mock form handling
  const form = document.getElementById('signupForm');
  const status = document.getElementById('formStatus');

  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const role = document.getElementById('role').value;
      if(!name || !phone){
        status.textContent = 'Please complete name and phone.';
        status.style.color = '#b44';
        return;
      }
      // Simulate sending
      status.style.color = '#2f8a44';
      status.textContent = 'Submitting...';
      setTimeout(function(){
        status.textContent = `Thanks ${name}! Our team will contact you at ${phone} within 2 business days.`;
        form.reset();
      }, 900);
    });
  }

  // Mock SMS button shows example
  const mockSmsBtn = document.getElementById('mockSmsBtn');
  if(mockSmsBtn){
    mockSmsBtn.addEventListener('click', function(){
      alert('SMS Example:\n\n"Tomato - 50 kg - Barangay San Jose, Malaybalay"\n\nSend this to our hotline to list your crop.');
    });
  }
});
