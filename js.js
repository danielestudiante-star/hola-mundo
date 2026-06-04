 const chatbotButton = document.getElementById('chatbotButton')
  const chatbotBox = document.getElementById('chatbotBox')
  const chatbotClose = document.getElementById('chatbotClose')
  const chatbotForm = document.getElementById('chatbotForm')
  const chatbotInput = document.getElementById('chatbotInput')
  const chatbotMessages = document.getElementById('chatbotMessages')
  const suggestionButtons = document.querySelectorAll('.chatbot__suggestions button')

  chatbotButton.addEventListener('click', () => {
    chatbotBox.classList.toggle('is-open')
  })

  chatbotClose.addEventListener('click', () => {
    chatbotBox.classList.remove('is-open')
  })

  chatbotForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const question = chatbotInput.value.trim()

    if (question === '') {
      return
    }

    addMessage(question, 'user')
    addMessage(getBotResponse(question), 'bot')

    chatbotInput.value = ''
  })

  suggestionButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const question = button.dataset.question

      addMessage(question, 'user')
      addMessage(getBotResponse(question), 'bot')
    })
  })

  function addMessage(text, author) {
    const message = document.createElement('div')

    message.classList.add('message')

    if (author === 'user') {
      message.classList.add('message--user')
    } else {
      message.classList.add('message--bot')
    }

    message.textContent = text
    chatbotMessages.appendChild(message)
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight
  }

  function getBotResponse(question) {
    const text = question.toLowerCase()

    if (text.includes('hola') || text.includes('buenas')) {
      return 'Hola. Bienvenido a mi portafolio. Puedo contarte sobre mis habilidades, proyectos y contacto.'
    }

    if (text.includes('habilidad') || text.includes('habilidades')) {
      return 'Mis habilidades incluyen HTML, CSS, JavaScript, diseño web responsive y creación de interfaces modernas.'
    }

    if (text.includes('proyecto') || text.includes('proyectos')) {
      return 'En mi portafolio muestro proyectos web donde practico estructura HTML, estilos CSS y lógica con JavaScript.'
    }

    if (text.includes('contacto') || text.includes('correo') || text.includes('email')) {
      return 'Podés contactarme desde la sección de contacto de mi portafolio o por correo electrónico.'
    }

    if (text.includes('sobre mi') || text.includes('quien eres') || text.includes('perfil')) {
      return 'Soy Daniel y este portafolio muestra mi aprendizaje, mis proyectos y mis habilidades como desarrollador web.'
    }

    return 'Puedo responder preguntas sobre mi perfil, habilidades, proyectos y contacto.'
  }