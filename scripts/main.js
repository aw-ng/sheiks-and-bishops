document.getElementById('year').textContent = new Date().getFullYear();
      const menuBtn = document.getElementById('menuBtn');
      const mobileMenu = document.getElementById('mobileMenu');
      menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('open'));
      mobileMenu.querySelectorAll('a').forEach((a) =>
        a.addEventListener('click', () => mobileMenu.classList.remove('open'))
      );
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 }
      );
      document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
      const lightbox = document.getElementById('lightbox');
      const lightboxImg = lightbox.querySelector('img');
      const lightboxClose = lightbox.querySelector('.lightbox-close');
      document.querySelectorAll('.milestone-img').forEach((btn) => {
        btn.addEventListener('click', () => {
          const full = btn.getAttribute('data-full');
          const alt = btn.querySelector('img').getAttribute('alt');
          lightboxImg.src = full;
          lightboxImg.alt = alt;
          lightbox.classList.add('open');
          lightbox.setAttribute('aria-hidden', 'false');
        });
      });
      function closeLightbox() {
        lightbox.classList.remove('open');
        lightbox.setAttribute('aria-hidden', 'true');
        lightboxImg.src = '';
      }
      lightboxClose.addEventListener('click', closeLightbox);
      lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
      });
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeLightbox();
      });
      const form = document.getElementById('newsletterForm');
      const msg = document.getElementById('newsletterMsg');
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        msg.textContent = 'Thanks for subscribing.';
        msg.style.display = 'block';
        form.reset();
        setTimeout(() => { msg.style.display = 'none'; }, 4000);
      });
