async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-content"]').value;
    
    const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({
            title 
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if(response.ok) {
        document.location.reload;
    } else {
        alert(response.statusText);
    }
}

document.querySelector('#post-submit').addEventListener('submit',newFormHandler);