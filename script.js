document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".flavor");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2, // Trigger when 20% of the element is visible
    }
  );

  cards.forEach((card) => {
    observer.observe(card);
  });
});
