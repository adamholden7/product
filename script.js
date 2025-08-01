document.addEventListener("DOMContentLoaded", () => {
  // Quantity buttons
  const qtyInput = document.querySelector('.qty input');
  const plusBtn = document.querySelectorAll('.qty-btn')[1];
  const minusBtn = document.querySelectorAll('.qty-btn')[0];

  plusBtn.addEventListener('click', () => {
    qtyInput.value = parseInt(qtyInput.value) + 1;
  });

  minusBtn.addEventListener('click', () => {
    if (parseInt(qtyInput.value) > 1) {
      qtyInput.value = parseInt(qtyInput.value) - 1;
    }
  });

  // Flavor selection buttons
  const flavorBtns = document.querySelectorAll('.flavor-btn');
  flavorBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      flavorBtns.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
    });
  });

  // Smooth scroll to Buy section
  const shopLink = document.querySelector('header .btn');
  const buyButton = document.getElementById('buy');

  if (shopLink && buyButton) {
    shopLink.addEventListener('click', (e) => {
      e.preventDefault();
      buyButton.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }
});
