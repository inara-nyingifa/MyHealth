async function dashboard() {
    //add POST dashboard route in api/users
    const response = await fetch('/api/users/dashboard', {
        method: 'post',
        headers: {'Content-Type': 'application/json'}
    });

    //replace with patient dashboard
    if(response.ok) {
        document.location.replace('/patient-dashboard');
    } else{
        alert(response.statusText);
    }
}
//add dashboard button in post hb 
document.querySelector('#dashboard').addEventListener('click', dashboard);