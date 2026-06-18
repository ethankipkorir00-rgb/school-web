document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");
  const messageEl = document.getElementById("formMessage");

  let hideTimeout;

  function showMessage(text, type) {
    messageEl.textContent = text;
    messageEl.className = "form-message " + type;

    clearTimeout(hideTimeout);
    hideTimeout = setTimeout(() => {
      messageEl.textContent = "";
      messageEl.className = "form-message";
    }, 5000);
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();

    if (!name || !email || !subject || !form.message.value.trim()) {
      showMessage("Please complete all fields before sending.", "error");
      return;
    }

    if (!isValidEmail(email)) {
      showMessage("Please enter a valid email address.", "error");
      return;
    }

    showMessage(`Thanks, ${name}! Your message has been sent.`, "success");
    form.reset();
  });
});
