var btnTranslate = document.querySelector("#btn-translate");
var txtInput =  document.querySelector("#text-input");
var outputDiv = document.querySelector("#translate-output");

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationUrl(input){
  return serverURL + "?" + "text=" + input
}
function errorhandler(error){
  console.log("error occured",error);
  alert("something wrong with server! try again ")
}
function clickHandler(){
  var inputText = txtInput.value
  fetch(getTranslationUrl(inputText))
  .then(response => response.json())
  .then(json=>{
    var translatedText = json.contents.translated;
    outputDiv.innerText = translatedText;
  })
  .catch(errorhandler)
};
btnTranslate.addEventListener("click",clickHandler)