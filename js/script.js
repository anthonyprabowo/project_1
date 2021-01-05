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

/*** 
 * `quotes` array 
***/

const quotes = [
  {
    quote: "You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.",
    author: "Dr. Suess",
    year: "",
    tags: "",
    color: "#011f4b"
  },
  {
    quote: "You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth",
    author: "William W. Purkey",
    year: "",
    tags: "inspirational",
    color: "#251e3e"
  },
  {
    quote: "To live is the rarest thing in the world. Most people exist, that is all.",
    author: "Oscar Wilde",
    year: "",
    tags: "life",
    color: "#451e3e"
  },
  {
    quote: "The flower that blooms in adversity is the rarest and most beautiful of all.",
    author: "Mulan",
    year: 1998,
    tags: "inspiration",
    color: "#854442"
  },
  {
    quote: "Oh yes, the past can hurt. But the way I see it, you can either run from it or learn from it.",
    author: "The Lion King",
    year: 1994,
    tags: "",
    color: "#3b5998"
  },
  {
    quote: "Ohana means family, family means nobody gets left behind.",
    author: "Lilo and Stitch",
    year: 2002,
    tags: "family",
    color: "#6f7c85"
  },
  {
    quote: "Some people are worth melting for.",
    author: "Frozen",
    year: 2013,
    tags: "love",
    color: "#58668b"
  }
]



/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * (quotes.length - 1));
  return quotes[randomNumber]
}



/***
 * `printQuote` function
***/

function printQuote() {
  const quotes = getRandomQuote();
  body.style.backgroundColor = quotes.color;
  quote.innerHTML = quotes.quote;
  source.innerHTML = quotes.author;
  year.innerHTML = quotes.year;
  tag.innerHTML = 'tags: ' + quotes.tags;
}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);