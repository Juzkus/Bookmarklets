javascript:(function(){

  let wooted = {}; 
  
  setInterval(function(){ 
    if (wooted[song._id] == true) {
      return;
    } 
    else{ 
      document.querySelector('.awesome-button').click(); wooted[song._id] = true; 
    }
  }, 1000);

})();
