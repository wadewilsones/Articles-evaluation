function handleSubmit (event) {
    let formUrl = document.getElementById('form-URL').value;
         if(checkForName(formUrl)){
            let formUrl = document.getElementById('form-URL').value;
    event.preventDefault ()
    fetch (`http://localhost:8082/analyze`, 
    {method:'POST',
    credentials:'same-origin',
    mode:'cors',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({formUrl:formUrl}),   
    })
    .then (console.log (newData)//(res => res.json()) 
    )}
   else {console.log ('Invalid URL')}
}
let results = document.getElementById ('results');
