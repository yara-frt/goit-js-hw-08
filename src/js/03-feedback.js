import throttle from 'lodash.throttle';

const formData = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea')
}

updateData();

formData.form.addEventListener('submit', onFormSubmit);
formData.form.addEventListener('input', throttle(onInput, 500));


function onFormSubmit(event) {
    event.preventDefault();

    const dataJson = localStorage.getItem("feedback-form-state");
    const dataObject = JSON.parse(dataJson);
    console.log(dataObject);

    event.currentTarget.reset();

    localStorage.removeItem("feedback-form-state");

}

function onInput(event) {
    const { elements: { email, message }, } = event.currentTarget;
    const allData = {
        userEmail: email.value,
        userMessage: message.value,
    };

    localStorage.setItem("feedback-form-state", JSON.stringify(allData));
}


function updateData() {
    const getDataJson = localStorage.getItem("feedback-form-state");
    const getDataUser = JSON.parse(getDataJson);

    formData.form.elements.email.value = getDataUser?.userEmail || '';
    formData.form.elements.message.value = getDataUser?.userMessage || '';
    
}
