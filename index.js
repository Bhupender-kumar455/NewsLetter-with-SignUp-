const email = document.getElementById("email");
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

document.addEventListener("DOMContentLoaded", () => {
  const submitButton = document.getElementById("submitButton");
  const alert = document.getElementById("alert");
  submitButton.addEventListener("click", () => {
    if (emailPattern.test(email.value) || email.value === " ") {
      alert.style.display = "none";
      email.style.borderColor = "grey";
      window.location.href = "thankyou.html";
      localStorage.setItem("email", email.value);
    } else {
      alert.style.display = "block";
      email.style.borderColor = "red";
    }
  });
});
