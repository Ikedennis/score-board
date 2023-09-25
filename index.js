let home = 0;
let guest = 0;
let guestEl = document.getElementById("guest-score");
let guestValue = guestEl.value;
let homeEl = document.getElementById("home-score");
let homeValue = homeEl.value;
let btnEl = document.getElementById("btn-el");
let winEl = document.getElementById("win-el");
let guestOne = document.getElementById("guest-one");
let guestTwo = document.getElementById("guest-two");
let guestThree = document.getElementById("guest-three");
let homeOne = document.getElementById("home-one");
let homeTwo = document.getElementById("home-two");
let homeThree = document.getElementById("home-three");
homeEl.textContent = home;
guestEl.textContent = guest;
console.log(typeof home)



homeOne.addEventListener("click", function () {
  addHome(1);
});

homeTwo.addEventListener("click", function () {
  addHome(2);
});
homeThree.addEventListener("click", function () {
  addHome(3);
});
guestOne.addEventListener("click", function () {
  addGuest(1);
});

guestTwo.addEventListener("click", function () {
  addGuest(2);
});
guestThree.addEventListener("click", function () {
  addGuest(3);
});
winner()
btnEl.addEventListener("click", function () {
  homeEl.textContent = 0;
  guestEl.textContent = 0;
  home = 0;
  guest = 0;
  winner()
});


function addHome(b) {
  home += b;
  homeEl.textContent = home;
  winner()
 
}

function addGuest(b) {
  guest += b;
  guestEl.textContent = guest;
  winner()
}

function winner(){

  if (home > guest) {
    winEl.textContent = "Home is winning"
  } else if (guest > home) {
    winEl.textContent = "Guest is winning"
  } else if (home === guest){
    winEl.textContent = "DRAW"
  }
}




