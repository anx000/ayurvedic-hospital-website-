const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const dots = document.querySelectorAll(".dot");
const testimonials = document.querySelectorAll(".testimonial-card");

navToggle?.addEventListener("click", () => {
  navLinks?.classList.toggle("open");
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    dots.forEach((d) => d.classList.remove("active"));
    testimonials.forEach((card) => card.classList.remove("active"));

    dot.classList.add("active");
    testimonials[index]?.classList.add("active");
  });
});

const appointmentForm = document.querySelector(".appointment-form");
appointmentForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Thank you! Our care guide will contact you soon.");
  appointmentForm.reset();
});
