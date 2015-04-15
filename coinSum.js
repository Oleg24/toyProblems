/*
In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:
1p piece
2p piece
5p piece
10p piece
20p piece
50p piece
1 euro (100p)
2 euro (200p)

It is possible to make £2 in the following way:
1 * £1 + 1 * 50p + 2 * 20p + 1 * 5p + 1 * 2p + 3 * 1p

How many different ways can £2 be made using any number of coins?
example usage of `makeChange`:
// aka, there's only one way to make 1p. that's with a single 1p piece
makeChange(1) === 1
// aka, there's only two ways to make 2p. that's with two, 1p pieces or with a single 2p piece
makeChange(2) === 2
*/

var currency = [
  ['1p', 1],
  ['2p', 2],
  ['5p', 5],
  ['10p', 10],
  ['20p', 20],
  ['50p', 50],
  ['1euro', 100],
  ['2euro',200]
];

function coinSum(total){
  var results = [];
  var currentAttempt = [];
  var remainingSum = total;

  function check(remainingSum){
    if(remainingSum === 0){
      results.push(currentAttempt.slice());
      return;
    } else if(remainingSum < 0){
      return;
    } else {
      for(var i = 0; i < currency.length; i ++){
        currentAttempt.push(currency[i]);
        check(remainingSum-currency[i][1]);
          currentAttempt.pop();
      }
    }
  }
  check(total);
  return results;
}











var makeChange = function(total){
  var solutions = 0;

  function greedySolution(total, lvl, coins){
    var lvl = lvl || 0;
    var coins = coins || 0;
    
    if(coins === 0 && total - currency[lvl][1] < 0){
      return solutions;
    }

    for(var i = lvl; i < currency.length; i++){
      total -= currency[i][1];
      console.log('total after the subtraction', total);
      if(total === 0){
        console.log('total should be zero '+ total);
        ++solutions;
        return greedySolution(total, ++lvl, 0);
      } else if (total - currency[i][1] > 0){
        console.log('total is still about zero '+ total);
        lvl = 0;
        return greedySolution(total, lvl, ++coins);
      } else if(total - currency[i][1] < 0){
        console.log('total is less than zero');
        return solutions;
      }
    }
    // outside of while
  }
  return greedySolution(total);

};

/////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////

var makeChange = function(total){
/* START SOLUTION */
  var output = 0;
  var denominations = [1, 2, 5, 10, 20, 50, 100, 200];

  (function recurse (index, total) {
    var currentDenomination = denominations[index];
    if (index === 0) {
      // support a lowest currency that is not 1
      total % currentDenomination === 0 && output++;
      return
    }
    while (total >= 0) {
      recurse(index-1, total);
      total -= currentDenomination;
    }
  })(denominations.length-1, total);

  return output;
/* END SOLUTION */
};

