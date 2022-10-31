
export const Modal = {

    popup: document.querySelector(".popup"),
    popupMessage: document.querySelector(".popup .container h2"),
    buttonClose: document.querySelector("#closePopup"),
    

    open() {
        Modal.popup.classList.add('open')
    },
    close() {
        Modal.popup.classList.remove('open')
    }
}

Modal.buttonClose.onclick = () => {
    Modal.close()
}

window.addEventListener('keydown', handleKeydown)

function handleKeydown(event) {
    if (event.key === 'Escape') {
       Modal.close()
    }
}