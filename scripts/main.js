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

      const form = document.getElementById('newsletterForm');
      const msg = document.getElementById('newsletterMsg');
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        msg.textContent = 'Thanks for subscribing.';
        msg.style.display = 'block';
        form.reset();
        setTimeout(() => { msg.style.display = 'none'; }, 4000);
      });
