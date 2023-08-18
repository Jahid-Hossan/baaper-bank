document.getElementById('btn-submit').addEventListener('click', function () {
    const emailInput = document.getElementById('email-input');
    const passInput = document.getElementById('pass-input');
    const email = emailInput.value;
    const pass = passInput.value;
    if (email === 'jahid@rabi.com' && pass === 'jahid') {
        window.location.href = 'bank.html';
    } else {
        alert('Please provide valid email and password');
    }

})

