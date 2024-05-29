    const form = document.getElementById('contactForm');
    const firstNameInput = document.getElementById('name');
    const lastNameInput = document.getElementById('last-name')
    const firstNameError = document.getElementById('error-name')
    const lastNameError = document.getElementById('error-last-name')
    

    
    function validar(event){
        event.preventDefault()
        if (firstNameInput.value.trim() === '') {
            firstNameError.textContent = 'First Name is required';
    }else{
        firstNameError.textContent = ""
    }
        if (lastNameInput.value.trim() === '') {
            lastNameError.textContent = 'Last Name is required';
        }else{
            lastNameError.textContent = ""
        }
    } 

    form.addEventListener('submit', validar)




