document.addEventListener("DOMContentLoaded", () => {
  const qtyInput = document.querySelector('.qty input');
  const plusBtn = document.querySelectorAll('.qty-btn')[1];
  const minusBtn = document.querySelectorAll('.qty-btn')[0];
  const flavorBtns = document.querySelectorAll('.flavor-btn');
  const priceTag = document.querySelector('.price');
  const bundleSelect = document.getElementById('bundle');
  const productImg = document.getElementById('product-img');

  // Quantity +/- Logic
  plusBtn.addEventListener('click', () => {
    qtyInput.value = parseInt(qtyInput.value) + 1;
  });

  minusBtn.addEventListener('click', () => {
    if (parseInt(qtyInput.value) > 1) {
      qtyInput.value = parseInt(qtyInput.value) - 1;
    }
  });

  // Flavor Button Logic (color + image)
  flavorBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Clear previous selection
      flavorBtns.forEach(b => {
        b.classList.remove('selected', 'blue', 'orange', 'red');
      });

      btn.classList.add('selected');

      // Match based on button label
      const flavor = btn.textContent.trim();

      if (flavor.includes('Tangerine')) {
        btn.classList.add('orange');
        if (productImg) productImg.src = 'images/orange.png';
      } else if (flavor.includes('Fruit Punch')) {
        btn.classList.add('red');
        if (productImg) productImg.src = 'images/red.png';
      } else {
        btn.classList.add('blue');
        if (productImg) productImg.src = 'images/blue.png';
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
