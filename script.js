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
      threshold: 0.1,
    }
  );

  cards.forEach((card) => {
    observer.observe(card);
  });
});
