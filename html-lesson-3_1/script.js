console.log('hi');
const button = document.querySelector('.button');
button.addEventListener('click', () => {
    document
        .querySelector('.modal')
        .setAttribute('class', 'modal')
});