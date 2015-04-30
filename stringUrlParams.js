// Complete the method so that it does the following:
// Removes any duplicate query string parameters from the url
// Removes any query string parameters specified within the 2nd argument (optional array)


// Examples
// stripUrlParams('www.codewars.com?a=1&b=2&a=2') // returns 'www.codewars.com?a=1&b=2'
// stripUrlParams('www.codewars.com?a=1&b=2&a=2', ['b']) // returns 'www.codewars.com?a=1'
// stripUrlParams('www.codewars.com', ['b']) // returns 'www.codewars.com'

function stripUrlParams(url, paramsToStrip){
  var urlObj = getBaseParams(url);
  if(!paramsToStrip){
    var noDups =  removeDuplicatesStrip(urlObj.params);
    if(noDups){
      return urlObj.url+'?'+noDups;
    } else {
      return urlObj.url;
    }
  } else {
    var noDupsandStriped = removeDuplicatesStrip(urlObj.params, paramsToStrip);
    if(noDupsandStriped){
      return urlObj.url+'?'+noDupsandStriped;
    } else {
      return urlObj.url;
    }
  }
}

function removeDuplicatesStrip(queryString, paramsToStrip){
  if(!queryString){
    return '';
  } else if(!paramsToStrip){
    var queryObj = {};
    queryString.split('&').forEach(function(query){
     var arr = query.split('=');
     if(!queryObj[arr[0]]){
       queryObj[arr[0]] = arr[1];
     }
    });
    var queryArr = [];
    for(var key in queryObj){
      queryArr.push(key+'='+queryObj[key]);
    }
    return queryArr.join('&')
  } else {
    var queryObj = {};
    queryString.split('&').forEach(function(query){
     var arr = query.split('=');
     if(!queryObj[arr[0]]){
       queryObj[arr[0]] = arr[1];
     }
    });
    for(var i = 0; i < paramsToStrip.length; i++){
      if(queryObj[paramsToStrip[i]]){
        delete queryObj[paramsToStrip[i]]
      }
    }
    var queryArr = [];
    for(var key in queryObj){
      queryArr.push(key+'='+queryObj[key]);
    }
    return queryArr.join('&')
  }
}

function getBaseParams(url){
  var urlArray = url.split('?');
  var urlObj = {
    url: urlArray[0],
    params: urlArray[1]
  }
  return urlObj;
}