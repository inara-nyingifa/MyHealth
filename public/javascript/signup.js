async function signupFormHandler(event) {
    event.preventDefault();

    const user_type = document.querySelector('#user-type').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    //may need to change route
    if(user_type && email && password) {
      const response = await fetch('/api/user-routes', {
          method: 'post',
          body: JSON.stringify({
              email,
              password,
              account_type
          }),
          headers: { 'Content-Type': 'application/json'}
      });
      
      if(response.ok && user_type.value=='patient') {
          document.location.replace('/dashboard/');
      } 
      else if(response.ok && user_type.value=='provider') {
        document.location.replace('/dashboardProvider/');
      } 
      else {
          alert(response.statusText);
      }
    }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);