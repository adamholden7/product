document.addEventListener("DOMContentLoaded", () => {
  const qtyInput = document.querySelector('.qty input');
  const plusBtn = document.querySelectorAll('.qty-btn')[1];
  const minusBtn = document.querySelectorAll('.qty-btn')[0];
  const flavorBtns = document.querySelectorAll('.flavor-btn');
  const priceTag = document.querySelector('.price');
  const bundleSelect = document.getElementById('bundle');
  
  // Quantity +/- Logic
  plusBtn.addEventListener('click', () => {
    qtyInput.value = parseInt(qtyInput.value) + 1;
  });
  minusBtn.addEventListener('click', () => {
    if (parseInt(qtyInput.value) > 1) {
      qtyInput.value = parseInt(qtyInput.value) - 1;
    }
  });

  // Flavor Color Switching
  flavorBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      flavorBtns.forEach(b => {
        b.classList.remove('selected', 'blue', 'orange', 'red');
      });

      btn.classList.add('selected');

      if (btn.textContent.includes('Tangerine')) {
        btn.classList.add('orange');
      } else if (btn.textContent.includes('Fruit Punch')) {
        btn.classList.add('red');
      } else {
        btn.classList.add('blue');
      }
    });
  });

  // Dynamic Bundle Price
  bundleSelect.addEventListener('change', () => {
    const selected = bundleSelect.value;
    let price = 29.99;

    if (selected === '2') price = 54.99;
    if (selected === '3') price = 74.99;

    priceTag.textContent = `$${price.toFixed(2)}`;
  });
});
