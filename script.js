// Client ID and API key from the Developer Console
var CLIENT_ID = '177292398339-8asgcp03jgug3sceo6e0i4artk7qekt4.apps.googleusercontent.com';
var API_KEY = 'AIzaSyBGP0su_B0on_PmPEVLBTSOxur6FdaNCFY';

// ID of the Google Sheet
var sheetId = '1C7O_xWAzbpffYQfT0su_Sm9876HLWXN0xknnxsK5mu8';

// Column index for data search (column index starts from 0)
var searchColumnIndex = 8; // Column 9 (index 8)

// Load the Google Sheets API
gapi.load('client', initClient);

// Initialize the API client
function initClient() {
  gapi.client.init({
    apiKey: API_KEY,
    clientId: CLIENT_ID,
    discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
  }).then(function () {
    // API client is initialized, load the sheet data
    loadSheetData();
  }, function (error) {
    console.log('Error initializing Google Sheets API client:', error);
  });
}

// Load the data from the Google Sheet
function loadSheetData() {
  gapi.client.sheets.spreadsheets.values.get({
    spreadsheetId: sheetId,
    range: 'Sheet1' // Change the sheet name if needed
  }).then(function (response) {
    var sheetData = response.result.values;
    console.log('Sheet data loaded:', sheetData);

    // Populate the hidden form with Google Sheet data
    var hiddenForm = document.getElementById('hiddenForm');
    for (var i = 0; i < sheetData.length; i++) {
      var rowData = sheetData[i];
      if (rowData.length === 9) { // Check if there are 9 columns of data
        var searchValue = rowData[searchColumnIndex];
        var nameField = document.createElement('input');
        nameField.type = 'hidden';
        nameField.name = 'name_' + i;
        nameField.value = searchValue;
        hiddenForm.appendChild(nameField);
      }
    }
  }, function (error) {
    console.log('Error loading Google Sheet data:', error);
  });
}

// Search data based on the entered value
function searchData() {
  var searchValue = document.getElementById('searchInput').value.trim();
  var hiddenForm = document.getElementById('hiddenForm');
  var searchResults = [];

  for (var i = 0; i < hiddenForm.elements.length; i++) {
    var nameField = hiddenForm.elements['name_' + i];

    if (nameField.value === searchValue) {
      var result = {
        name: nameField.value
      };
      searchResults.push(result);
    }
  }

  displaySearchResults(searchResults);
}

// Display the search results
function displaySearchResults(results) {
  var resultsContainer = document.getElementById('searchResults');
  resultsContainer.innerHTML = '';

  if (results.length === 0) {
    resultsContainer.innerText = 'No results found.';
    return;
  }

  for (var i = 0; i < results.length; i++) {
    var result = results[i];
    var card = document.createElement('div');
    card.classList.add('card');

    var photo = document.createElement('div');
    photo.classList.add('photo');
    var image = document.createElement('img');
    image.src = 'student_photo.jpg'; // Replace with the path to the student photo
    photo.appendChild(image);

    var details = document.createElement('div');
    details.classList.add('details');
    var nameElement = document.createElement('p');
    nameElement.classList.add('name');
    nameElement.innerText = 'Name: ' + result.name;
    details.appendChild(nameElement);

    card.appendChild(photo);
    card.appendChild(details);
    resultsContainer.appendChild(card);
  }
}
// Client ID and API key from the Developer Console
var CLIENT_ID = '177292398339-8asgcp03jgug3sceo6e0i4artk7qekt4.apps.googleusercontent.com';
var API_KEY = 'AIzaSyBGP0su_B0on_PmPEVLBTSOxur6FdaNCFY';

// ID of the Google Sheet
var sheetId = '1C7O_xWAzbpffYQfT0su_Sm9876HLWXN0xknnxsK5mu8';

// Column index for data search (column index starts from 0)
var searchColumnIndex = 8; // Column 9 (index 8)

// Load the Google Sheets API
gapi.load('client', initClient);

// Initialize the API client
function initClient() {
  gapi.client.init({
    apiKey: API_KEY,
    clientId: CLIENT_ID,
    discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
  }).then(function () {
    // API client is initialized, load the sheet data
    loadSheetData();
  }, function (error) {
    console.log('Error initializing Google Sheets API client:', error);
  });
}

// Load the data from the Google Sheet
function loadSheetData() {
  gapi.client.sheets.spreadsheets.values.get({
    spreadsheetId: sheetId,
    range: 'Sheet1' // Change the sheet name if needed
  }).then(function (response) {
    var sheetData = response.result.values;
    console.log('Sheet data loaded:', sheetData);

    // Populate the hidden form with Google Sheet data
    var hiddenForm = document.getElementById('hiddenForm');
    for (var i = 0; i < sheetData.length; i++) {
      var rowData = sheetData[i];
      if (rowData.length === 9) { // Check if there are 9 columns of data
        var searchValue = rowData[searchColumnIndex];
        var nameField = document.createElement('input');
        nameField.type = 'hidden';
        nameField.name = 'name_' + i;
        nameField.value = searchValue;
        hiddenForm.appendChild(nameField);
      }
    }
  }, function (error) {
    console.log('Error loading Google Sheet data:', error);
  });
}

// Search data based on the entered value
function searchData() {
  var searchValue = document.getElementById('searchInput').value.trim();
  var hiddenForm = document.getElementById('hiddenForm');
  var searchResults = [];

  for (var i = 0; i < hiddenForm.elements.length; i++) {
    var nameField = hiddenForm.elements['name_' + i];

    if (nameField.value === searchValue) {
      var result = {
        name: nameField.value
      };
      searchResults.push(result);
    }
  }

  displaySearchResults(searchResults);
}

// Display the search results
function displaySearchResults(results) {
  var resultsContainer = document.getElementById('searchResults');
  resultsContainer.innerHTML = '';

  if (results.length === 0) {
    resultsContainer.innerText = 'No results found.';
    return;
  }

  for (var i = 0; i < results.length; i++) {
    var result = results[i];
    var card = document.createElement('div');
    card.classList.add('card');

    var photo = document.createElement('div');
    photo.classList.add('photo');
    var image = document.createElement('img');
    image.src = 'student_photo.jpg'; // Replace with the path to the student photo
    photo.appendChild(image);

    var details = document.createElement('div');
    details.classList.add('details');
    var nameElement = document.createElement('p');
    nameElement.classList.add('name');
    nameElement.innerText = 'Name: ' + result.name;
    details.appendChild(nameElement);

    card.appendChild(photo);
    card.appendChild(details);
    resultsContainer.appendChild(card);
  }
}
