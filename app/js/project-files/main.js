const servicesCard = document.querySelectorAll('.services__card')
const modal = document.querySelector('.modal')
const closeModalButton = document.querySelector('.modal__close')

function showModal(e) {
    e.preventDefault();
    modal.classList.add('open');
    const serviceCardBanner = e.currentTarget.querySelector('.services__card-banner').src
    const serviceCardTrainer = e.currentTarget.querySelector('.services__card-trainer').textContent
    const serviceCardGroup = e.currentTarget.querySelector('.services__card-group-name').textContent
    modal.querySelector('.modal__content-img').src = serviceCardBanner
    modal.querySelector('.heading__modal').textContent = serviceCardGroup
    modal.querySelector('.modal__info-trainer').textContent = serviceCardTrainer
    document.body.style.overflow = 'hidden'
}


function closeModal() {
    modal.classList.remove('open');
    modal.querySelector('.modal__content-img').src = ""
    modal.querySelector('.heading__modal').textContent = ""
    modal.querySelector('.modal__info-trainer').textContent = ""
    document.body.style.overflow = 'auto'
}

closeModalButton.addEventListener('click', closeModal);

servicesCard.forEach(card => {
    card.addEventListener('click', showModal)
})



