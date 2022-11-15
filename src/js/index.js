const inputSubmit = document.getElementById('submit')
const inputText = document.getElementById('email')
const errorMessage = document.querySelector('.error-message')
const form = document.querySelector('form')


inputSubmit.addEventListener ('click', () =>   
{
    event.preventDefault()
    if ((inputText.value === "" || inputText.validity.valid === false)) {            
        inputText.classList.remove("borda-normal")
        inputText.classList.add("borda-vermelha")
        inputText.classList.add('icon-error')
        errorMessage.classList.add("aparecer")
    } else {
        inputText.classList.remove("borda-vermelha")
        inputText.classList.add("borda-normal")
        errorMessage.classList.remove("aparecer")
        inputText.classList.remove("icon-error")
    }
})

