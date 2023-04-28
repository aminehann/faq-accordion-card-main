const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
  question.addEventListener('click', () => {
    question.style.color = 'black';
    question.style.fontWeight = 'bold';
    // Toggle visibility of answer
    const answer = question.nextElementSibling;
    answer.classList.toggle('open');
    
    // Rotate arrow icon for the clicked question only
    const arrow = question.querySelector('.arrow');
    arrow.classList.toggle('rotate');

  });
});


