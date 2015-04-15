function rps(rounds){
  var rounds = rounds || 3;
  var results = [];
  var itemsPlayed = [];
  var plays = ["rock", "paper", "scissors"];
  function combos(roundsRemaining){
    // set up a base case 
    // if roundremaining is 0
      // push the items played to the results array
      // return 
    if(roundsRemaining === 0){
      results.push(itemsPlayed.slice());
      console.log(results);
      return;
    }
    // iterate through the plays
      // push each play to the items played array 
      // then recurse over the other options with one less round
      // pop that combo out of itemsPlayed
    for(var i = 0; i < plays.length; i++){
      itemsPlayed.push(plays[i]);
      combos(roundsRemaining-1);
      itemsPlayed.pop();
    }
  }
  combos(rounds);
  return results;
}