    const form = document.getElementById('contactForm');
    const firstNameInput = document.getElementById('name');
    const lastNameInput = document.getElementById('last-name')
    const firstNameError = document.getElementById('error-name')
    const lastNameError = document.getElementById('error-last-name')
    const emailInput = document.getElementById('email')
    const emailErro = document.getElementById('email-error')
    const queryInput= document.getElementsByClassName('queryInput')
    const queryError = document.getElementById('queryError')
    const messageInput = document.getElementById('message')
    const messageError = document.getElementById('textareaError')
    

    
    function validar(event){
        event.preventDefault()

        let isValid = true;

        if (firstNameInput.value.trim() === '') {
            firstNameError.textContent = 'First Name is required';
            isValid = false
    }else{
        firstNameError.textContent = ""
    }


        if (lastNameInput.value.trim() === '') {
            lastNameError.textContent = 'Last Name is required';
            isValid = false
        }else{
            lastNameError.textContent = ""
        }



    if (emailInput.value.trim() === ''){
        emailErro.textContent = 'Email is required'
        isValid = false
    }else{
        emailErro.textContent = ''
    }
    
    let isRadioChecked = false;
    for (let radio of queryInput){
        if(radio.checked){
            isRadioChecked = true;
            break
        }
    }

    if(!isRadioChecked){
        queryError.textContent = 'Select an option'
        isValid = false
    }else{
        queryError.textContent = ''
    }

    if(messageInput.value.trim() ===''){
        messageError.textContent = 'This field is required'
        isValid = false
    }else{
        messageError.textContent = ''
    }


    } 

    form.addEventListener('submit', validar)




