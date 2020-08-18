let quote = '';
let author = '';
var language = localStorage.getItem("language");


function loadJsonENG(callback) {
	let xobj = new XMLHttpRequest();
	xobj.overrideMimeType("application/json");
	xobj.open('GET', './data/quotesENG.json', true);
	xobj.onreadystatechange = () => {
	  if (xobj.readyState == 4 && xobj.status == "200") {
		callback(xobj.responseText);
	  }
	};
	xobj.send(null);
  }

  function loadJsonTUR(callback) {
	let xobj = new XMLHttpRequest();
	xobj.overrideMimeType("application/json");
	xobj.open('GET', './data/quotesTUR.json', true);
	xobj.onreadystatechange = () => {
	  if (xobj.readyState == 4 && xobj.status == "200") {
		callback(xobj.responseText);
	  }
	};
	xobj.send(null);
  }



  
  function newQuote() {
	if(language == "eng"){
		loadJsonENG(response => {
			// Parse JSON string into object
			let quotes = JSON.parse(response);
			let randomNumber = Math.random() * (Object.keys(quotes).length - 1);
			randomNumber = Math.round(randomNumber);
			quote = quotes[randomNumber].quote;
			author = quotes[randomNumber].author;
			document.getElementById('quote').innerHTML = quote;
			document.getElementById('author').innerHTML = author;
		  });
	}
	else if(language == "tur"){
		loadJsonTUR(response => {
			// Parse JSON string into object
			let quotes = JSON.parse(response);
			let randomNumber = Math.random() * (Object.keys(quotes).length - 1);
			randomNumber = Math.round(randomNumber);
			quote = quotes[randomNumber].quote;
			author = quotes[randomNumber].author;
			document.getElementById('quote').innerHTML = quote;
			document.getElementById('author').innerHTML = author;
		  });
	}
	
  }



  window.onload = newQuote();
