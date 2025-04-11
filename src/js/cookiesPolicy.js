export const cookiePolicy = () => {
  const btnEl1 = document.querySelector('.cookies-accept-js');
  const btnEl2 = document.querySelector('.cookies-decline-js');
  const modalEl = document.querySelector('.cookies-section');

  if (JSON.parse(localStorage.getItem('fluffy-town-status'))) {
    modalEl.style.display = 'none';
    return;
  }

  btnEl1.addEventListener('click', () => {
    modalEl.style.display = 'none';
    localStorage.setItem('fluffy-town-status', JSON.stringify(true));
  });

  btnEl2.addEventListener('click', () => {
    modalEl.style.display = 'none';
    localStorage.setItem('fluffy-town-status', JSON.stringify(false));
  });
};