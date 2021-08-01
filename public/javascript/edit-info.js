async function editInfo(event) {
    event.preventDefault();

    const name = document.querySelector('input[name="name"]').value.trim();
    const last_name = document.querySelector('input[name="lastName"]').value.trim();
    const type = document.querySelector('input[name="type"]').value.trim();
    const license_num = document.querySelector('input[name="licenseNum"]').value.trim();
    const provider_id = document.querySelector('input[name="providerID"]').value.trim();

    
    const response = await fetch('/api/post', {
        method: 'POST',
        body: JSON.stringify({
            name,
            last_name,
            type,
            license_num,
            provider_id 
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

document.querySelector('#edit-save').addEventListener('click', editInfo);