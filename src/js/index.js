const inputSubmit = document.getElementById('submit')
const inputText = document.getElementById('email')
const errorMessage = document.querySelector('.error-message')
const errorIcon = document.querySelector('.icon-error')
const form = document.querySelector('form')

function validaEmail(email) {
    const emailRegex =  /^([a-zA-Z][^<>\"!@[\]#$%¨&*()~^:;ç,\-´`=+{}º\|/\\?]{1,})@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return emailRegex.test(String(email).toLowerCase())
}

inputSubmit.addEventListener ('click', (email) =>   
{
    event.preventDefault()
    validaEmail()
    if (validaEmail === true) {            
        inputText.classList.remove("borda-vermelha")
        errorMessage.classList.remove("aparecer")
        errorIcon.classList.remove("aparecer")
    } else {
        inputText.classList.remove("borda-normal")
        inputText.classList.add("borda-vermelha")
        errorMessage.classList.add("aparecer")
        errorIcon.classList.add("aparecer")
    }
})

