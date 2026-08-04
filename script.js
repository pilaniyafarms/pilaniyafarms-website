// script.js — small interactions for Pilaniya Farms website
document.addEventListener('DOMContentLoaded', function(){
  var navToggle = document.getElementById('nav-toggle');
  var siteNav = document.getElementById('site-nav');
  navToggle && navToggle.addEventListener('click', function(){
    siteNav.classList.toggle('open');
  });

  var form = document.getElementById('contact-form');
  var status = document.getElementById('form-status');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      status.textContent = 'Sending...';
      // Simulate send — replace with real endpoint integration as needed
      setTimeout(function(){
        form.reset();
        status.textContent = 'Thanks — your message was sent.';
      }, 700);
    });
  }
});
