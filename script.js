var score = document.getElementById("score");
var amongusnum = 0;
var amongusMultiplier = 1.7;
var clicknum = 1;
var idlenum = 0;
var upgradechange = 1.1;
var amongusupgradechange = 200;
var amongusCost = 10000000;
const img = document.getElementById("Amongus");
var upgradesOwned = [0, 0, 0, 
                     0, 0, 0, 
                     0, 0, 0,
                     0, 0, 0,
                     0, 0, 0];
var upgradeCosts = [10, 100, 2000000, 
                   5000, 10000, 10000000000, 
                   150000, 200000, 10000000000,
                   100000000000, 200000000000000, 1000000000000000,
                   0, 0, 0]
var amongusUpgrades = 0;
var amongusList = ["Purple.png", "Blue.png", "Green.png", "Yellow.png", "Orange.png", "Red.png", "White.png", "Magenta.png"];
var accessories = ["", "ToiletPaper.png", "TopHat.png", "DevilHorns.png", "CaptainHat.png"]
var accessoryNum = 0;
var buttonColors = ["#8936b5", "#4227ab", "#1b5921", "#abad1d", "#c47d1a", "#b52b1f", "#9e9b9b", "#b52878"];
var buttonMiddleColors = ["#53216e", "#190178", "#123d17", "#767814", "#825311", "#821f16", "#5c5b5b", "#801c54"];
var buttonDarkColors = ["#3b1859", "#10004f", "#0a240d", "#46470b", "#4a2f08", "#47100b", "#303030", "#4a1031"];
setInterval(addidlesus, 1000);
setInterval(saveData, 10000);
checkupgrades();
loadData();

// document.onkeypress = function (e) {
//   e = e || window.event;
//   key_pressed(e);
// };

// function key_pressed(e) {
//   amongusnum += 10000*clicknum;
//   updateScore();
// }

function checkupgrades() {
  if (amongusnum >= upgradeCosts[0]) {
    document.getElementById("upgrade1").disabled = false;
  }else{
    document.getElementById("upgrade1").disabled = true;
  }
  if (amongusnum >= upgradeCosts[1]) {
    document.getElementById("upgrade2").disabled = false;
  }else{
    document.getElementById("upgrade2").disabled = true;
  }
  if (amongusnum >= upgradeCosts[2]) {
    document.getElementById("upgrade3").disabled = false;
  }else{
    document.getElementById("upgrade3").disabled = true;
  }
  if (amongusnum >= upgradeCosts[3]) {
    document.getElementById("upgrade4").disabled = false;
  }else{
    document.getElementById("upgrade4").disabled = true;
  }
  if (amongusnum >= upgradeCosts[4]) {
    document.getElementById("upgrade5").disabled = false;
  }else{
    document.getElementById("upgrade5").disabled = true;
  }
  if (amongusnum >= upgradeCosts[5]) {
    document.getElementById("upgrade6").disabled = false;
  }else{
    document.getElementById("upgrade6").disabled = true;
  }
  if (amongusnum >= upgradeCosts[6]) {
    document.getElementById("upgrade7").disabled = false;
  }else{
    document.getElementById("upgrade7").disabled = true;
  }
  if (amongusnum >= upgradeCosts[7]) {
    document.getElementById("upgrade8").disabled = false;
  }else{
    document.getElementById("upgrade8").disabled = true;
  }
  if (amongusnum >= upgradeCosts[8]) {
    document.getElementById("upgrade9").disabled = false;
  }else{
    document.getElementById("upgrade9").disabled = true;
  }
  if (amongusnum >= upgradeCosts[9]) {
    document.getElementById("upgrade10").disabled = false;
  }else{
    document.getElementById("upgrade10").disabled = true;
  }
  if (amongusnum >= upgradeCosts[10]) {
    document.getElementById("upgrade11").disabled = false;
  }else{
    document.getElementById("upgrade11").disabled = true;
  }
  if (amongusnum >= upgradeCosts[11]) {
    document.getElementById("upgrade12").disabled = false;
  }else{
    document.getElementById("upgrade12").disabled = true;
  }
  spc.innerHTML = shortNum(clicknum);
  sps.innerHTML = shortNum(idlenum);
}

