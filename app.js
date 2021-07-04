'use strict';




class Quotes {

    getQuotes() {

        const btnMssg = document.getElementById('btnMssg');
        let txtMssg = document.getElementById('txtMssg');
        let sample = document.getElementById('sample');
        btnMssg.addEventListener('click', () => {
            fetch('https://type.fit/api/quotes')
            .then(response => response.json())
            .then(result => {
             
                // destruct data and push to new array
                let data = [result];
                let [...[item]] = data;
                let newArray = [];

                for (let msg of item) {
                   newArray.push(msg.text);
                }
                
                // generate random quotes
                let randomQuotes = Math.floor(Math.random() * (newArray.length));
                txtMssg.textContent = newArray[randomQuotes];

                
                
            })
        });
    
    } // end of getQuotes method

   

} // end of main class

const mssg = new Quotes();

mssg.getQuotes();








