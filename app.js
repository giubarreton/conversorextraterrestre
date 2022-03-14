//Convert weight on the Moon
function convertMoon() {
  var weightEarth = document.getElementById("weightEarth");
  var weightMoon = 0.1631545941;
  var weightEarthValue = Number(weightEarth.value);
  var sum = weightEarthValue * weightMoon;
  document.getElementById("convertedWeight").innerHTML =
    "Você pesaria " + sum.toFixed(2) + "kgs na lua!";
}
//Change background coler when hovering moon
function changeColor() {
  document.getElementById("weightMoon").style.backgroundColor = "pink";
}
function changeColor2() {
  document.getElementById("weightMoon").style.backgroundColor = "white";
}

//Convert weight on Mercury
function convertMercury() {
  var weightEarth = document.getElementById("weightEarth");
  var weightMercury = 0.3772;
  var weightEarthValue = Number(weightEarth.value);
  var sum = weightEarthValue * weightMercury;
  document.getElementById("convertedWeight").innerHTML =
    "Você pesaria " + sum.toFixed(2) + "kgs em Mercúrio!";
}

//change backgroung color hovering mercury
function changeColor3() {
  document.getElementById("weightMercury").style.backgroundColor = "pink";
}
function changeColor4() {
  document.getElementById("weightMercury").style.backgroundColor = "white";
}

//Convert weight on Venus
function convertVenus() {
  var weightEarth = document.getElementById("weightEarth");
  var weightVenus = 0.91;
  var weightEarthValue = Number(weightEarth.value);
  var sum = weightEarthValue * weightVenus;
  document.getElementById("convertedWeight").innerHTML =
    "Você pesaria " + sum.toFixed(2) + "kgs em Vênus!";
}

//change backgroung color hovering venus
function changeColor5() {
  document.getElementById("weightVenus").style.backgroundColor = "pink";
}
function changeColor6() {
  document.getElementById("weightVenus").style.backgroundColor = "white";
}

//Convert weight on Mars
function convertMars() {
  var weightEarth = document.getElementById("weightEarth");
  var weightMars = 0.3783;
  var weightEarthValue = Number(weightEarth.value);
  var sum = weightEarthValue * weightMars;
  document.getElementById("convertedWeight").innerHTML =
    "Você pesaria " + sum.toFixed(2) + "kgs em Marte!";
}

//change backgroung color hovering mars
function changeColor7() {
  document.getElementById("weightMars").style.backgroundColor = "pink";
}
function changeColor8() {
  document.getElementById("weightMars").style.backgroundColor = "white";
}

//Convert weight on Jupiter
function convertJupiter() {
  var weightEarth = document.getElementById("weightEarth");
  var weightJupiter = 2.64;
  var weightEarthValue = Number(weightEarth.value);
  var sum = weightEarthValue * weightJupiter;
  document.getElementById("convertedWeight").innerHTML =
    "Você pesaria " + sum.toFixed(2) + "kgs em Júpiter!";
}

//change backgroung color hovering jupiter
function changeColor9() {
  document.getElementById("weightJupiter").style.backgroundColor = "pink";
}
function changeColor10() {
  document.getElementById("weightJupiter").style.backgroundColor = "white";
}

//convert weight on Saturn
function convertSaturn() {
  var weightEarth = document.getElementById("weightEarth");
  var weightSaturn = 1.15;
  var weightEarthValue = Number(weightEarth.value);
  var sum = weightEarthValue * weightSaturn;
  document.getElementById("convertedWeight").innerHTML =
    "Você pesaria " + sum.toFixed(2) + "kgs em Saturno!";
}

//change backgroung color hovering saturn
function changeColor11() {
  document.getElementById("weightSaturn").style.backgroundColor = "pink";
}
function changeColor12() {
  document.getElementById("weightSaturn").style.backgroundColor = "white";
}

//convert weight on Uranus
function convertUranus() {
  var weightEarth = document.getElementById("weightEarth");
  var weightUranus = 1.17;
  var weightEarthValue = Number(weightEarth.value);
  var sum = weightEarthValue * weightUranus;
  document.getElementById("convertedWeight").innerHTML =
    "Você pesaria " + sum.toFixed(2) + "kgs em Urano!";
}

//change backgroung color hovering uranus
function changeColor13() {
  document.getElementById("weightUranus").style.backgroundColor = "pink";
}
function changeColor14() {
  document.getElementById("weightUranus").style.backgroundColor = "white";
}

//convert weight on Neptune
function convertNeptune() {
  var weightEarth = document.getElementById("weightEarth");
  var weightNeptune = 1.18;
  var weightEarthValue = Number(weightEarth.value);
  var sum = weightEarthValue * weightNeptune;
  document.getElementById("convertedWeight").innerHTML =
    "Você pesaria " + sum.toFixed(2) + "kgs em Netuno!";
}

//change backgroung color hovering neptune
function changeColor15() {
  document.getElementById("weightNeptune").style.backgroundColor = "pink";
}
function changeColor16() {
  document.getElementById("weightNeptune").style.backgroundColor = "white";
}

//fontes: https://www.unitconverters.net/force/newtons-to-kg.htm e https://recreio.uol.com.br/noticias/planetario/qual-seria-o-seu-peso-em-outros-planetas.phtml
