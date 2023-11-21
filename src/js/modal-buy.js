(() => {
  const refs = {
    openBuyBtn: document.querySelector('[data-modal-buy-open]'),
    closeBuyBtn: document.querySelector('[data-modal-buy-close]'),
    modal: document.querySelector('[data-modal-buy]'),
  };

  refs.openBuyBtn.addEventListener('click', toggleBuy);
  refs.closeBuyBtn.addEventListener('click', toggleBuy);

  function toggleBuy() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
