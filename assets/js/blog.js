const backButton = document.getElementById('back');

function renderForm() {
    const lastForm = JSON.parse(localStorage.getItem('formApp'));
    if (lastForm !== null) {
        document.getElementById('saved-username').innerHTML = lastForm.username
        document.getElementById('saved-title').innerHTML = lastForm.title
        document.getElementById('saved-content').innerHTML = lastForm.content
    }
}

backButton.addEventListener('click',function(event) {
    event.preventDefault();
    renderForm();
    window.location.replace("./blog.html");
});

function init () {
    renderForm();
}
init();