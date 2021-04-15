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
    .then (res => res.json())
    .then  (consoleFunction())
   // Client.checkForName(formUrl)
   // console.log ("::: Form Submitted :::")
}

//export { handleSubmit } doesn't work



function consoleFunction() {

    let results = document.getElementById('results');
    console.log (res.agreement)
}
