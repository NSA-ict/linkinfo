// Load the Google Sheets API
function initClient() {
    gapi.client.init({
        apiKey: 'AIzaSyBGP0su_B0on_PmPEVLBTSOxur6FdaNCFY',
        discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
    }).then(function () {
        // Fetch data from the Google Sheet
        fetchData();
    }).catch(function (error) {
        console.log(error);
    });
}

// Fetch data from the Google Sheet
function fetchData() {
    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: '1C7O_xWAzbpffYQfT0su_Sm9876HLWXN0xknnxsK5mu8',
        range: 'Sheet1!A2:C', // Adjust the range as per your sheet
    }).then(function (response) {
        var values = response.result.values;
        if (values && values.length > 0) {
            console.log(values); // You can remove this line or modify it to suit your needs
            // Store the data in a variable for later use
            window.data = values;
        } else {
            console.log('No data found.');
        }
    }).catch(function (error) {
        console.log(error);
    });
}

// Process and display the search results
function processData() {
    var searchValue = document.getElementById('searchInput').value.toLowerCase();
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '';

    var matchFound = false;

    if (window.data && window.data.length > 0) {
        for (var i = 0; i < window.data.length; i++) {
            var item = window.data[i];
            var name = item[0].toLowerCase();
            var info = item[1];
            var photoUrl = item[2];

            if (name.includes(searchValue)) {
                var card = document.createElement('div');
                card.className = 'card';

                var img = document.createElement('img');
                img.src = photoUrl;
                img.alt = name + ' photo';
                card.appendChild(img);

                var nameElement = document.createElement('h2');
                nameElement.textContent = name;
                card.appendChild(nameElement);

                var infoElement = document.createElement('p');
                infoElement.textContent = info;
                card.appendChild(infoElement);

                outputDiv.appendChild(card);
                matchFound = true;
            }
        }
    }

    if (!matchFound) {
        var noMatchMsg = document.createElement('p');
        noMatchMsg.textContent = 'No matching data found.';
        outputDiv.appendChild(noMatchMsg);
    }
}

// Load the Google Sheets API
gapi.load('client', initClient);
