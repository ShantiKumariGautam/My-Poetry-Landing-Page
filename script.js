// script.js

document.addEventListener('DOMContentLoaded', () => {
    console.log('Welcome to the Poetry Reading Event!');
});

function togglePoem(poemId) {
    const poemElement = document.getElementById(poemId);
    if (poemElement.classList.contains('hidden')) {
        poemElement.classList.remove('hidden');
    } else {
        poemElement.classList.add('hidden');
    }
}
