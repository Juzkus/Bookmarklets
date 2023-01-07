javascript:(function(){

  window.wooted = {}; 
  
  setInterval(function(){ 
    if (window.wooted[song._id] == true) {
      return;
    } 
    else{ 
      document.querySelector('.awesome-button').click(); window.wooted[song._id] = true; 
    }
  }, 1000);

})();
