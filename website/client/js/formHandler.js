//Running onclick event

function handleSubmit (event) {
   event.preventDefault();
   let formUrl = document.getElementById('form-URL').value;
   if(checkForName(formUrl)){
      async function addData () {
         
         let answer = await fetch (`http://localhost:8082/analyze`, 
         {method:'POST',
          credentials:'same-origin',
          mode:'cors',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify({formUrl}),
       })
         .then ((res) => res.json())
         
         .then ((res)=> {displayResponse(res), console.log (res)})
         //let content = await answer.text();
   }

   addData();}

   else {console.log ('Invalid URL')}
}

//Display response function

function displayResponse (res) {

   
   document.getElementById('confidence').innerHTML = "Confindens: " + res.confidence + "%";
   document.getElementById('Irony').innerHTML = "Irony:  " + res.irony.toLowerCase();
   document.getElementById('Score').innerHTML = "Score tag: " + res.score_tag.toLowerCase();
   document.getElementById('Subjectivity').innerHTML = "Subjectivity: " + res.subjectivity.toLowerCase();
}
