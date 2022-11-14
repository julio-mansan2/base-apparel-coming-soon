const inputSubmit = document.getElementById('submit')
const inputText = document.getElementById('email')
const errorMessage = document.querySelector('.error-message')
const errorIcon = document.querySelector('.icon-error')
const form = document.querySelector('form')


inputSubmit.addEventListener ('click', () =>   
{
    event.preventDefault()
    if ((inputText.value === "" || inputText.validity.valid === false)) {            
        inputText.classList.remove("borda-normal")
        inputText.classList.add("borda-vermelha")
        errorMessage.classList.add("aparecer")
        errorIcon.classList.add("aparecer")
    } else {
        inputText.classList.remove("borda-vermelha")
        errorMessage.classList.remove("aparecer")
        errorIcon.classList.remove("aparecer")
    }
})

