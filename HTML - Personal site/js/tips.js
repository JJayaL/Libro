const text=document.getElementById("quote");
const author=document.getElementById("author");
const tweetButton=document.getElementById("tweet");

const getNewQuote = async () =>
{
    //api for quotes
    var url=[
      'Set a Schedule',
      'Study at Your Own Pace',
      'Get Some Rest',
      'Silence Your Cell Phone',
      'Create Your Perfect Study Space',
      ' Pick a Study Method That Works for You'
    ];

    // fetch the data from api
    //const response=await fetch(url);
    //console.log(typeof response);
    //convert response to json and store it in quotes array
    //const allQuotes = await response.json();

    // Generates a random number between 0 and the length of the quotes array
    const indx = Math.floor(Math.random()*url.length);

    //Store the quote present at the randomly generated index
    const quote=url[indx];

    //Store the author of the respective quote

    //function to dynamically display the quote and the author
    text.innerHTML=quote;

    //tweet the quote
    tweetButton.href="https://twitter.com/intent/tweet?text="+quote+"";
}
getNewQuote();
