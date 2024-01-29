const quotes = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" },
    { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "To live is the rarest thing in the world. Most people exist, that is all.", author: "Oscar Wilde"},
    { text: "That it will never come again is what makes life so sweet.", author: "Emily Dickinson"},
    { text: "It is never too late to be what you might have been.", author: " George Eliot"},
    { text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson"},
    { text: "Be kind, for everyone you meet is fighting a hard battle.", author: " Plato"},
    { text: "We are all broken, that's how the light gets in.", author: "Ernest Hemingway"}
  ];
  
  const quoteContainer = document.getElementById('quote-container');
  const quoteText = document.getElementById('quote-text');
  const authorText = document.getElementById('author');
  const newQuoteBtn = document.getElementById('new-quote-btn');
  
  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }
  
  function displayQuote() {
    const { text, author } = getRandomQuote();
    quoteText.textContent = `"${text}"`;
    authorText.textContent = `- ${author}`;
  }
  
  newQuoteBtn.addEventListener('click', displayQuote);
  
  // Initial quote display
  displayQuote();
  
