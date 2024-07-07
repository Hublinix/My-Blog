const username = document.getElementById('username');
const title = document.getElementById('title');
const content = document.getElementById('content');
const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', function(event) {
    event.preventDefault();

let previousBlog = JSON.parse(localStorage.getItem("formApp")) || []

    const formApp = {
        username: username.value,
        title: title.value,
        content: content.value.trim(),
    };
    previousBlog.push(formApp)
    localStorage.setItem('formApp', JSON.stringify(previousBlog));
    window.location.href = "./blog.html"
});
