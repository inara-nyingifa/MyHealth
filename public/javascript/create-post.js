async function createPost() {
    //add POST route in api/users that redirects to post handlebars
    const response = await fetch('/api/post', {
        method: 'post',
        headers: {'Content-Type': 'application/json'}
    });

    //replace with post dashboard
    if(response.ok) {
        document.location.replace('/create-post');
    } else{
        alert(response.statusText);
    }
}
//add dashboard button in post hb 
document.querySelector('#create-post').addEventListener('click', createPost);