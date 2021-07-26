async function signupFormHandler(event) {
    event.preventDefault();

    const user_type = document.querySelector('#user-type').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if(user_type && email && password) {
      const response = await fetch('/api/users', {
          method: 'post',
          body: JSON.stringify({
              email,
              password,
              account_type
          }),
          headers: { 'Content-Type': 'application/json'}
      });
      
      if(response.ok) {
          document.location.replace('/dashboard');
      } else {
          alert(response.statusText);
      }
    }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);