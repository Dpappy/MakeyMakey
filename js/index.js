// Stuff Before Event

$('html').keypress( function(e){
  
  if (e.keyCode === 32) {
   
    // Stuff During Event
   console.log(e.keyCode);
    
  }
  
  // Stuff After Event
  
});