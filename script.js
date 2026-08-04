// Basic interactive behaviors for Pilaniya Farms site
document.addEventListener('DOMContentLoaded', function(){
  // Mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const siteNav = document.getElementById('siteNav');
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    siteNav.style.display = expanded ? '' : 'block';
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      const href = a.getAttribute('href');
      if(href.length>1){
        e.preventDefault();
        const target = document.querySelector(href);
        if(target) target.scrollIntoView({behavior:'smooth',block:'start'});
      }
    });
  });

  // Gallery lightbox
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = lightbox.querySelector('.lightbox-img');
  const closeBtn = lightbox.querySelector('.lightbox-close');
  document.querySelectorAll('.gallery-item').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const src = btn.dataset.src || btn.querySelector('img').src;
      lightboxImg.src = src;
      lightboxImg.alt = btn.querySelector('img').alt || '';
      lightbox.hidden = false;
    });
  });
  closeBtn.addEventListener('click', ()=>{ lightbox.hidden = true; lightboxImg.src=''; });
  lightbox.addEventListener('click', (e)=>{ if(e.target===lightbox) { lightbox.hidden=true; lightboxImg.src=''; } });

  // Simple contact form handling (no backend) — show success message
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    if(!name || !email || !message){
      status.textContent = 'Please complete all fields.';
      status.style.color = 'crimson';
      return;
    }
    // pretend to send
    status.style.color = 'var(--muted)';
    status.textContent = 'Sending…';
    setTimeout(()=>{
      status.style.color = 'green';
      status.textContent = 'Thanks! Your message has been received. We will reply within 2 business days.';
      form.reset();
    }, 900);
  });
});
