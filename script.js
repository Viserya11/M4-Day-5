//let names = ["Rachel", "Ross", "Monica", "Phoebe", "Chandler", "Joey", "Gunther", "Smelly Cat", "Naked Neighbor"]
let inputName = document.querySelector(".field")
let waitinglist = document.querySelector(".waitinglist")
let content = waitinglist.querySelector("p");
let teamcards = document.querySelector(".hidingit")

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
  