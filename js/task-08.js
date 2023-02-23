
const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', getLoginAndPassword)

function getLoginAndPassword (event) {
  event.preventDefault();

  const emailInput = event.currentTarget.elements.email;
  const passwordInput = event.currentTarget.elements.password;

  if (!emailInput.value || !passwordInput.value) {
    alert('All fields are required')
  } else {
    const formData = {
        email: emailInput.value,
        password: passwordInput.value,
      };
      console.log(formData); 
    loginForm.reset();
  }
  
};



