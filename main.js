import Typed from "typed.js";
import { Observer } from 'tailwindcss-intersect';

// Initialize Typed.js
const typed = new Typed("#textRotator", {
  strings: ["UI/UX Design", "Fullstack (Soon)", "Education Platform"],
  typeSpeed: 50,
  loop: true,
});

// Observer untuk Tailwind Intersect
document.addEventListener('DOMContentLoaded', () => {
  Observer.start();
});