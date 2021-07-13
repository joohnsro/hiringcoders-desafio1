(() => {
    const button = document.getElementById('send-email');
    const input = document.getElementById('email-input');

    button.addEventListener('click', (event) => {
        event.preventDefault();

        localStorage.setItem('newsletter-email', input.value);
    })
})();