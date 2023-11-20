(() => {
  const refs = {
    openReviewBtn: document.querySelector('[data-modal-review-open]'),
    closeReviewBtn: document.querySelector('[data-modal-review-close]'),
    modal: document.querySelector('[data-modal-review]'),
  };

  refs.openReviewBtn.addEventListener('click', toggleBuy);
  refs.closeReviewBtn.addEventListener('click', toggleBuy);

  function toggleBuy() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
