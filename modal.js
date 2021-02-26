let modalFunc = function(){
  const openModal = document.querySelector('.button-box__button');
  const overlay = document.querySelector('.modal-overlay');
  const closeBtn = document.querySelector('.modal-window__close-btn');

  openModal.addEventListener('click', () => {
    overlay.classList.add('active');
    return setTimeout(showCloseButton, 500);
  });

  function closeModalWindow(){
    return overlay.classList.remove('active');
  }
  function showCloseButton(){
    closeBtn.classList.add('active');
    closeBtn.addEventListener('click', () => {
      closeBtn.classList.remove('active');
      return setTimeout(closeModalWindow, 500);
    })
  }
};

modalFunc();

