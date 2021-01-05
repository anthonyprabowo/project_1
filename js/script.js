/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * Variable
***/
const body = document.querySelector('body');
const quote = document.querySelector('.quote');
const source = document.querySelector('.source');
const year = document.querySelector('.year');
const tag = document.querySelector('.tags');
const quoteBox = document.querySelector('.quote-box');
let counter = 5; // in seconds
var count = setInterval(countDown, 1000);

/*** 
 * `quotes` array 
***/

const quotes = [
  {
    quote: "You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.",
    author: "Dr. Suess",
    year: "",
    tags: ""
  },
  {
    quote: "You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth",
    author: "William W. Purkey",
    year: "",
    tags: "inspirational"
  },
  {
    quote: "To live is the rarest thing in the world. Most people exist, that is all.",
    author: "Oscar Wilde",
    year: "",
    tags: "life"
  },
  {
    quote: "The flower that blooms in adversity is the rarest and most beautiful of all.",
    author: "Mulan",
    year: "1998",
    tags: "inspiration"
  },
  {
    quote: "Oh yes, the past can hurt. But the way I see it, you can either run from it or learn from it.",
    author: "The Lion King",
    year: "1994",
    tags: ""
  },
  {
    quote: "Ohana means family, family means nobody gets left behind.",
    author: "Lilo and Stitch",
    year: "2002",
    tags: "family"
  },
  {
    quote: "Some people are worth melting for.",
    author: "Frozen",
    year: "2013",
    tags: "love"
  }
]



/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * (quotes.length - 1)); // generate random numbers based on the length of the array
  console.log(randomNumber);
  return quotes[randomNumber] // return the quotes object
}



/***
 * `printQuote` function
***/

function printQuote() {
  clearInterval(count); // clear intervals for every function call
  counter = 5; // reset function
  const quotes = getRandomQuote(); 
  body.style.backgroundColor = getRandomColor();
  quote.innerHTML = quotes.quote;
  if(quotes.year === '') {
    source.innerHTML = quotes.author; // if year is empty, print only the author name
  } else {
    source.innerHTML = quotes.author + '<span class="year">' + quotes.year + '</span>'; // if year is not empty, print the author and year as well
  }

  if(quotes.tags !== '') {
    tag.innerHTML = 'tags: ' + quotes.tags; // if tags is not empty, include the tags
  } else {
    tag.innerHTML = '' // if tag is empty, remove the html inside tags
  }
  count = setInterval(countDown, 1000); // setting a new setInterval
}

function countDown() {
  counter--;
  checkCounter();
}

function checkCounter() {
  if(counter === 0) { // if counter is zero, call printQuote again
    printQuote();
  } else {
    // keep going
  }
}

function getRandomColor() { // generate random color
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]; // get random letter from the letter variable and assign it to color
  }
  return color;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
