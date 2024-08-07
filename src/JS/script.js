// ************************** FAQ accordion js **************************

document.querySelectorAll('.accordion-item').forEach(item => {
    const question = item.querySelector('.accordion-question');
    const answer = item.querySelector('.accordion-answer');
  
    question.addEventListener('mouseover', () => {
      answer.style.maxHeight = answer.scrollHeight + 'px';
    });
  
    question.addEventListener('mouseout', () => {
      answer.style.maxHeight = '0';
    });
  });
  