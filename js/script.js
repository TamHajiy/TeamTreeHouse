/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
//Array of objects
const quotes = [
  {
    quote:'Be yourself; everyone else is already taken.', 
    source:'Oscar Wilde'
  },
  {
    quote:'Be the change that you wish to see in the wolrd.', 
    source:'Mahtma Gandhi',
    tags: 'Spiritual Leader'
  },
  {
    quote:'Without music, life would be a mistake.', 
    source: 'Friedrich Nietzsche', 
    citation:'Twilight of the Idols'
  },
  {
    quote:'You pray for rain, you gotta deal with the mud too. That is a part of it', 
    source:'Denzel Washington',
    year:2014
  },
  {
    quote:'Life is really simple, but men insist on making it complicated',
    source:'Confucius'
  }
]

// create `getRandomQuote` function to get random quotes from array
function getRandomQuote (arr) {
  //get random item from array. Instead of number use length of an array
  let randomNum  = Math.floor(Math.random() * arr.length);
  let arrObj = arr[randomNum]
    return arrObj
}
//call the function 
// console.log(getRandomQuote(quotes))


// create `printQuote` function to print the quotes on a page with all the keys

function printQuote () {

  let rndmQuote = getRandomQuote(quotes)
  
  //variable to store future string
  let message = ''
      message += `<p class= "quote"> ${rndmQuote.quote} </p>`
      message += `<p class= "source"> ${rndmQuote.source}`
    
    //if statement to check if the quote has a citation
    if(rndmQuote.citation !== undefined){
      message += `<span class= "citation"> ${rndmQuote.citation} </span>`
  }
   //if statement to check if the quote has a tag
   if(rndmQuote.tags !== undefined){
    message += `<span class= "tags"> ${rndmQuote.tags} </span>`
}
  //if statement to check if the quote has a year
    if(rndmQuote.year !== undefined){
      message += `<span class= "year"> ${rndmQuote.year} </span>`
  }
      message += `</p>`

  document.getElementById('quote-box').innerHTML = message;
  
}


// }, 1000)
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);