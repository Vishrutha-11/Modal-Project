'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const modalText = document.querySelector('.modal-text');
const btnClose = document.querySelector('.close-modal');
const btnsOpen = document.querySelectorAll('.show-modal');

const openModal = function (text) {
  modalText.textContent = text;
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');
  overlay.classList.remove('hidden');
  btnClose.focus();
};

const closeModal = function () {
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
  overlay.classList.add('hidden');
};

btnsOpen.forEach(btn => {
  btn.addEventListener('click', function () {
    openModal(this.dataset.text);
  });
});

btnClose.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
