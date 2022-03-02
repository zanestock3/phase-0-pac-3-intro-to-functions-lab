function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string){
    var lowercase = "I can't hear you!";
    var uppercase = "YES INDEED!";
    var equal = "I would love to!";
    if (string.toLowerCase(string) === string) {
      return lowercase;
    }
    else if (string.toUpperCase(string) === string) {
      return uppercase;
    }
    else if ("Let's have dinner together!" === string) {
      return equal;
    }
  }