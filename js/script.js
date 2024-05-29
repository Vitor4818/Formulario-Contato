document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Previne o envio do formulário
    event.preventDefault();

    // Validação do campo "First Name"
    const firstNameInput = document.getElementById('name');
    const lastMameInput = document.getElementById('last-name')
    const firstNameError = document.getElementById('error');


    if (firstNameInput.value.trim() === '' && lastMame.value.trim()=== '') {
        firstNameError.textContent = 'First Name is required';
    } else {
        firstNameError.textContent = '';
        alert('Formulário enviado com sucesso!');
        // Aqui você pode adicionar a lógica para enviar o formulário, por exemplo:
        // document.getElementById('contactForm').submit();
    }
    
});




