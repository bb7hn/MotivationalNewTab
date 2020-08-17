var languageElement = document.getElementById("language");
var buttonElement = document.getElementById("addButton");
var language = 'eng';

if(languageElement != null){
    languageElement.addEventListener("change", function(){
        language = languageElement.value;
        localStorage.setItem("language",language);
        location.reload();
    });
}



function updateLanguage(){
    var tempLang = localStorage.getItem("language");
    if(document.getElementById('currentLanguage') != null){
        if(tempLang == "eng"){
            document.getElementById('currentLanguage').innerHTML = "Current Language : English";
        }
        else if(tempLang == "tur"){
            document.getElementById('currentLanguage').innerHTML = "Current Language : Türkçe";
        }
        else{
            localStorage.setItem("language","eng");
            document.getElementById('currentLanguage').innerHTML = "Current Language : English";
        }
    }
}

updateLanguage();