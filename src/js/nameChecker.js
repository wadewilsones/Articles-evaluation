
function checkForName(formUrl)  {
    
    //console.log("::: Running checkForUrl :::", formUrl);
  
    const pattern = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi;
    return pattern.test(formUrl);
    
  }
  checkForName();

 export { checkForName };
 module.exports = checkForName;
