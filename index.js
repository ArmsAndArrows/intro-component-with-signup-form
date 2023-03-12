const form = document.querySelector('.form');
const firstName = document.getElementById('fName');
const lastName = document.getElementById('lName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const errorImg = document.querySelectorAll('.form__error');
const errorParagraph = document.querySelectorAll('.form__error-message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let isError = false;

  if (firstName.value.trim() === '') {
    errorImg[0].style.display = 'block';
    errorParagraph[0].style.display = 'block';
    firstName.style.borderColor="red";
    isError = true;
  } else {
    errorImg[0].style.display = 'none';
    errorParagraph[0].style.display = 'none';
  }

  if (lastName.value.trim() === '') {
    errorImg[1].style.display = 'block';
    errorParagraph[1].style.display = 'block';
    lastName.style.borderColor="red";
    isError = true;
  } else {
    errorImg[1].style.display = 'none';
    errorParagraph[1].style.display = 'none';
  }

  if (email.value.trim() === '') {
    errorImg[2].style.display = 'block';
    errorParagraph[2].style.display = 'block';
    email.style.borderColor="red";
    isError = true;
  } else if (!isValidEmail(email.value)) {
    errorImg[2].style.display = 'block';
    errorParagraph[2].textContent = 'Please provide a valid email';
    errorParagraph[2].style.display = 'block';
    email.style.borderColor="red";
    isError = true;
  } else {
    errorImg[2].style.display = 'none';
    errorParagraph[2].style.display = 'none';
  }

  if (password.value.trim() === '') {
    errorImg[3].style.display = 'block';
    errorParagraph[3].style.display = 'block';
    password.style.borderColor="red";

    isError = true;
  } else {
    errorImg[3].style.display = 'none';
    errorParagraph[3].style.display = 'none';
  }

  if (!isError) {
    form.submit();
  }
});

function isValidEmail(email) {
  // Regular expression to check email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

