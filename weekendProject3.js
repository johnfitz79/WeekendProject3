
let voters = [];
let democrat_candidates = [];
let republican_candidates = [];
let independent_candidates= [];

class Person{
  constructor(name){
    this.name = name

  }
}
class Voter extends Person {
  constructor(name, ...ideology){
    super(name)
    this.name = name
    this.ideology = ideology;
    // voters.push(voter_1)
  }
}


class Candidate extends Person{
  constructor(name, ideology,...party){
    super(name)
    this.ideology = ideology
    this.party = party
    let votes = 0;


    // this.votes = votes
    // this.ideology = ideology;
    // return this.party;
  }
    pushParty(party){
    if (this.party === "Democrat"){
      democrat_candidates.push(candidate1);
      return democrat_candidates
      // console.log(democrat_candidates);
    }else if (this.party === "Republican"){

      republican_candidates.push(candidate1);
        return republican_candidates
      // console.log(republican_candidates);
    }else{
       independent_candidates.push(candidate1);
       return independent_candidates
      // console.log(independent_candidates);
    }
    }
    // const candidate1 = new Candidate("John", "Republican", 0)

}
// let candidate1 = new Candidate("Republican", 0 , "John Fitz", "Liberal")
const voter_1 = new Voter("John", "Liberal")
voters.push(voter_1)
// console.log(voters);
const candidate1 = new Candidate("Johnathan Fitz", "Liberal", "Independent")
// candidate1.pushParty()
// republican_candidates.push(candidate1)
// console.log(candidate1);
let candidateParty = candidate1.pushParty()
console.log(candidateParty);
// console.log(candidate1.pushParty("Republican"));

// console.log(voter_1);
// console.log(independent_candidates);
// console.log(republican_candidates);
//

let perRep;
let perDem;
let perInd;
function vote (Voter){
  voters.forEach(function(item){
    return this.ideology
});
}
if (this.ideology === "Liberal"){
  perRep = .2
  perInd = .2
  perDem = .6
  return perDem;
  candidate[0].votes++;
  // return this.ideology;
} else if (this.ideology === "Neutral"){
  perRep = .25
  perDem = .25
  perInd = .5
  return perInd;

  // return this.ideology;
}else if(this.ideology = "Conservative"){
  perRep = .6
  perDem = .2
  perInd = .2
  return perRep;
}
vote(voter_1);


$( "Voter" ).submit( ( event ) => {
  console.log("Submitting a form.")
  event.preventDefault();
});

// document.addEventListener('submit', function(evt){
//     evt.preventDefault();
//     document.getElementById('donate').style.display = 'none';
//     document.getElementById('topMessage').style.display = 'none';
// })

// document.addEventListener("DOMContentLoaded", function(){
//
// })
// document.addEventListener("DOMContentLoaded", function(){
// $function(){
//   const url =
// }
// })
