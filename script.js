'use strict';

window.addEventListener('DOMContentLoaded', () => {

    const modalTriger = document.querySelector('#button'),
        modal = document.querySelector('.modal'),
        modalCloseBtn = document.querySelector('.modal-close'),
        modalTinerId = setTimeout(openModal, 3000), // open modal timer
        tetstik = document.querySelector('#tetstik');

    function openModal() {
        modal.classList.add('show-modal');
        modal.classList.remove('hide-modal');
        document.body.style.overflow ='hidden';
        clearInterval(modalTinerId);
    }

    function closeModal() {
        modal.classList.add('hide-modal');
        modal.classList.remove('show-modal');
        document.body.style.overflow ='';
    }

    // other close

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show-modal')) {
            closeModal();
        }
    });

    modalTriger.addEventListener('click', openModal);
    modalCloseBtn.addEventListener('click', closeModal);

    // open modal scroll

    function openModalScroll() {
        let i = 0;
        document.addEventListener('scroll', function func() {
            if (window.scrollY >= 500) {
                openModal();
                i++
                console.log(window.scrollY);
                if (i == 1) {
                    document.removeEventListener('scroll', func); // open once when scrolling
                }
                
            }
        });
    }

    openModalScroll();

});
