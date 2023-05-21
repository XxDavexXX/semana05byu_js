var currentDate2 = new Date();

var dayOfWeek;

dayOfWeek = currentDate2.getDay();

var message;

if (dayOfWeek >= 1 && dayOfWeek <= 5) {
  message = 'Hang in there!';
} else {
  message = 'Woohoo! It is the weekend!';
}

console.log(message);    

var currentDate3 = new Date();

var dayOfWeek = currentDate3.getDay();

var message;

switch (dayOfWeek) {
  case 0:
    message = 'Sunday';
    break;
  case 1:
    message = 'Monday';
    break;
  case 2:
    message = 'Tuesday';
    break;
  case 3:
    message = 'Wednesday';
    break;
  case 4:
    message = 'Thursday';
    break;
  case 5:
    message = 'Friday';
    break;
  case 6:
    message = 'Saturday';
    break;
  default:
    message = 'Invalid day';
    break;
}

console.log(message);

var currentDate3 = new Date();

var dayOfWeek = currentDate3.getDay();

var message1;
var message2;

switch (dayOfWeek) {
  case 0:
    message1 = 'Sunday';
    message2 = 'Enjoy your day off!';
    break;
  case 1:
    message1 = 'Monday';
    message2 = 'Hang in there!';
    break;
  case 2:
    message1 = 'Tuesday';
    message2 = 'Stay motivated!';
    break;
  case 3:
    message1 = 'Wednesday';
    message2 = 'Youre halfway through the week!';
    break;
  case 4:
    message1 = 'Thursday';
    message2 = 'Almost there, keep going!';
    break;
  case 5:
    message1 = 'Friday';
    message2 = 'Woohoo! Its the weekend!';
    break;
  case 6:
    message1 = 'Saturday';
    message2 = 'Enjoy your weekend!';
    break;
  default:
    message1 = 'Invalid day';
    message2 = 'Error: Invalid day';
    break;
}

document.getElementById('message1').textContent = message1;
document.getElementById('message2').textContent = message2;

var templeList = [];

function output(temples) {
  var templesContainer = document.getElementById('temples');
  templesContainer.innerHTML = '';

  temples.forEach(function (temple) {
    // Create HTML elements
    var article = document.createElement('article');
    var h3 = document.createElement('h3');
    var h4Location = document.createElement('h4');
    var h4Dedicated = document.createElement('h4');
    var img = document.createElement('img');

    h3.textContent = temple.templeName;
    h4Location.textContent = 'Location: ' + temple.location;
    h4Dedicated.textContent = 'Dedicated: ' + temple.dedicated;
    img.src = temple.imageUrl;
    img.alt = temple.templeName;

    article.appendChild(h3);
    article.appendChild(h4Location);
    article.appendChild(h4Dedicated);
    article.appendChild(img);

    templesContainer.appendChild(article);
  });
}

async function getTemples() {
  try {
    var response = await fetch('https://byui-cse.github.io/cse121b-course/week05/temples.json');
    templeList = await response.json();
    output(templeList);
  } catch (error) {
    console.log('Error fetching temple data:', error);
  }
}

getTemples();

function reset() {
  var templesContainer = document.getElementById('temples');
  templesContainer.innerHTML = ''; 
}

function sortBy() {
  reset(); 
  var sortByValue = document.getElementById('sortBy').value;

  switch (sortByValue) {
    case 'nameAsc':
      templeList.sort(function (a, b) {
        return a.templeName.localeCompare(b.templeName);
      });
      break;
    case 'nameDesc':
      templeList.sort(function (a, b) {
        return b.templeName.localeCompare(a.templeName);
      });
      break;
    case 'locationAsc':
      templeList.sort(function (a, b) {
        return a.location.localeCompare(b.location);
      });
      break;
    case 'locationDesc':
      templeList.sort(function (a, b) {
        return b.location.localeCompare(a.location);
      });
      break;
    case 'dedicatedAsc':
      templeList.sort(function (a, b) {
        return a.dedicated.localeCompare(b.dedicated);
      });
      break;
    case 'dedicatedDesc':
      templeList.sort(function (a, b) {
        return b.dedicated.localeCompare(a.dedicated);
      });
      break;
    default:
      break;
  }

  output(templeList);
}
document.getElementById('sortBy').addEventListener('change', sortBy);


