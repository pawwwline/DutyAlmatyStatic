document.addEventListener('DOMContentLoaded', function () {
  const testimonials = [
    {
      text: "Отличные услуги по оформлению таможни!...",
      name: "Алексей Иванов",
      position: "Директор по развитию, ООО 'ИнтерТрейд'",
      avatar: "/path/to/avatar.jpg"
    },
    {
      text: "Очень довольны сотрудничеством!...",
      name: "Екатерина Новикова",
      position: "ООО 'ТаможПроф'",
      avatar: "/path/to/avatar2.jpg"
    },
    {
      text: "Хорошее сопровождение на всех этапах...",
      name: "Игорь Петров",
      position: "Менеджер ВЭД, ООО 'ЛогистикСервис'",
      avatar: "/path/to/avatar3.jpg"
    }
  ];

  let activeIndex = 0;
  let userInteracted = false;

  const textEl = document.getElementById('testimonial-text');
  const nameEl = document.getElementById('testimonial-name');
  const positionEl = document.getElementById('testimonial-position');
  const avatarEl = document.getElementById('testimonial-avatar');
  const dotsContainer = document.getElementById('dots-container');

  const render = () => {
    const { text, name, position, avatar } = testimonials[activeIndex];
    textEl.textContent = text;
    nameEl.textContent = name;
    positionEl.textContent = position;
    avatarEl.src = avatar;
    avatarEl.alt = name;

    [...dotsContainer.children].forEach((dot, i) => {
      dot.className = `w-2.5 h-2.5 rounded-full transition-colors cursor-pointer ${i === activeIndex ? 'bg-blue-500' : 'bg-gray-300'}`;
    });
  };

  document.getElementById('next-btn').addEventListener('click', () => {
    activeIndex = (activeIndex + 1) % testimonials.length;
    userInteracted = true;
    render();
  });

  document.getElementById('prev-btn').addEventListener('click', () => {
    activeIndex = (activeIndex - 1 + testimonials.length) % testimonials.length;
    userInteracted = true;
    render();
  });

  testimonials.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.addEventListener('click', () => {
      activeIndex = i;
      userInteracted = true;
      render();
    });
    dotsContainer.appendChild(dot);
  });

  render();
  setInterval(() => {
    if (!userInteracted) {
      activeIndex = (activeIndex + 1) % testimonials.length;
      render();
    }
  }, 7000);
});







document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card__content');
    const thresholds = [];
    for (let i = 0; i <= 100; i++) {
      thresholds.push(i / 100);
    }
    
    cards.forEach((card, index) => {
      const nextCard = cards[index + 1];
      if (!nextCard) return;
  
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          const ratio = entry.intersectionRatio;
          const newScale = 1 - 0.2 * ratio;
          card.style.transform = `scale(${newScale})`;
        });
      }, {
        threshold: thresholds,
        rootMargin: '0px 0px -30% 0px'
      });
      
      observer.observe(nextCard);
    });
  });

 