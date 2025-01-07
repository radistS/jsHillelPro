document.getElementById('messageForm').addEventListener('submit', function(event) {
  event.preventDefault();

  document.querySelectorAll('.error').forEach(error => error.textContent = '');

  const name = document.getElementById('name').value.trim();
  const message = document.getElementById('message').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const email = document.getElementById('email').value.trim();

  let isValid = true;

  if (!name) {
    document.getElementById('nameError').textContent = 'Name is required.';
    isValid = false;
  }

  if (message.length < 5) {
    document.getElementById('messageError').textContent = 'Message must be at least 5 characters long.';
    isValid = false;
  }

  const phoneRegex = /^\+380\d{9}$/;
  if (!phoneRegex.test(phone)) {
    document.getElementById('phoneError').textContent = 'Phone number must start with +380 and contain 13 digits.';
    isValid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById('emailError').textContent = 'Invalid email format.';
    isValid = false;
  }

  if (isValid) {
    console.log({
      name: name,
      message: message,
      phone: phone,
      email: email
    });
    alert('Form submitted successfully!');
  }
});
