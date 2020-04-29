new Glider(document.querySelector('.glider'), {
  slidesToShow: 'auto',
  itemWidth: 230,
  arrows: {
    prev: '.glider-prev',
    next: '.glider-next'
  },
  draggable: true,
  scrollLock: true,
  scrollLockDelay: 100,
  dragVelocity: 1.7,
  duration: 0.9
});

document.querySelector('.sidebar__toggle').addEventListener('click', e => {
  const target = document.querySelector('.sidebar__list');

  target.classList.toggle('sidebar__list_open');
});

document.querySelector('.sidebar__list-item').addEventListener('click', e => {
  try {
    const targetId = e.target.dataset.target;
    const target = document.getElementById(targetId);

    target.classList.toggle('sidebar__list_open');
  } catch (error) {
    return;
  }
});
