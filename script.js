// script.js — minimal interactions
document.addEventListener('DOMContentLoaded', function(){
  const navToggle = document.getElementById('navToggle');
  const siteNav = document.getElementById('siteNav');
  const whatsappOrder = document.getElementById('whatsappOrder');
  const contactForm = document.getElementById('contactForm');

  navToggle && navToggle.addEventListener('click', function(){
    siteNav.classList.toggle('show');
  });

  // Smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth',block:'start'});
        siteNav.classList.remove('show');
      }
    });
  });

  // WhatsApp quick order button in form
  whatsappOrder && whatsappOrder.addEventListener('click', function(){
    const name = document.getElementById('name').value || '';
    const message = document.getElementById('message').value || '';
    const text = encodeURIComponent(`Hello Pilaniya Farms, I would like to order:\nName: ${name}\nDetails: ${message}`);
    window.open(`https://wa.me/917014452926?text=${text}`, '_blank');
  });

  // Simple form submit handling — use mailto fallback and show notice
  contactForm && contactForm.addEventListener('submit', function(e){
    const notice = document.getElementById('formNotice');
    notice.textContent = 'Preparing your message...';
    setTimeout(()=>{ notice.textContent = 'Message client opened. If your default mail client did not open, please contact us on WhatsApp.' },800);
  });
});
