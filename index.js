// Code your solutions in this file
function writeCards(names, event) {
    const thankYouMessages = [];
    
    for (let i = 0; i < names.length; i++) {
      thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    
    return thankYouMessages;
  }
  
  function countDown(num) {
    while (num >= 0) {
      console.log(num);
      num--;
    }
  }