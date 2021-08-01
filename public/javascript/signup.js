async function signupFormHandler(event) {
    event.preventDefault();

    const account_type = document.querySelector('#account_type').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    //may need to change route
    if(account_type && email && password) {
      const response = await fetch('/api/users', {
          method: 'post',
          body: JSON.stringify({
              account_type,
              email,
              password,
          }),
          headers: { 'Content-Type': 'application/json'}
      });
      
      if(response.ok && account_type.value=='patient') {
          document.location.replace('/patient-dashboard');
      } 
      else if(response.ok && account_type.value=='provider') {
        document.location.replace('/provider-dashboard');
      } 
      else {
          alert(response.statusText);
      }
    }
}

document.querySelector('#signup').addEventListener('submit', signupFormHandler);