const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {

  button.addEventListener('mousedown', () => {

    button.classList.add('pressed');

  });

  button.addEventListener('mouseup', () => {

    button.classList.remove('pressed');

  });

});

