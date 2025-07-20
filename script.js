document.addEventListener("DOMContentLoaded", () => {
  console.log("Msganay Home Improvement site loaded successfully.");

  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", (event) => {
      const emailInput = form.querySelector('input[name="email"]');
      const email = emailInput.value.trim();

      // Simple regex for email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        emailInput.focus();
        event.preventDefault(); // stop form submission
      }
    });
  }
});
