const openModalButton = document.querySelector('.modal-open');
const closeModalButton = document.querySelector('.modal-close');
const modal = document.querySelector('.modal');

openModalButton.addEventListener('click', function(){
    modal.classList.toggle('show-modal');
});

closeModalButton.addEventListener('click', function(){
    modal.classList.remove('show-modal');
});

window.addEventListener('click', function(e){
    if( e.target == modal ){
        modal.classList.remove('show-modal');
    }
});
