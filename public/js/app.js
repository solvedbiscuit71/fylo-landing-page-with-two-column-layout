function validateEmail(email) {
  const regex = /^[a-zA-Z0-9#$^&*{}?-]+(\.[a-zA-Z0-9#$^&*{}?-]+)*@[a-zA-Z0-9#$^&*{}?-]+(\.[a-zA-Z0-9#$^&*{}?-]+)*\.[a-z]+$/;
  return regex.test(email)
}

const formElements = {
  hero: {
    input: document.querySelector(".Hero .Form input"),
    btn: document.querySelector(".Hero .Form button"),
    warning: document.querySelector(".Hero .Form__email-warning"),
  },
  earlyAccess: {
    input: document.querySelector(".Early-access .Form input"),
    btn: document.querySelector(".Early-access .Form button"),
    warning: document.querySelector(".Early-access .Form__email-warning"),
  }
}

function handleClick(event,form) {
  event.preventDefault()

  if(validateEmail(form.input.value)) {
    form.warning.style.display = "none"
  }else {
    form.warning.style.display = "block"
  }
}


formElements.hero.btn.addEventListener('click', event => handleClick(event,formElements.hero))
formElements.earlyAccess.btn.addEventListener('click', event => handleClick(event,formElements.earlyAccess))
