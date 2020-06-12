window.addEventListener('load', () => {
  const navbar = document.querySelector('.nav');
  const sidebarToggle = document.querySelector('.sidebar__toggle');
  const sidebarItem = document.querySelectorAll('.sidebar__list-item');
  const accordion = document.querySelectorAll('.product__details-title-item');
  const deliveryCheckbox = document.querySelector('#deliveryCheckbox');
  const deliveryInputContainer = document.querySelector('.form__input-container_delivery');
  const deliveryPrice = document.querySelector('#deliveryPrice');

  let prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      navbar.style.top = "0";
    } else {
      navbar.style.top = "-55px";
    }
    prevScrollpos = currentScrollPos;
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

  deliveryCheckbox.addEventListener('change', e => {
    deliveryInputContainer.style.display = deliveryCheckbox.checked ? 'block' : 'none';
    deliveryPrice.innerText = deliveryCheckbox.checked ? '30$' : 'Самовывоз';
  });

});