const toggleEl = document.querySelector('#toggle');
const container = document.querySelector('.container')

let mode = 'light';

toggleEl.addEventListener('click', function () {
    if (mode === 'light') {
        mode = 'dark'
        container.setAttribute('class','dark')
    }

    else {
        mode = 'light';
        container.setAttribute('class','light');
    }
})