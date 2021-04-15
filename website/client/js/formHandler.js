function handleSubmit (event) {
    let formUrl = document.getElementById('form-URL').value;
    event.preventDefault ()
    fetch (`http://localhost:8082/save`, 
    {method:'POST',
    credentials:'same-origin',
    mode:'cors',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({formUrl:formUrl}),   
    })

}





