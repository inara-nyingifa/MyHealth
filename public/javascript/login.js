async function loginFormHandler(event) {
    event.preventDefault();

    const user_type = document.querySelector('#user_type').value;
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
    //may need to change route
    if (email && passowrd) {
        const response = await fetch('/api/user/login', {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: {'Content-Type': 'application/json'}
        });

        if(response.ok) {
            if(user_type === 'provider') {
                document.location.replace('provider-dashboard')
            } else if (user_type === 'patient') {
                document.location.replace('patient-dashboard')
            } else {
                document.location.replace('/homepage/');
            }
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);