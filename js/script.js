
/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/***
this is my array of quotes
***/
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
    citation : "Slaying the Dragon: Imposter Syndrome"
  },
  {
    quote : "If we could change ourselves, the tendencies in the world would also change. As a man changes his own nature, so does the attitude of the world change towards him. ... We need not wait to see what others do.",
    source: "Mohandas Gandhi",
    year : 1913
  },
  {
    quote : "I can accept failure, everyone fails at something. But I can’t accept not trying. ",
    source: "Michael Jordan ",
    year : 1996
  },
  {
    quote : "Remembering you are going to die is the best way I know to avoid the trap of thinking you have something to lose. You are already naked. There is no reason not to follow your heart. ",
    source: "Steve Jobs",
    year : 2005
  }
]
// print quotes to log
for (var i in quotes){
  console.log(i,": ", quotes[i]);
}


/***
 Create the `getRandomQuote` function to:
  - Create a variable to
  - Use the random number to `return` a random quote object from the `quotes` array. === randomQuote
***/

function getRandomQuote() {
  //store a random number as rand
let rand = Math.floor(Math.random() * quotes.length);
let randomQuote = quotes[rand];
// returns randoly selected quote 
return  randomQuote;
console.log(quotes.join(" ;"));
}
getRandomQuote();




/***
This function grab random quote
Print to the screen
Change thebackground color
  - Set the `innerHTML` of the `quote-box` div to the HTML string.
***/
let html = " ";

function printQuote() {
  let randQuote = getRandomQuote();
  let quote = randQuote.quote;
  
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
  randomBackgroundColor();
  print(html);
  }



  function print(html) {
  let quoteBoxDiv = document.getElementById('quote-box');
      quoteBoxDiv.innerHTML = html;
  }


  // random background color generator
function randomBackgroundColor() {
  //get red color
  let r = Math.floor(Math.random() * 255);	
  // get green color
  let g = Math.floor(Math.random() * 255);
  // get blue color
  let b = Math.floor(Math.random() * 255);	
  // set background color	varaible
  let backColor = " rgb(" + r + ", " + g + ", " + b + ")";
  console.log(backColor);
  
  document.getElementById('quote-box').style.backgroundColor = backColor;
     }
  

function change() {
  var intervalNum = setInterval(printQuote,10000);
  }
  
  
change();


/***
 When the "Show another quote" button is clicked, the event listener
 below will be triggered, and it will call, or "invoke", the `printQuote`
 function. So do not make any changes to the line of code below this
 comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
