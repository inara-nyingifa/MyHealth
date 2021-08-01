async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('#post-content').value;
    
    const response = await fetch('/api/post', {
        method: 'POST',
        body: JSON.stringify({
            title 
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if(response.ok) {
        document.location.replace('/post');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.post-submit').addEventListener('submit',newFormHandler);