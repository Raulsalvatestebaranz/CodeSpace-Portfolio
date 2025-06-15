(function() {
  document.addEventListener('DOMContentLoaded', function() {
    const notifyForms = document.querySelectorAll('[data-notify]');
    notifyForms.forEach(initNotifyForm);

    function initNotifyForm(container) {
      const targetEmail = container.getAttribute('data-notify-email') || 'test@test.com';
      if (!targetEmail) return;

      container.innerHTML = `
        <form class="notify-form" novalidate>
          <div class="notify-input-wrapper">
            <input type="email" class="notify-input" placeholder="Your best inbox, please" required>
            <div class="notify-error"></div>
          </div>
          <button type="submit" class="notify-button">Subscribe Now</button>
        </form>
        <div class="overlay">
          <div class="success-message">Thanks for subscribing!</div>
        </div>`;

      const form = container.querySelector('.notify-form');
      const input = container.querySelector('.notify-input');
      const error = container.querySelector('.notify-error');
      const button = container.querySelector('.notify-button');
      const overlay = container.querySelector('.overlay');
      let isSubmitting = false;

      form.addEventListener('submit', async function(e) {
        e.preventDefault();
        if (isSubmitting) return;

        const email = input.value.trim();
        if (!email || !/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)) {
          error.textContent = 'Please enter a valid email';
          return;
        }

        isSubmitting = true;
        button.disabled = true;
        button.classList.add('loading');
        error.textContent = '';

        try {
          const response = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify({
              email,
              subject: 'New newsletter registration'
            })
          });

          if (!response.ok) throw new Error();
          input.value = '';
          overlay.classList.add('visible');
          setTimeout(() => overlay.classList.remove('visible'), 3000);
        } catch {
          error.textContent = 'There was an error. Please try again.';
        } finally {
          isSubmitting = false;
          button.disabled = false;
          button.classList.remove('loading');
        }
      });
    }
  });
})();


(function() {
  const initAvatarCircles = () => {
    const containers = document.querySelectorAll('[data-avatar-circles]');
    containers.forEach(container => {
      if (container.hasAttribute('data-circles-initialized')) return;
      container.setAttribute('data-circles-initialized', 'true');

      const avatars = [
        "https://library.bricksfusion.com/wp-content/uploads/2025/05/66303513e76c9555d5583b13_Customer-Avatar-01.png",
        "https://library.bricksfusion.com/wp-content/uploads/2025/05/66303513e76c9555d5583b12_Customer-Avatar-03.png",
        "https://library.bricksfusion.com/wp-content/uploads/2025/05/66303513e76c9555d5583b10_Customer-Avatar-02.png"
      ];

      avatars.forEach((src, i) => {
        const link = document.createElement('a');
        link.href = "#";
        link.style.marginLeft = i > 0 ? "-16px" : "0";
        link.style.zIndex = avatars.length - i;
        link.style.display = "inline-block";
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Avatar ${i+1}`;
        img.style.width = "40px";
        img.style.height = "40px";
        img.style.borderRadius = "50%";
        img.style.border = "1px solid #e3e3e3";
        link.appendChild(img);
        container.appendChild(link);
      });

      const extra = document.createElement('span');
      extra.textContent = "24K+";
      extra.style.marginLeft = "8px";
      extra.style.background = "#fff";
      extra.style.borderRadius = "20px";
      extra.style.padding = "0 10px";
      extra.style.fontWeight = "600";
      container.appendChild(extra);
    });
  };

  document.readyState === 'loading'
    ? document.addEventListener('DOMContentLoaded', initAvatarCircles)
    : initAvatarCircles();
})();


(function() {
  const containers = document.querySelectorAll('[data-float-container]');
  containers.forEach(container => {
    const image = container.querySelector('[data-float-image]');
    if (!image) return;

    let x = 0, y = 0;
    container.addEventListener('mousemove', e => {
      const rect = container.getBoundingClientRect();
      const offsetX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const offsetY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      x = offsetX * 10;
      y = offsetY * 10;
      image.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
    });

    container.addEventListener('mouseleave', () => {
      image.style.transform = 'translate(0, 0) scale(1)';
    });
  });
})();
