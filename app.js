//assign counter
let counter = document.querySelector('.advice-count');

//assing content(quote)
let quote = document.querySelector('.advice-content');

//assign diceBtn
let diceBtn = document.querySelector('.dice-div');

//define function, for API, to generate random number for advice api URL
//bring in API
diceBtn.addEventListener('click', () => {
var adviceAPI = new XMLHttpRequest();
adviceAPI.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       let apiText = adviceAPI.responseText;
       let apiParse = JSON.parse(apiText);
       document.getElementById("demo").innerHTML = apiText;
            //fill counter text with slip.id
            counter.textContent = `ADVICE # ${apiParse.slip.id}`;
            //fill quote text with slip.advice
            quote.textContent = apiParse.slip.advice;
        }
    }

adviceAPI.open("GET", `https://api.adviceslip.com/advice`, true);
adviceAPI.send();

})