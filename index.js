var Chance = require('chance');
var fortune = require('fortune-teller');
var randomWord = require('random-word');
var nlp = require('compromise');
module.exports = {
sqr: function(width, height) {
	var text =fortune.fortune();
	var chance = new Chance();

  // Use Chance here.
  var my_random_string = chance.name();
    var random = randomWord();
    r = nlp(text);
    var p = r.people();
    var nouns = r.nouns()
    console.log("PEOPLE",p.data());
    console.log("NOUNS", nouns.data());
    console.log("TOPICS",r.topics().data());
	return my_random_string + " " + text + " " + random;
}
}