//let names = ["Rachel", "Ross", "Monica", "Phoebe", "Chandler", "Joey", "Gunther", "Smelly Cat", "Naked Neighbor"]
let inputName = document.querySelector(".field")
let waitinglist = document.querySelector(".waitinglist")
let content = waitinglist.querySelector("p");
let teamcards = document.querySelector(".hidingit")
let teamnumber = document.querySelector(".numfield")
let increaseWith = 1;
let decreaseWith = 1;
let namecontainer = document.querySelector(".teamnamecontainer")
let teamscontainer = document.querySelector(".doneteamcontainer")
let teamcard = document.querySelector(".doneteam")

//selects the text input, assigning a new name and hr to the container 
let addNames = function () {
    if (inputName.value !== "") {
        
      let member = waitinglist.appendChild(document.createElement("p"));
      member.innerText = inputName.value;
      member.className = "names";
      waitinglist.appendChild(document.createElement("hr"))
    }
    inputName.value = "";
  };

 
// increases the value of the number input with the previously declared variable
  let increaseTeams = () => {
     value = parseInt(teamnumber.value);
     value += increaseWith;
     teamnumber.value = value;
     let teamnames = teamscontainer.appendChild(document.createElement("h2"))
    teamnames.innerHTML = "Team " + teamnumber.value;
     let teamcards = teamnames.appendChild(document.createElement("div"))
     teamcards.className = "doneteam";
     let names = teamcards.appendChild(document.createElement("p"))
    names.innerHTML = "names"
    names.className = "teamname"
    names.appendChild(document.createElement("hr"))


}
  // decreases the value of the number input with the previously declared variable
let decreaseTeams = () => {
  value = parseInt(teamnumber.value);
  value -= decreaseWith;
  teamnumber.value = value;
  teamscontainer.lastChild.remove();
  
}
  
 //removes the assigned values
 let resetNames = function () {
  waitinglist.innerHTML = "";
  teamscontainer.innerHTML = "";
  teamnumber.value = 1;
}