function checkAmongusUpgrades() {
  if (amongusnum >= amongusCost) {
    document.getElementById("buy-amongus").disabled = false;
    document.getElementById("amongus-buy-img").src = amongusList[amongusUpgrades+1];
  }else{
    document.getElementById("buy-amongus").disabled = true;
    document.getElementById("amongus-buy-img").src = "Unknown.png"
  }
}

function amongusClicked() {
  amongusnum += Math.round(clicknum);
  updateScore();
}

function addidlesus() {
  amongusnum += Math.round(idlenum*amongusMultiplier);
  Number(amongusnum);
  updateScore();
}

function upgrade1() {
  clicknum += 1;
  amongusnum -= upgradeCosts[0];
  upgradeCosts[0] *= upgradechange;
  upgradesOwned[0] += 1;
  upgrade1owned.innerHTML = upgradesOwned[0];
  upgrade1cost.innerHTML = shortNum(upgradeCosts[0]);
  updateScore();
  checkUpgradeCosts();
}

function upgrade2() {
  idlenum += 5;
  amongusnum -= upgradeCosts[1];
  upgradeCosts[1] *= upgradechange;
  updateScore();
  upgradesOwned[1] += 1;
  upgrade2owned.innerHTML = upgradesOwned[1];
  upgrade2cost.innerHTML = shortNum(upgradeCosts[1]);
}

function upgrade3() {
  clicknum += 10000;
  idlenum += 2000;
  amongusnum -= upgradeCosts[2];
  upgradeCosts[2] *= upgradechange;
  updateScore();
  upgradesOwned[2] += 1;
  upgrade3owned.innerHTML = upgradesOwned[2];
  upgrade3cost.innerHTML = shortNum(upgradeCosts[2]);
  document.getElementById("hat").style.visibility = "visible";
  document.getElementById("hat").style.left = "-8px";
  document.getElementById("hat").style.top = "5px";
  if(accessoryNum !== 1){
    accessoryNum = 1;
  }
  document.getElementById("hat").src = accessories[accessoryNum];
}

function upgrade4() {
  clicknum += 20;
  amongusnum -= upgradeCosts[3];
  upgradeCosts[3] *= upgradechange;
  updateScore();
  upgradesOwned[3] += 1;
  upgrade4owned.innerHTML = upgradesOwned[3];
  upgrade4cost.innerHTML = shortNum(upgradeCosts[3]);
}

function upgrade5() {
  idlenum += 50;
  amongusnum -= upgradeCosts[4];
  upgradeCosts[4] *= upgradechange;
  updateScore();
  upgradesOwned[4] += 1;
  upgrade5owned.innerHTML = upgradesOwned[4];
  upgrade5cost.innerHTML = shortNum(upgradeCosts[4]);
}

function upgrade6() {
  clicknum += 1000000;
  idlenum += 100000;
  amongusnum -= upgradeCosts[6];
  upgradeCosts[5] *= upgradechange;
  updateScore();
  upgradesOwned[5] += 1;
  upgrade6owned.innerHTML = upgradesOwned[5];
  upgrade6cost.innerHTML = shortNum(upgradeCosts[5]);
  document.getElementById("hat").style.visibility = "visible";
  document.getElementById("hat").style.left = "-8px";
  document.getElementById("hat").style.top = "5px";
  if(accessoryNum !== 2){
    accessoryNum = 2;
  }
  document.getElementById("hat").src = accessories[accessoryNum];
}

function upgrade7() {
  clicknum += 500;
  amongusnum -= upgradeCosts[7]
  upgradeCosts[6] *= upgradechange;
  updateScore();
  upgradesOwned[6] += 1;
  upgrade7owned.innerHTML = upgradesOwned[6];
  upgrade7cost.innerHTML = shortNum(upgradeCosts[6]);
}

function upgrade8() {
  idlenum += 5000;
  amongusnum -= upgradeCosts[7];
  upgradeCosts[7] *= upgradechange;
  updateScore();
  upgradesOwned[7] += 1;
  upgrade8owned.innerHTML = upgradesOwned[7];
  upgrade8cost.innerHTML = shortNum(upgradeCosts[7]);
}

