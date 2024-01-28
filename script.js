const quotes = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" },
    { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" }
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
  