const lightEl = document.querySelector('#light');
const container = document.querySelector('.switch');

let mode = 'dark';

lightEl.addEventListener('click', function () {
    if (mode === 'dark') {
        mode = 'light'
        container.setAttribute('class', 'light')
    }
    else {
        mode = 'dark'
        container.setAttribute('class', 'dark')
    }
});