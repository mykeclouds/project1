/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
Aiming for Exceeds Expectations Grade
******************************************/

// this is my array of quotes
const quotes = [ 

  {
    quote: "what",
    source: "who",
    year: 2019,
    citation: "where",
    tag: "Humor"
  } ,
  {
    quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    source: "Albert Einstein",
    tag: "Humor"
  },
  {
    quote: "I always wanted to be somebody, but now I realize I should have been more specific.",
    source: "Lily Tomlin",
    tag: "Humor"
  },
  {
    quote: "All you need in this life is ignorance and confidence, and then success is sure",
    source: "Mark Twain",
    tag: "Humor"
  },
  {
    quote : "Technology is changing at a ridiculous pace, and while you might feel like you’re the only person falling behind, the truth is no one person is on top of it all. ",
    source: "Emily Schweiss",
    year : 2017,
    citation : "Slaying the Dragon: Imposter Syndrome",
    tag: "Inspire"
  },
  {
    quote : "If we could change ourselves, the tendencies in the world would also change. As a man changes his own nature, so does the attitude of the world change towards him. ... We need not wait to see what others do.",
    source: "Mohandas Gandhi",
    year : 1913,
    tag: "Inspire"
  },
  {
    quote : "I can accept failure, everyone fails at something. But I can’t accept not trying. ",
    source: "Michael Jordan ",
    year : 1996,
    tag: "Inspire"
  },
  {
    quote : "Remembering you are going to die is the best way I know to avoid the trap of thinking you have something to lose. You are already naked. There is no reason not to follow your heart. ",
    source: "Steve Jobs",
    year : 2005,
    tag: "Inspire"
  }
]

// print quotes to log
for (var i in quotes){
  console.log(i,": ", quotes[i]);
}

// this selects random quote from quotes array
function getRandomQuote() {
  //store a random number as rand
let rand = Math.floor(Math.random() * quotes.length);
let randomQuote = quotes[rand];
// returns randomly selected quote 
return  randomQuote;
}

// This function grab a random quote and prints to the screen with new background color
function printQuote() {
  // reset html string to hold quote
  let html = " ";
  let randQuote = getRandomQuote();
  let quote = randQuote.quote;
  // set quote printout
  html += '<p class="quote">'+ quote + "</p>";
  html += '<p class="source">' + randQuote.source ;
  //checks for the citation property 
  if (randQuote.citation)
    {
      // adds citation if available
      let citation = randQuote.citation;
      html += '<span class="citation">' + citation + "</span>" ;
    } 
  //checks for the year property 
  if (randQuote.year) {
    // adds year if available
      let year = randQuote.year;
      html += '<span class="year">' + year + "</span>";
    } 
    // Adds tag to quote printout
  html += '<span class="citation">' + randQuote.tag + "</span>";
   //Closes printout
   html += " </p>";

//changes backgorund color before printing quote
  randomQuoteBackColor(); 
  randomBackgroundColor();
  print(html);
  }

function print(message) {
  let quoteBoxDiv = document.getElementById('quote-box');
      quoteBoxDiv.innerHTML = message;
  }

  // random background color generator
function randomQuoteBackColor() {
  //get red color
  let r = Math.floor(Math.random() * 255);	
  // get green color
  let g = Math.floor(Math.random() * 255);
  // get blue color
  let b = Math.floor(Math.random() * 255);	
  // set background color	varaible
  let quoteColor = " rgb(" + r + ", " + g + ", " + b + ")";
  /**  logs color to console
   console.log(quoteColor);
  **/
  document.getElementById('quote-box').style.backgroundColor = quoteColor;
     }

  function randomBackgroundColor() {
  //get red color
  let r = Math.floor(Math.random() * 255);	
  // get green color
  let g = Math.floor(Math.random() * 255);
  // get blue color
  let b = Math.floor(Math.random() * 255);	
  // set background color	varaible
  let backColor = " rgb(" + r + ", " + g + ", " + b + ")";
    /**  logs color to console
   console.log(backColor);
  **/
  
  document.body.style.backgroundColor = backColor;
     }
  
  
function change() {
  var intervalNum = setInterval(printQuote,20000);
  }
  
change();


/***
sets button to reprint quote
***/
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
