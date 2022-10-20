const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', submitForm)

function submitForm(event) {
    event.preventDefault();

    const formEl = event.currentTarget.elements;
    const email = formEl.email.value;
    const password = formEl.password.value;

    if (email === '' || password === '') {
        alert('Not all fields are filled. Please fill!!!');
    };

    const formData = {
        email,
        password,
    };

    console.log(formData);

    loginForm.reset();
}