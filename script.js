//let names = ["Rachel", "Ross", "Monica", "Phoebe", "Chandler", "Joey", "Gunther", "Smelly Cat", "Naked Neighbor"]
let inputName = document.querySelector(".field")
let waitinglist = document.querySelector(".waitinglist")
let content = waitinglist.querySelector("p");
let teamcards = document.querySelector(".hidingit")
let teamnumber = document.querySelector(".numfield")
let increaseWith = 1;
let decreaseWith = 1;

let addNames = function () {
    if (inputName.value !== "") {
        
      let member = waitinglist.appendChild(document.createElement("p"));
      member.innerText = inputName.value;
      member.className = "names";
      waitinglist.appendChild(document.createElement("hr"))
    }
    inputName.value = "";
  };

  let resetNames = function () {
    waitinglist.innerHTML = "";
    teamcards.innerHTML = "";
  }

  let increaseTeams = () => {
     value = parseInt(teamnumber.value);
     value += increaseWith;
     teamnumber.value = value;
}
  
let decreaseTeams = () => {
  value = parseInt(teamnumber.value);
  value -= decreaseWith;
  teamnumber.value = value;
}
  