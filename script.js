// script.js — Pilaniya Farms

const WH_NUMBER = '917014452926';
const WH_MESSAGE = encodeURIComponent("Hello Pilaniya Farms, I'm interested in ordering your products.");

function openWhatsApp(number = WH_NUMBER, message = WH_MESSAGE){
  const url = `https://wa.me/${number}?text=${message}`;
  window.open(url, '_blank');
}

// Attach buttons
document.addEventListener('DOMContentLoaded', ()=>{
  const heroBtn = document.getElementById('wh-hero');
  const desktopBtn = document.getElementById('wh-desktop');
  const contactBtn = document.getElementById('wh-contact');
  const orderPeanuts = document.getElementById('order-peanuts');
  const orderFlour = document.getElementById('order-flour');
  const orderSpices = document.getElementById('order-spices');

  if(heroBtn) heroBtn.addEventListener('click', ()=>openWhatsApp());
  if(desktopBtn) desktopBtn.addEventListener('click', ()=>openWhatsApp());
  if(contactBtn) contactBtn.addEventListener('click', ()=>openWhatsApp());
  if(orderPeanuts) orderPeanuts.addEventListener('click', ()=>openWhatsApp(undefined, encodeURIComponent('Hello, I want to order Premium Peanuts')));
  if(orderFlour) orderFlour.addEventListener('click', ()=>openWhatsApp(undefined, encodeURIComponent('Hello, I want to order Wheat Flour')));
  if(orderSpices) orderSpices.addEventListener('click', ()=>openWhatsApp(undefined, encodeURIComponent('Hello, I want to order Whole Spices')));

  // Mobile nav toggle
  const navToggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('nav');
  navToggle && navToggle.addEventListener('click', ()=>{
    if(nav.style.display === 'flex') nav.style.display = 'none';
    else nav.style.display = 'flex';
  });

  // Simple scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const revealOnScroll = () =>{
    const windowH = window.innerHeight;
    reveals.forEach(el=>{
      const rect = el.getBoundingClientRect();
      if(rect.top < windowH - 80){
        el.classList.add('in-view');
      }
    });
  }
  revealOnScroll();
  window.addEventListener('scroll', revealOnScroll);
});
