var btnTranslate=document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-input");
var outputDiv=document.querySelector("#output");

// var serverURL="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverURL="	https://api.funtranslations.com/translate/minion.json"



function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input
}

function errorHandler(error) {
    console.log(" occured erroe",error);
    alert("something wrongnwith server! try again after some time")
}


function clickHandler() {
    // outputDiv.innerText= "ajsjsjsjsjsjsj "+txtInput.value;
    console.log("aaaaaaaaaaaaaa")
    var inputText=txtInput.value;

    fetch(getTranslationURL(inputText))
        .then(Response=>Response.json())
        .then(json=>{
            var translatedText=json.contents.translated;
            outputDiv.innerText=translatedText;
        })
        .catch(errorHandler)
};
btnTranslate.addEventListener("click",clickHandler)
