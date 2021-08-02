async function loginFormHandler(event) {
    event.preventDefault();

    const account_type = document.querySelector('#account_type').value;
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
    //may need to change route
    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                
                email,
                password
            }),
            headers: {'Content-Type': 'application/json'}
        });

        if(response.ok) {
            document.location.replace('/dashboard/');
            if(account_type === 'provider') {
                document.location.replace('provider-dashboard')
            } else if (account_type === 'patient') {
                document.location.replace('patient-dashboard')
            } else {
                document.location.replace('/homepage/');
            }
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('#login').addEventListener('click', loginFormHandler);