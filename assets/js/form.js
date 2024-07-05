const username = document.getElementById('username');
const title = document.getElementById('title');
const content = document.getElementById('content');
const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', function(event) {
    event.preventDefault();

    const formApp = {
        username: username.value,
        title: title.value,
        content: content.value.trim(),
    };

    localStorage.setItem('formApp', JSON.stringify(formApp));
    saveForm();
});

function saveForm() {
    const lastForm = JSON.parse(localStorage.getItem('saveForm'));
    if (lastForm !== null) {
    }
}