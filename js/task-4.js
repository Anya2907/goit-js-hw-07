
const input = document.querySelector('.login-form');

input.addEventListener('submit', onSubmit);

function onSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();

    if (email === "" || password === "") {
        alert('All form fields must be filled in');
    }

    const objForm = {
        email,
        password,
    }

    console.log(objForm);
    form.reset();
}