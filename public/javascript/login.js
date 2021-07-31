async function loginFormHandler(event) {
    event.preventDefault();

    const user_type = document.querySelector('#user-type').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
    //may need to change route
    if (email && passowrd) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: {'Content-Type': 'application/json'}
        });

        if(response.ok && user_type.value=='patient') {
            document.location.replace('/dashboard');
        } 
        else if(response.ok && user_type.value=='provider') {
          document.location.replace('/dashboardProvider');
        }  else {
            alert(response.statusText);
        }
    }
}

document.querySelector('#login').addEventListener('submit', loginFormHandler);