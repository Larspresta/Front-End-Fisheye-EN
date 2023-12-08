const openButton = document.querySelector('#open-button');
const closeButton = document.querySelector('.close-button');
const modal = document.querySelector('.contact-modal');

 openButton.addEventListener('click', () => {
    modal.showModal()
});

closeButton.addEventListener('click', () => {
    modal.close()
});

const form = document.querySelector('form');

function formValues (){
    const field = form.elements;
    console.log ("First name: ", field.firstname.value);
    console.log ("Last name: ", field.lastname.value);
    console.log ("Email: ", field.email.value);
    console.log ("Message: ", field.message.value);

}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    formValues();
    form.reset();
    modal.close();
});