document.addEventListener("DOMContentLoaded", () => {
  const qtyInput = document.querySelector('.qty input');
  const plusBtn = document.querySelectorAll('.qty-btn')[1];
  const minusBtn = document.querySelectorAll('.qty-btn')[0];
  const flavorTiles = document.querySelectorAll('.flavor-tile');
  const bundleBtns = document.querySelectorAll('.bundle-btn');
  const purchaseRadios = document.querySelectorAll('input[name="purchase"]');
  const productImg = document.getElementById('product-img');

  const priceOriginal = document.querySelector('.price-original');
  const priceFinal = document.querySelector('.price-final');
  const savingsLabel = document.querySelector('.savings-label');

  // Prices for one-time
  const basePrices = {
    1: 29.99,
    2: 54.99,
    3: 74.99
  };

  const subscriptionDiscount = 0.15;

  let selectedBundle = 1;
  let isSubscribed = false;

  // Update Pricing Display
  function updatePriceDisplay() {
    let base = basePrices[selectedBundle];
    let final = isSubscribed ? base * (1 - subscriptionDiscount) : base;

    priceOriginal.textContent = `$${base.toFixed(2)}`;
    priceFinal.textContent = `$${final.toFixed(2)}`;

    savingsLabel.style.display = isSubscribed ? 'inline' : 'none';
  }

  // Quantity +/- Logic
  plusBtn.addEventListener('click', () => {
    qtyInput.value = parseInt(qtyInput.value) + 1;
  });

  minusBtn.addEventListener('click', () => {
    if (parseInt(qtyInput.value) > 1) {
      qtyInput.value = parseInt(qtyInput.value) - 1;
    }
  });

  // Flavor Selection
  flavorTiles.forEach(btn => {
    btn.addEventListener('click', () => {
      flavorTiles.forEach(b => b.classList.remove('selected', 'blue', 'orange', 'red'));

      btn.classList.add('selected');
      const flavor = btn.getAttribute('data-flavor');

      if (flavor === 'orange') {
        btn.classList.add('orange');
        productImg.src = 'images/orange.png';
      } else if (flavor === 'red') {
        btn.classList.add('red');
        productImg.src = 'images/red.png';
      } else {
        btn.classList.add('blue');
        productImg.src = 'images/blue.png';
      }
    });
  });

  // Bundle Size Selection
  bundleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      bundleBtns.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');

      selectedBundle = parseInt(btn.getAttribute('data-bundle'));
      updatePriceDisplay();
    });
  });

  // Subscription Toggle
  purchaseRadios.forEach(radio => {
    radio.addEventListener('change', () => {
      isSubscribed = (radio.value === 'subscribe' && radio.checked);
      updatePriceDisplay();
    });
  });

  // Initialize display
  updatePriceDisplay();
});
