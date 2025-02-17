document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("emailForm") as HTMLFormElement;
  const emailInput = document.getElementById("email") as HTMLInputElement;
  const errorText = document.getElementById(
    "errorText"
  ) as HTMLParagraphElement;

  if (!form || !emailInput || !errorText) return;

  form.addEventListener("submit", handleFormSubmit);
});

function handleFormSubmit(event: Event): void {
  event.preventDefault();

  const emailInput = document.getElementById("email") as HTMLInputElement;
  const errorText = document.getElementById(
    "errorText"
  ) as HTMLParagraphElement;

  if (!emailInput.value.trim() || !validateEmail(emailInput.value)) {
    showError(emailInput, errorText);
  } else {
    hideError(emailInput, errorText);
    (document.getElementById("emailForm") as HTMLFormElement).submit();
  }
}

function showError(
  input: HTMLInputElement,
  errorText: HTMLParagraphElement
): void {
  input.classList.add("border-red-500");
  errorText.classList.remove("hidden");
}

function hideError(
  input: HTMLInputElement,
  errorText: HTMLParagraphElement
): void {
  input.classList.remove("border-red-500");
  errorText.classList.add("hidden");
}

function validateEmail(email: string): boolean {
  // Basic email regex pattern
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
