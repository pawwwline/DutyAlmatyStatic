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


  function testimonialsComponent() {
    return {
      activeIndex: 0,
      userInteracted: false,
      testimonials: [
        {
          text: "Отличные услуги по оформлению таможни! Сотрудники компании профессионально и оперативно решили все вопросы, связанные с таможенным оформлением моего груза. Документы были подготовлены быстро и без ошибок. Особенно хочу отметить дружелюбие и готовность помочь на каждом этапе процесса. Рекомендую эту компанию всем, кто ищет надёжного партнёра для таможенных операций.",
          name: "Алексей Иванов",
          position: "Директор по развитию, ООО 'ИнтерТрейд'",
          avatar: "/path/to/avatar.jpg"
        },
        {
          text: "Очень довольны сотрудничеством! Всё быстро, понятно и профессионально. Спасибо за индивидуальный подход и поддержку!",
          name: "Екатерина Новикова",
          position: "ООО 'ТаможПроф'",
          avatar: "/path/to/avatar2.jpg"
        },
        {
          text: "Хорошее сопровождение на всех этапах. Документы всегда в порядке, команда быстро отвечает на вопросы и даёт чёткие рекомендации.",
          name: "Игорь Петров",
          position: "Менеджер ВЭД, ООО 'ЛогистикСервис'",
          avatar: "/path/to/avatar3.jpg"
        }
      ],
      init() {
        setInterval(() => {
          if (!this.userInteracted) {
            this.activeIndex = (this.activeIndex + 1) % this.testimonials.length;
          }
        }, 7000);
      },
      next() {
        this.activeIndex = (this.activeIndex + 1) % this.testimonials.length;
        this.userInteracted = true;
      },
      prev() {
        this.activeIndex = (this.activeIndex - 1 + this.testimonials.length) % this.testimonials.length;
        this.userInteracted = true;
      },
      goTo(index) {
        this.activeIndex = index;
        this.userInteracted = true;
      }
    };
  }



  