function upgrade9() {
  idlenum += 10000000;
  clicknum += 1000000000;
  amongusnum -= upgradeCosts[8];
  upgradeCosts[8] *= upgradechange;
  updateScore();
  document.getElementById("hat").style.visibility = "visible";
  if(accessoryNum !== 3){
    accessoryNum = 3;
  }
  document.getElementById("hat").src = accessories[accessoryNum];
  document.getElementById("hat").style.left = "5px";
  document.getElementById("hat").style.top = "10px";
  upgradesOwned[8] += 1;
  upgrade9owned.innerHTML = upgradesOwned[8];
  upgrade9cost.innerHTML = shortNum(upgradeCosts[8]);
}

function upgrade10() {
  clicknum += 100000000;
  amongusnum -= upgradeCosts[9];
  upgradeCosts[9] *= upgradechange;
  updateScore();
  upgradesOwned[9] += 1;
  upgrade10owned.innerHTML = upgradesOwned[9];
  upgrade10cost.innerHTML = shortNum(upgradeCosts[9]);
}

function upgrade11() {
  idlenum += 100000000000000;
  amongusnum -= upgradeCosts[10];
  upgradeCosts[10] *= upgradechange;
  updateScore();
  upgradesOwned[10] += 1;
  upgrade11owned.innerHTML = upgradesOwned[10];
  upgrade11cost.innerHTML = shortNum(upgradeCosts[10]);
}

function upgrade12() {
  clicknum += 100000000000;
  idlenum += 1000000000000;
  amongusnum -= upgradeCosts[11];
  upgradeCosts[11] *= upgradechange;
  document.getElementById("hat").style.visibility = "visible";
  if(accessoryNum !== 4){
    accessoryNum = 4;
  }
  document.getElementById("hat").src = accessories[accessoryNum];
  document.getElementById("hat").style.left = "5px";
  document.getElementById("hat").style.top = "10px";
  updateScore();
  upgradesOwned[11] += 1;
  upgrade12owned.innerHTML = upgradesOwned[11];
  upgrade12cost.innerHTML = shortNum(upgradeCosts[11]);
}

function buyAmongus() {
  amongusUpgrades += 1;
  document.getElementById("image").src = amongusList[amongusUpgrades];
  document.getElementById("amongus-buy-img").src = "Unknown.png";
  document.getElementById("upgrades-header-amongus").src = amongusList[amongusUpgrades];
  document.querySelector(":root").style.setProperty("--buttonColor", buttonColors[amongusUpgrades]);
  document.querySelector(":root").style.setProperty("--disabledButtonColor", buttonMiddleColors[amongusUpgrades]);
  document.querySelector(":root").style.setProperty("--enabledShadowColor", buttonMiddleColors[amongusUpgrades]);
  document.querySelector(":root").style.setProperty("--disabledShadowColor", buttonDarkColors[amongusUpgrades]);
  clicknum *= amongusMultiplier;
  amongusnum -= amongusCost;
  amongusCost *= amongusupgradechange;
  amonguscost.innerHTML = shortNum(amongusCost);
  checkAmongusUpgrades();
}

function buyHammer() {
  
}

function shortNum(value) {
  let newValue = value;
  newValue = Math.round(newValue);
  const suffixes = ["", "K", "M", "B","T", "Q", "QT", "S", "ST", "O", "N", "D"];
  let suffixNum = 0;
  while (newValue >= 1000) {
    newValue /= 1000;
    suffixNum++;
  }
  if(value <= 999){
    Math.round(newValue);
  }else{
    newValue = newValue.toFixed(2);
  }
  newValue += suffixes[suffixNum];
  return newValue;
}

function updateScore() {
  score.innerHTML = shortNum(Math.round(amongusnum));
  checkupgrades();
  checkAmongusUpgrades();
}

function saveData() {
  localStorage.clear();
  localStorage.setItem("sus", amongusnum);
  localStorage.setItem("upgradesOwned", upgradesOwned);
  localStorage.setItem("spc", clicknum);
  localStorage.setItem("sps", idlenum);
  localStorage.setItem("amongusUpgrades", amongusUpgrades);
  localStorage.setItem("amongusCost", amongusCost);
  localStorage.setItem("accessoryNum", accessoryNum);
}

function clearData() {
  localStorage.clear();
  location.reload();
}

