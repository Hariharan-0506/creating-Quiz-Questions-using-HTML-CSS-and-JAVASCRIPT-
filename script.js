const options = document.querySelectorAll('.options li');
const correctAnswer = 'D';

options.forEach(option => {
  option.addEventListener('click', () => {
    resetBackgrounds();
    if (option.getAttribute('data-answer') === correctAnswer) {
      option.style.backgroundColor = 'green';
    } else {
      option.style.backgroundColor = 'red';
    }
  });
});

function resetBackgrounds() {
  options.forEach(option => {
    option.style.backgroundColor = '';
  });
}
