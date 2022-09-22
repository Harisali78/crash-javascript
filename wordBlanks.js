function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  var result = "";
  result += "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb;
  return result;
}
console.log(wordBlanks("dog", "big", "runs", "quickly"));
console.log(wordBlanks("cat", "small", "runs", "slowly"));
