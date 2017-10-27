const ipc = require('electron').ipcRenderer;
const submitBtn = document.getElementById('submitBtn');
var checkList = [ {"bitcoin": document.getElementById('bitcoin')},
                {"ethereum": document.getElementById('ethereum')},
                {"monero": document.getElementById('monero')},
                {"bitcoinCash": document.getElementById('bitcoinCash')}, 
                {"searchTxt": document.getElementById('searchTxt')} ];

submitBtn.addEventListener('click', function(){
    ipc.once('actionReply', function(event, response){
        processResponse(response);
    })
    ipc.send('invokeAction', getCurrencyData(checkList));
})

function getCurrencyData(currencyList){
    // So if there is search criteria, first we have to search
    // and validate it before web scraping the data.
    // If the search criteria is valid then we add it to the
    // array in currencyChecklist. Then it is off to scrape 
    // the web, retrieve the data, and store it in the 
    // lokiJS database cryptoCurrency.json for persistent storage.
    // After all data is retrieved then we need to display it
    // in the main window in table format.    
    return (currencyList);
};