function loadData() {
  if(localStorage.getItem("sus") !== null){
    amongusnum = Number(localStorage.getItem("sus"));
    clicknum = Number(localStorage.getItem("spc"));
    idlenum = Number(localStorage.getItem("sps"));
    accessoryNum = localStorage.getItem("accessoryNum");
    if(accessoryNum != 0){
      document.getElementById("hat").style.visibility = "visible";
    }
    document.getElementById("hat").src = accessories[accessoryNum];
    if(accessoryNum >= 3){
      document.getElementById("hat").style.left = "5px";
      document.getElementById("hat").style.top = "10px";
    }
    upgradesOwned = localStorage.getItem("upgradesOwned").split(",");
    for (let index = 0; index < upgradesOwned.length; index++) {
      upgradesOwned[index] = Number(upgradesOwned[index]);
    }
    upgradeCosts[0] *= upgradechange ** upgradesOwned[0];
    upgradeCosts[1] *= upgradechange ** upgradesOwned[1];
    upgradeCosts[2] *= upgradechange ** upgradesOwned[2];
    upgradeCosts[3] *= upgradechange ** upgradesOwned[3];
    upgradeCosts[4] *= upgradechange ** upgradesOwned[4];
    upgradeCosts[5] *= upgradechange ** upgradesOwned[5];
    upgradeCosts[6] *= upgradechange ** upgradesOwned[6];
    upgradeCosts[7] *= upgradechange ** upgradesOwned[7];
    upgradeCosts[8] *= upgradechange ** upgradesOwned[8];
    upgradeCosts[9] *= upgradechange ** upgradesOwned[9];
    upgradeCosts[10] *= upgradechange ** upgradesOwned[10];
    upgradeCosts[11] *= upgradechange ** upgradesOwned[11];
    loadAmongusUpgrades();
    updateUpgradesOwned();
    updateUpgradeCosts();
    updateScore();
  }
}

function updateUpgradesOwned() {
  upgrade1owned.innerHTML = upgradesOwned[0];
  upgrade2owned.innerHTML = upgradesOwned[1];
  upgrade3owned.innerHTML = upgradesOwned[2];
  upgrade4owned.innerHTML = upgradesOwned[3];
  upgrade5owned.innerHTML = upgradesOwned[4];
  upgrade6owned.innerHTML = upgradesOwned[5];
  upgrade7owned.innerHTML = upgradesOwned[6];
  upgrade8owned.innerHTML = upgradesOwned[7];
  upgrade9owned.innerHTML = upgradesOwned[8];
  upgrade10owned.innerHTML = upgradesOwned[9];
  upgrade11owned.innerHTML = upgradesOwned[10];
  upgrade12owned.innerHTML = upgradesOwned[11];
}

function updateUpgradeCosts() {
  upgrade1cost.innerHTML = shortNum(upgradeCosts[0]);
  upgrade2cost.innerHTML = shortNum(upgradeCosts[1]);
  upgrade3cost.innerHTML = shortNum(upgradeCosts[2]);
  upgrade4cost.innerHTML = shortNum(upgradeCosts[3]);
  upgrade5cost.innerHTML = shortNum(upgradeCosts[4]);
  upgrade6cost.innerHTML = shortNum(upgradeCosts[5]);
  upgrade7cost.innerHTML = shortNum(upgradeCosts[6]);
  upgrade8cost.innerHTML = shortNum(upgradeCosts[7]);
  upgrade9cost.innerHTML = shortNum(upgradeCosts[8]);
  upgrade10cost.innerHTML = shortNum(upgradeCosts[9]);
  upgrade11cost.innerHTML = shortNum(upgradeCosts[10]);
  upgrade12cost.innerHTML = shortNum(upgradeCosts[11]);
}

function loadAmongusUpgrades() {
  amongusUpgrades = Number(localStorage.getItem("amongusUpgrades"));
  document.getElementById("image").src = amongusList[amongusUpgrades];
  document.getElementById("amongus-buy-img").src = amongusList[amongusUpgrades+1];
  document.getElementById("upgrades-header-amongus").src = amongusList[amongusUpgrades];
  document.querySelector(":root").style.setProperty("--buttonColor", buttonColors[amongusUpgrades]);
  document.querySelector(":root").style.setProperty("--disabledButtonColor", buttonMiddleColors[amongusUpgrades]);
  document.querySelector(":root").style.setProperty("--enabledShadowColor", buttonMiddleColors[amongusUpgrades]);
  document.querySelector(":root").style.setProperty("--disabledShadowColor", buttonDarkColors[amongusUpgrades]);
  amongusCost = Number(localStorage.getItem("amongusCost"));
  amonguscost.innerHTML = shortNum(amongusCost);
}