(() => {
    const button = document.getElementById('send-email');
    const nameInput = document.getElementById('name-input');
    const emailInput = document.getElementById('email-input');

    button.addEventListener('click', (event) => {
        event.preventDefault();

        localStorage.setItem('newsletter-name', nameInput.value);
        localStorage.setItem('newsletter-email', emailInput.value);
    })

    const rollDown = document.getElementById('roll-down');

    rollDown.addEventListener('click', (event) => {
        event.preventDefault();

        let scrollTo = document.getElementById('reasons');
        window.scrollTo(0, scrollTo.scrollHeight);  
    })
})();