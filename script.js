let names = ["Rachel", "Ross", "Monica", "Phoebe", "Chandler", "Joey", "Gunther", "Smelly Cat", "Naked Neighbor"]
let inputName = document.querySelector(".field")
let waitinglist = document.querySelector(".waitinglist")

let addNames = function () {
    if (inputName.value !== "") {
        waitinglist.appendChild(document.createElement("hr"))
      let member = waitinglist.appendChild(document.createElement("p"));
      member.innerText = inputName.value;
    }
    inputName.value = "";
  };

  