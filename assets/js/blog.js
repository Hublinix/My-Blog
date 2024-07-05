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
    window.location.replace("file:///C:/Users/kachi/Git%20Codes/SMU-VIRT-FSF-PT-05-2024-U-LOLC-main%20(1)/My-Blog/index.html");
});

function init () {
    renderForm();
}
init();