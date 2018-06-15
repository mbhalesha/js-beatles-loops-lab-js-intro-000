function theBeatlesPlay(musicians, instruments) {
  var players = [];
  for (var i = 0; i < musicians.length; i++) {
    players.push(musicians[i] + " plays " + instruments[i]);
  }
  return players;
}

<<<<<<< HEAD
function johnLennonFacts(facts) {
=======
function johnLennonFacts(){
  var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
>>>>>>> 2773a421208ff930bbe947e9e6990490140080e5
  var newFacts = [];
  var i = 0;
  while  (i < facts.length) {
    newFacts.push(facts[i] + "!!!")
    i++;
  }
  return newFacts;
<<<<<<< HEAD
}

function iLoveTheBeatles(number) {
  var group = [];
  do {
    group.push("I love the Beatles!");
    number++;
  } while (number < 15);
  return group;
=======
>>>>>>> 2773a421208ff930bbe947e9e6990490140080e5
}