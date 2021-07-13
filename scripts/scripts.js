(() => {
    const button = document.getElementById('send-email');
    const input = document.getElementById('email-input');

    button.addEventListener('click', (event) => {
        event.preventDefault();

        localStorage.setItem('newsletter-email', input.value);
    })

    const rollDown = document.getElementById('roll-down');

    rollDown.addEventListener('click', (event) => {
        event.preventDefault();

        let scrollTo = document.getElementById('reasons');
        window.scrollTo(0, scrollTo.scrollHeight);  
    })
})();