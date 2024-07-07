const backButton = document.getElementById('back');

function renderForm() {
    const lastForm = JSON.parse(localStorage.getItem('formApp'));
    const bloglist = document.getElementById("bloglist")
    let htmlCards = ""
    for (let i = 0; i < lastForm.length; i++) {
        htmlCards += `
       <section class="card">
            <h3>Title:${lastForm[i].title}</h3>
            <p>Content:${lastForm[i].content}</p>
            <h6>Username: ${lastForm[i].username}</h6>

       </section>
    `
    }
    bloglist.innerHTML=htmlCards
}

backButton.addEventListener('click', function (event) {
    event.preventDefault();
    renderForm();
    window.location.replace("./blog.html");
});

function init() {
    renderForm();
}
init();