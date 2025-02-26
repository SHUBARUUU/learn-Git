//* Uses document.body... -- to gain control of the body of the HTML File
//? Can use document.querySelector()
//? --as querySelector() are JS method that is flexible and can get CSS selectors and HTML elements.

//? getElementById(), querySelector() = gets the element itself (raw) -- getComputerStyle() = gets the final product (w font style, padding, color, etc..)
//? getElementById(), querySelector(), etc.. -- needs " " because they look for and select a selector name(a String).

document.getElementById("changeBulbFormer").onclick = function () {
  console.log("Button Clicked! OFF!"); //Checks if clicked
  
  document.body.style.backgroundImage =  "url('AnimemesLIGHToff.png')";
  //? But getComputedStyle(), or any of like that method.. -- needs an element reference (From the DOM)
  let bgFormer = getComputedStyle(document.body).backgroundImage;

  //? Using .includes() checkes the if the "AnimemesLIGHToff.png" are INCLUDED in our body (getComputerStyle)
  if (bgFormer.includes("AnimemesLIGHToff.png")) {
    document.getElementById("changeBulbFormer").textContent = "CLICKED!";
    document.getElementById("changeBulb").textContent = "Light ON!";
  }

};

document.getElementById("changeBulb").onclick = function () {
  console.log("Button Clicked! ON!!"); // Still checks
  document.body.style.backgroundImage = "url('AnimemesLIGHTon.png')";
  document.querySelector("#changeBulb").textContent = "CLICKED!";

  let bg = getComputedStyle(document.body).backgroundImage;

  if (bg.includes("AnimemesLIGHTon.png")) {
    document.getElementById("changeBulb").textContent = "CLICKED!";
    document.getElementById("changeBulbFormer").textContent = "Light OFF!";
  }

};
