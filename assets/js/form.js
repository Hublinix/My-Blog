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
    window.location.replace("file:///C:/Users/kachi/Git%20Codes/SMU-VIRT-FSF-PT-05-2024-U-LOLC-main%20(1)/My-Blog/blog.html")
});

function saveForm() {
    const lastForm = JSON.parse(localStorage.getItem('saveForm'));
    if (lastForm !== null) {
    }
}

