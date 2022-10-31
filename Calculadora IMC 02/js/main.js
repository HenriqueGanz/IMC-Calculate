import { Modal } from './modal.js'
import { alertError } from './error.js'
import { IMC, notANumber } from './utils.js'

const form = document.querySelector("#form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")
const errorNotify = document.querySelector(".error")

form.onsubmit = (event) => {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const showAlertError = notANumber(weight) || notANumber(height)

    if (showAlertError) {
        alertError.open()
        return;
    }

    alertError.close()

    const result = IMC(weight, height)
    const message = `Seu IMC e de ${result}`

    Modal.popupMessage.innerText = message;
    Modal.open()
}

inputHeight.oninput = () => alertError.close()
inputWeight.oninput = () => alertError.close()



