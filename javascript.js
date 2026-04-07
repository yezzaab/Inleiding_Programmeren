/*
Niet vergeten Comments te maken en linkjes van bronnen
binnen de comments toe te voegen.

Wat de functie doet en waar je hem vandaan haalt
*/

console.log("De website start");

document.addEventListener("DOMContentLoaded", function() {

  // Naam invoer
  document.getElementById('submitButton').addEventListener('click', function() {
    let name = document.getElementById('nameInput').value;
    document.getElementById('displayName').textContent = 'De ' + name + ' look!';
  });

  // Lippen
  const lippenImgs = [
    "images/lipsTransparant.png",
    "images/lipsTransparant2.png",
    "images/lipsTransparant3.png"
  ];

  //index laat zien welke van de afbeeldingen in de array actief is.
  let lippenIndex = 0;
  const lippen = document.getElementById("toggleLippen");
  const zoneLippen = document.querySelector(".lippen");

  //modulo zorgt ervoor dat als hij voorbij alle afbeeldingen is hij weer terug gaat naar 0. De src update de afbeelding naar de nieuwe aangevraagde. https://www.w3schools.com/js/js_arithmetic.asp
  zoneLippen.addEventListener("click", function() {
    lippenIndex = (lippenIndex + 1) % lippenImgs.length;
    lippen.src = lippenImgs[lippenIndex];
  });

  // Blush
  const blushImgs = [
    "images/blushTransparant.png",
    "images/blushTransparant2.png",
    "images/blushTransparant3.png"
  ];
  

  let blushIndex = 0;
  const blush = document.getElementById("toggleBlush");
  const zoneBlush = document.querySelector(".blush");

  zoneBlush.addEventListener("click", function() {
    blushIndex = (blushIndex + 1) % blushImgs.length;
    blush.src = blushImgs[blushIndex];
  });

  // Oogschaduw
  const oogschaduwImgs = [
    "images/schaduwTransparant.png",
    "images/schaduwTransparant2.png",
    "images/schaduwTransparant3.png"
];

  let oogIndex = 0;
  const oogschaduw = document.getElementById("toggleOogschaduw");
  const zoneOog = document.querySelector(".oogschaduw");

  zoneOog.addEventListener("click", function() {
    oogIndex = (oogIndex + 1) % oogschaduwImgs.length;
    oogschaduw.src = oogschaduwImgs[oogIndex];
  });

  // Haar/Klaar
const haar = document.getElementById("toggleHaar");
const klaarKnop = document.querySelector("#finishButton");

klaarKnop.addEventListener("click", function() {
  haar.style.display = "block";
});
  

});