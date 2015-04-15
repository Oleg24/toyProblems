function humanReadable(seconds) {
  // TODO
  var hours, minutes, sec;

  function getHours(seconds){
    if(seconds > 3599){
      if((seconds / 3600) > 9){
        hours = Math.floor(seconds/3600);
      } else {
        hours = Math.floor(seconds/3600);
        hours = "0"+hours.toString();
      }
    } else {
      hours = "00";
    }
  }

  function getMins(seconds){
    if(seconds >= 60){
        if(hours > 0){
          if(seconds%3600===0){
            minutes ="00";
          } else {
            minutes = Math.floor((seconds - hours*3600)/60);
          } 
        } else if (seconds/60 >= 10){
            minutes = Math.floor(seconds/60);
          } else {
            minutes = "0"+Math.floor(seconds/60).toString();
          }
      } else {
        minutes = "00";
      }
  }
  function getSeconds(seconds){
    if(seconds > 0){
      if(hours > 0 || minutes > 0){
        if((seconds - hours*3600 - minutes*60) < 10){
          sec = "0"+ (seconds - hours*3600 - minutes*60).toString();
        } else {
          sec = seconds - hours*3600 - minutes*60;
        }
      } else if (seconds > 10){
        sec = seconds;
      } else {
        sec = "0"+seconds.toString();
      }
    } else {
      sec = "00"
    } 
  }
  getHours(seconds);
  getMins(seconds);
  getSeconds(seconds)
  return hours+":"+minutes+":"+sec;
  }