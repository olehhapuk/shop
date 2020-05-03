window.addEventListener('load', () => {
  const glider = document.querySelector('.glider');
  const sidebarToggle = document.querySelector('.sidebar__toggle');
  const sidebarItem = document.querySelectorAll('.sidebar__list-item');
  const accordion = document.querySelectorAll('.product__details-title-item');

  if (glider !== null) {
    new Glider(glider, {
      slidesToShow: 1,
      itemWidth: 270,
      arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
      },
      draggable: false,
      scrollLock: true,
      scrollLockDelay: 100,
      duration: 0.9,
      responsive: [{
        breakpoint: 425,
        settings: {
          slidesToShow: 'auto'
        }
      }]
    });
  }

  if (sidebarToggle !== null) {
    sidebarToggle.addEventListener('click', e => {
      const target = document.querySelector('.sidebar__list');
  
      target.classList.toggle('sidebar__list_open');
    });
  }

  if (sidebarItem !== null) {
    sidebarItem.forEach(item => {
      item.addEventListener('click', e => {
        try {
          const targetId = e.target.dataset.target;
          const target = document.getElementById(targetId);
  
          target.classList.toggle('sidebar__list_open');
          e.target.classList.toggle('sidebar__list-item_open');
        } catch (error) {
          return;
        }
      });
    });
  }

  if (accordion.length > 0) {
    accordion[0].classList.add('product__details-title-item_active');
    document.getElementById(accordion[0].dataset.target).classList.add('product__details-text-item_active');

    accordion.forEach(item => {
      item.addEventListener('click', e => {
        const target = e.target.dataset.target;

        accordion.forEach(aItem => {
          const target = aItem.dataset.target;

          document.getElementById(target).classList.remove('product__details-text-item_active');

          aItem.classList.remove('product__details-title-item_active');
        });

        item.classList.add('product__details-title-item_active');
        document.getElementById(target).classList.add('product__details-text-item_active');
      });
    });
  }

});