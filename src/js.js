      
//Running onclick event

function handleSubmit (event) {
   event.preventDefault();
   let formUrl = document.getElementById('form-URL').value;
   if(Fox.checkForName(formUrl)){
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
   }

   addData();}

   else {console.log ('Invalid URL')}
}

//Display response function

function displayResponse (res) {

   document.getElementById('results').innerHTML = 'Analysis Results:'
   document.getElementById('confidence').innerHTML = "Confidence: ".bold() + res.confidence + "%";
   document.getElementById('Irony').innerHTML = "Irony:  ".bold() + res.irony.toLowerCase();
   document.getElementById('Score').innerHTML = "Score tag: ".bold() + res.score_tag.toLowerCase();
   document.getElementById('Subjectivity').innerHTML = "Subjectivity: ".bold() + res.subjectivity.toLowerCase();
   function cleanUI() {
      document.getElementById('form-URL').value = "";
   }
   cleanUI();
}



export { handleSubmit };
export { displayResponse};
