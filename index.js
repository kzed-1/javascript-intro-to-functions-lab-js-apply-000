function shout(string){
  return string.toUpperCase();
}


function whisper(string){
  return string.toLowerCase();
}


//function logShout(string){
// var spy = string.toUpperCase();
//  console.log(`${spy}`);
//}

function logWhisper(string){
  var spy = string.toLowerCase();
  console.log(`${spy}`);
}

function sayHiToGrandma(string){
  var spy = string;
  if (spy.toLowerCase() === spy){
    return "I can't hear you!";
  }else if (spy === "I love you, Grandma.") {
    return "I love you, too.";
  }else{
    return "YES INDEED!";
  }
}






function shout(string){
  return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase();
}

function logShout(string){
  console.log(string.toUpperCase());
}