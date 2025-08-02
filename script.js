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

  // One-time base prices
  const basePrices = {
    1: 29.99,
    2: 54.99,
    3: 74.99
  };

  const subscriptionDiscount = 0.15;
  const imageMap = {
    blue: 'images/blue.png',
    orange: 'images/orange.png',
    red: 'images/red.png'
  };

  let selectedBundle = 1;
  let isSubscribed = false;

  // 🔁 Update Pricing Display
  function updatePriceDisplay() {
    const quantity = parseInt(qtyInput.value);
    const base = basePrices[selectedBundle];
    const discounted = isSubscribed ? base * (1 - subscriptionDiscount) : base;

    priceOriginal.textContent = `$${base.toFixed(2)}`;
    priceFinal.textContent = `$${discounted.toFixed(2)}`;
    savingsLabel.style.display = isSubscribed ? 'inline' : 'none';
  }

  // ➕ ➖ Quantity Control
  plusBtn.addEventListener('click', () => {
    qtyInput.value = parseInt(qtyInput.value) + 1;
    updatePriceDisplay();
  });

  minusBtn.addEventListener('click', () => {
    const current = parseInt(qtyInput.value);
    if (current > 1) {
      qtyInput.value = current - 1;
      updatePriceDisplay();
    }
  });

  // 🎨 Flavor Selection
  flavorTiles.forEach(btn => {
    btn.addEventListener('click', () => {
      flavorTiles.forEach(b => b.classList.remove('selected', 'blue', 'orange', 'red'));

      const flavor = btn.getAttribute('data-flavor');
      btn.classList.add('selected', flavor);

      if (productImg && imageMap[flavor]) {
        productImg.src = imageMap[flavor];
      }
    });
  });

  // 📦 Bundle Selection
  bundleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      bundleBtns.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');

      selectedBundle = parseInt(btn.getAttribute('data-bundle'));
      updatePriceDisplay();
    });
  });

  // 🔁 Subscription Toggle
  purchaseRadios.forEach(radio => {
    radio.addEventListener('change', () => {
      isSubscribed = (radio.value === 'subscribe' && radio.checked);
      updatePriceDisplay();
    });
  });

  // 🟢 Init
  updatePriceDisplay();
});
