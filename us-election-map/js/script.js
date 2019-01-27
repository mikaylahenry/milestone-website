var createPolitician = function(name, partyColor)
{
  var politician = {};
  politician.name = name;
  politician.partyColor = partyColor;
  politician.electionResults = null;
  politician.totalVotes = 0;
  politician.tallyUpTotalVotes = function()
  {
    this.totalVotes = 0;
    for (var i = 0; i < this.electionResults.length; i++)
    {
      this.totalVotes = this.totalVotes + this.electionResults[i];
    }
  };
  return politician;
};
var cindy = createPolitician("Cindy Mayhem", [132, 17, 11]);
var jack = createPolitician("Jack Conner", [245, 141, 136]);


cindy.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];
jack.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

cindy.electionResults[9]=1;
jack.electionResults[9]=28;
cindy.electionResults[4]=17;
jack.electionResults[4]=38;
cindy.electionResults[43]=11;
jack.electionResults[43]=27;

var setStateResults = function(state) {
  theStates[state].winner = null;
  if (cindy.electionResults[state] > jack.electionResults[state]) {
    theStates[state].winner = cindy;
  }
  else if (cindy.electionResults[state] < jack.electionResults[state]) {
    theStates[state].winner = jack;
  }

  var stateWinner = theStates[state].winner;
  if (stateWinner !== null) {
    theStates[state].rgbColor = stateWinner.partyColor;
  }
  else {
    theStates[state].rgbColor = [11, 32, 57];
  }

  var stateInfoTable = document.getElementById("stateResults");
  var header = stateInfoTable.children[0].children[0];
  var stateName = header.children[0];
  var abbrev = header.children[1];
  var name1 = stateInfoTable.children[1].children[0];
  var politicianName1 = name1.children[0];
  var politicianResults1 = name1.children[1];
  var name2 = stateInfoTable.children[1].children[1];
  var politicianName2 = name2.children[0];
  var politicianResults2 = name2.children[1];
  var winnerName = stateInfoTable.children[1].children[2];
  var winnerName1 = winnerName.children[1];
  stateName.innerText = theStates[state].nameFull;
  abbrev.innerText = "(" + theStates[state].nameAbbrev + ")";
  politicianName1.innerText = cindy.name;
  politicianName2.innerText = jack.name;
  politicianResults1.innerText = cindy.electionResults[state];
  politicianResults2.innerText = jack.electionResults[state];
  if (theStates[state].winner === null) {
    winnerName1.innerText = "Draw";
  }
  else {
    winnerName1.innerText = stateWinner.name;
  }
};

cindy.tallyUpTotalVotes();
jack.tallyUpTotalVotes();

console.log(cindy.totalVotes);
console.log(jack.totalVotes);

var winner = "Unknown";
  if (cindy.totalVotes > jack.totalVotes) {
      winner = cindy.name;
    }
  else if (cindy.totalVotes < jack.totalVotes) {
      winner = jack.name;
  }
  else {
    winner = "Tie";
  };


  var countryResults = document.getElementById("countryResults");
  countryResults.children[0].children[0].children[0].innerText = cindy.name;
  countryResults.children[0].children[0].children[1].innerText = cindy.totalVotes;
  countryResults.children[0].children[0].children[2].innerText = jack.name;
  countryResults.children[0].children[0].children[3].innerText = jack.totalVotes;
  countryResults.children[0].children[0].children[5].innerText = winner;
