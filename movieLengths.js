// Users on longer flights like to start a second movie right when their first one ends, but they complain that the plane usually lands before they can see the ending. So you're building a feature for choosing two movies whose total runtimes will equal the exact flight length.

// Write a function that takes an integer flight_length (in minutes) and an array of integers movie_lengths (in minutes) and returns a boolean indicating whether there are two numbers in movie_lengths whose sum equals flight_length.

// When building your function:

// Assume your users will watch exactly two movies
// Don't make your users watch the same movie twice
// Optimize for runtime over memory

// O(n^2)

function movieSelect(flightTime, movie_lengths){
  var works = false;
  var currentMovies = 0;
  function recurse(timeRemaining, j){
    if(timeRemaining === 0){
      return works = true;
    } else if (timeRemaining > 0 && currentMovies === 2){
      return;
    } else if( timeRemaining < 0){
      return;
    }
    for(var i = j; i < movie_lengths.length; i++){
      currentMovies++;
      j = i+1;
      recurse(timeRemaining - movie_lengths[i], j);
      recurse(timeRemaining, ++j);
    }
  }
  recurse(flightTime, 0);
  return works; 
}

// 0(2n)

function movieSelect(flightTime, movie_lengths){
  var timeRemaining = flightTime;
  var currentMovies = 0;
  var movieObj = {};
  for(var i = 0; i < movie_lengths.length; i++){
    movieObj[movie_lengths[i]] = i;
  }
  for(var i = 0; i < movie_lengths.length; i++){
    timeRemaining -= movie_lengths[i];
    if(movieObj.hasOwnProperty(timeRemaining)){
      if(movieObj[timeRemaining] !== i){
        return true; 
      }
    } else {
      timeRemaining += movie_lengths[i];
    }
  }
  return false;
}

var flightTime = 124;
var movies = [68, 44, 80, 100];