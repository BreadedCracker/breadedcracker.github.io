var score = document.getElementById("score");
var amongusnum = 0;
var amongusMultiplier = 1;
var clicknum = 1;
var idlenum = 0;
var upgradechange = 1.07;
var buttons = document.querySelectorAll("button");
var idleUpdateFrequency = 8;
var amongusupgradechange = 200;
var amongusCost = 10000000;
var clickUpgradesOwned = [0,
                         0,
                         0,
                         0,
                         0,
                         0];
var idleUpgradesOwned = [0,
                        0,
                        0,
                        0,
                        0,
                        0];
var accessoryUpgradesOwned = [0,
                             0,
                             0,
                             0,
                             0,
                             0];
var clickUpgradeCosts = [10,
                        3000,
                        75000,
                        5000000,
                        1000000000,
                        300000000000,
                        0];
var idleUpgradeCosts = [100,
                       4000,
                       125000,
                       10000000,
                       500000000,
                       200000000000,
                       0];
var accessoryUpgradeCosts = [10000000,
                        10000000000,
                        1000000000000,
                        1000000000000000,
                        100000000000000000,
                            50000000000000000000];
var clickUpgrades = [document.getElementById("clickupgrade1-container"),
                    document.getElementById("clickupgrade2-container"),
                    document.getElementById("clickupgrade3-container"),
                    document.getElementById("clickupgrade4-container"),
                    document.getElementById("clickupgrade5-container"),
                    document.getElementById("clickupgrade6-container")];
var clickUpgradeButtons = [document.getElementById("clickupgrade1"),
                    document.getElementById("clickupgrade2"),
                    document.getElementById("clickupgrade3"),
                    document.getElementById("clickupgrade4"),
                          document.getElementById("clickupgrade5"),
                          document.getElementById("clickupgrade6")];
var idleUpgrades = [document.getElementById("idleupgrade1-container"),
                   document.getElementById("idleupgrade2-container"),
                   document.getElementById("idleupgrade3-container"),
                   document.getElementById("idleupgrade4-container"),
                    document.getElementById("idleupgrade5-container"),
                   document.getElementById("idleupgrade6-container")];
var idleUpgradeButtons = [document.getElementById("idleupgrade1"),
                    document.getElementById("idleupgrade2"),
                    document.getElementById("idleupgrade3"),
                    document.getElementById("idleupgrade4"),
                         document.getElementById("idleupgrade5"),
                         document.getElementById("idleupgrade6")];
var accessoryUpgrades = [document.getElementById("accessoryupgrade1-container"),
                        document.getElementById("accessoryupgrade2-container"),
                        document.getElementById("accessoryupgrade3-container"),
                        document.getElementById("accessoryupgrade4-container"),
                        document.getElementById("accessoryupgrade5-container"),
                        document.getElementById("accessoryupgrade6-container")];
var accessoryUpgradeButtons = [document.getElementById("accessoryupgrade1"),
                    document.getElementById("accessoryupgrade2"),
                    document.getElementById("accessoryupgrade3"),
                    document.getElementById("accessoryupgrade4"),
                              document.getElementById("accessoryupgrade5"),
                              document.getElementById("accessoryupgrade6")];
var clickUpgradeNum = -1;
var idleUpgradeNum = -1;
var accessoriesEnabled = false;
var accessoryUpgradeNum = 0;
var accessoryUpgradesUnlocked = -1;
var amongusUpgrades = 0;
var amongusList = ["Purple.png", "Blue.png", "Green.png", "Yellow.png", "Orange.png", "Red.png", "White.png", "Magenta.png"];
var accessories = ["", "ToiletPaper.png", "TopHat.png", "DevilHorns.png", "CaptainHat.png", "DumHat.png", "PartyHat.png"]
var buttonColors = ["#8936b5", "#4227ab", "#1b5921", "#abad1d", "#c47d1a", "#b52b1f", "#9e9b9b", "#b52878"];
var buttonMiddleColors = ["#53216e", "#190178", "#123d17", "#767814", "#825311", "#821f16", "#5c5b5b", "#801c54"];
var buttonDarkColors = ["#3b1859", "#10004f", "#0a240d", "#46470b", "#4a2f08", "#47100b", "#303030", "#4a1031"];

start();

// document.onkeypress = function (e) {
//   e = e || window.event;
//   key_pressed(e);
// };

// function key_pressed(e) {
//   amongusnum += 10000*clicknum;
//   updateScore();
// }

function start() {
  setInterval(addidlesus, 1000/idleUpdateFrequency);
  setInterval(saveData, 10000);
  checkupgrades();
  loadData();
  clickUpgrades[0].style.display = "flex";
  idleUpgrades[0].style.display = "flex";
}

function checkupgrades() { // i have never put comments in code before, but i GENUINELY CANNOT FOLLOW the horrible coding that i put in here
  for(let i=0; i < clickUpgrades.length; i++){ // function will run however many click upgrades there are times
    if(amongusnum >= clickUpgradeCosts[i]){ // check if the score is greater than the upgrade cost of the upgrade # its on
      clickUpgradeButtons[i].disabled = false; // enable the button
      if(i != (clickUpgrades.length-1)){ // check if i is not at the end element of the array so that editing the display of the element i+1 is not undefined
        if(i > clickUpgradeNum){ // if i is higher than we've seen before
          clickUpgradeNum ++; // change to the number of upgrades unlocked
          unlockClickUpgrade(i);
        }
      }
    }else{
      clickUpgradeButtons[i].disabled = true;
    }
  }
  for(let i=0; i < idleUpgrades.length; i++){
    if(amongusnum >= idleUpgradeCosts[i]){
      idleUpgradeButtons[i].disabled = false;
      if(i != idleUpgrades.length-1){
        if(i > idleUpgradeNum){ // if i is higher than we've seen before
          idleUpgradeNum ++; // change to the number of upgrades unlocked
          unlockIdleUpgrade(i);
        }
      }
    }else{
      idleUpgradeButtons[i].disabled = true;
    }
  }
  for(let i=0; i < accessoryUpgrades.length; i++){
    if(amongusnum >= accessoryUpgradeCosts[i]){
      accessoryUpgradeButtons[i].disabled = false;
      if(i != accessoryUpgrades.length-1){
        accessoriesEnabled = true;
        if(i > accessoryUpgradesUnlocked){ // if i is higher than we've seen before
          accessoryUpgradesUnlocked ++; // change to the number of upgrades unlocked
          unlockAccessoryUpgrade(i);
        }
      }
    }else{
      accessoryUpgradeButtons[i].disabled = true;
    }
  }
  spc.innerHTML = shortNum(clicknum);
  sps.innerHTML = shortNum(idlenum);
}

function checkAmongusUpgrades() {
  if (amongusnum >= amongusCost) {
    document.getElementById("buy-amongus").disabled = false;
    document.getElementById("amongus-buy-img").src = amongusList[amongusUpgrades+1];
    document.getElementById("upgrades-header-amongus").style.visibility = "visible";
    accessoryUpgrades[0].style.display = "flex";
  }else{
    document.getElementById("buy-amongus").disabled = true;
    document.getElementById("amongus-buy-img").src = "Unknown.png";
  }
}

function amongusClicked() {
  amongusnum += clicknum;
  // updateScore(); not needed due to high idlesus frequency 
}

function addidlesus() {
  amongusnum += idlenum/idleUpdateFrequency;
  Number(amongusnum);
  updateScore();
}

function unlockClickUpgrade(num) {
  clickUpgrades[num+1].style.display = "flex";
  clickUpgrades[num+1].scrollIntoView({ behavior: 'smooth', block: 'end'});
}

function clickupgrade1() {
  var upgradeNum = 0;
  clicknum += 1;
  amongusnum -= clickUpgradeCosts[upgradeNum];
  clickUpgradeCosts[upgradeNum] *= upgradechange;
  clickUpgradesOwned[upgradeNum] += 1;
  clickupgrade1owned.innerHTML = clickUpgradesOwned[upgradeNum];
  clickupgrade1cost.innerHTML = shortNum(clickUpgradeCosts[upgradeNum]);
  updateScore();
}

function clickupgrade2() {
  var upgradeNum = 1;
  clicknum += 20;
  amongusnum -= clickUpgradeCosts[upgradeNum];
  clickUpgradeCosts[upgradeNum] *= upgradechange;
  clickUpgradesOwned[upgradeNum] += 1;
  clickupgrade2owned.innerHTML = clickUpgradesOwned[upgradeNum];
  clickupgrade2cost.innerHTML = shortNum(clickUpgradeCosts[upgradeNum]);
  updateScore();
}

function clickupgrade3() {
  var upgradeNum = 2;
  clicknum += 500;
  amongusnum -= clickUpgradeCosts[upgradeNum];
  clickUpgradeCosts[upgradeNum] *= upgradechange;
  clickUpgradesOwned[upgradeNum] += 1;
  clickupgrade3owned.innerHTML = clickUpgradesOwned[upgradeNum];
  clickupgrade3cost.innerHTML = shortNum(clickUpgradeCosts[upgradeNum]);
  updateScore();
}

function clickupgrade4() {
  var upgradeNum = 3;
  clicknum += 50000;
  amongusnum -= clickUpgradeCosts[upgradeNum];
  clickUpgradeCosts[upgradeNum] *= upgradechange;
  clickUpgradesOwned[upgradeNum] += 1;
  clickupgrade4owned.innerHTML = clickUpgradesOwned[upgradeNum];
  clickupgrade4cost.innerHTML = shortNum(clickUpgradeCosts[upgradeNum]);
  updateScore();
}

function clickupgrade5() {
  var upgradeNum = 4;
  clicknum += 25000000;
  amongusnum -= clickUpgradeCosts[upgradeNum];
  clickUpgradeCosts[upgradeNum] *= upgradechange;
  clickUpgradesOwned[upgradeNum] += 1;
  clickupgrade5owned.innerHTML = clickUpgradesOwned[upgradeNum];
  clickupgrade5cost.innerHTML = shortNum(clickUpgradeCosts[upgradeNum]);
  updateScore();
}

function clickupgrade6() {
  var upgradeNum = 5;
  clicknum += 10000000000;
  amongusnum -= clickUpgradeCosts[upgradeNum];
  clickUpgradeCosts[upgradeNum] *= upgradechange;
  clickUpgradesOwned[upgradeNum] += 1;
  clickupgrade6owned.innerHTML = clickUpgradesOwned[upgradeNum];
  clickupgrade6cost.innerHTML = shortNum(clickUpgradeCosts[upgradeNum]);
  rainbowCursor();
  updateScore();
}

function unlockIdleUpgrade(num) {
  idleUpgrades[num+1].style.display = "flex";
  idleUpgrades[num+1].scrollIntoView({ behavior: 'smooth', block: 'end'});
}

function idleupgrade1() {
  var upgradeNum = 0;
  idlenum += 5;
  amongusnum -= idleUpgradeCosts[upgradeNum];
  idleUpgradeCosts[upgradeNum] *= upgradechange;
  idleUpgradesOwned[upgradeNum] += 1;
  idleupgrade1owned.innerHTML = idleUpgradesOwned[upgradeNum];
  idleupgrade1cost.innerHTML = shortNum(idleUpgradeCosts[upgradeNum]);
  updateScore();
}

function idleupgrade2() {
  var upgradeNum = 1;
  idlenum += 75;
  amongusnum -= idleUpgradeCosts[upgradeNum];
  idleUpgradeCosts[upgradeNum] *= upgradechange;
  idleUpgradesOwned[1] += 1;
  idleupgrade2owned.upgradeNumnnerHTML = idleUpgradesOwned[upgradeNum];
  idleupgrade2cost.innerHTML = shortNum(idleUpgradeCosts[upgradeNum]);
  updateScore();
}

function idleupgrade3() {
  var upgradeNum = 2;
  idlenum += 2000;
  amongusnum -= idleUpgradeCosts[upgradeNum];
  idleUpgradeCosts[upgradeNum] *= upgradechange;
  idleUpgradesOwned[upgradeNum] += 1;
  idleupgrade3owned.innerHTML = idleUpgradesOwned[upgradeNum];
  idleupgrade3cost.innerHTML = shortNum(idleUpgradeCosts[upgradeNum]);
  updateScore();
}

function idleupgrade4() {
  var upgradeNum = 3;
  idlenum += 500000;
  amongusnum -= idleUpgradeCosts[upgradeNum];
  idleUpgradeCosts[upgradeNum] *= upgradechange;
  idleUpgradesOwned[upgradeNum] += 1;
  idleupgrade4owned.innerHTML = idleUpgradesOwned[upgradeNum];
  idleupgrade4cost.innerHTML = shortNum(idleUpgradeCosts[upgradeNum]);
  updateScore();
}

function idleupgrade5() {
  var upgradeNum = 4;
  idlenum += 10000000;
  amongusnum -= idleUpgradeCosts[upgradeNum];
  idleUpgradeCosts[upgradeNum] *= upgradechange;
  idleUpgradesOwned[upgradeNum] += 1;
  idleupgrade5owned.innerHTML = idleUpgradesOwned[upgradeNum];
  idleupgrade5cost.innerHTML = shortNum(idleUpgradeCosts[upgradeNum]);
  updateScore();
}

function idleupgrade6() {
  var upgradeNum = 5;
  idlenum += 30000000000;
  amongusnum -= idleUpgradeCosts[upgradeNum];
  idleUpgradeCosts[upgradeNum] *= upgradechange;
  idleUpgradesOwned[upgradeNum] += 1;
  idleupgrade6owned.innerHTML = idleUpgradesOwned[upgradeNum];
  idleupgrade6cost.innerHTML = shortNum(idleUpgradeCosts[upgradeNum]);
  updateScore();
}

function unlockAccessoryUpgrade(num) {
  accessoryUpgrades[num+1].style.display = "flex";
  accessoryUpgrades[num+1].scrollIntoView({ behavior: 'smooth', block: 'end'});
}

function accessoryupgrade1() {
  var upgradeNum = 0;
  clicknum += 100000;
  idlenum += 200000;
  amongusnum -= accessoryUpgradeCosts[upgradeNum];
  accessoryUpgradeCosts[upgradeNum] *= upgradechange;
  updateScore();
  accessoryUpgradesOwned[upgradeNum] += 1;
  accessoryupgrade1owned.innerHTML = accessoryUpgradesOwned[upgradeNum];
  accessoryupgrade1cost.innerHTML = shortNum(accessoryUpgradeCosts[0]);
  document.getElementById("hat").style.visibility = "visible";
  document.getElementById("hat").style.left = "-8px";
  document.getElementById("hat").style.top = "5px";
  if(accessoryUpgradeNum !== upgradeNum+1){
    accessoryUpgradeNum = upgradeNum+1;
  }
  document.getElementById("hat").src = accessories[accessoryUpgradeNum];
}

function accessoryupgrade2() {
  var upgradeNum = 1;
  clicknum += 3000000;
  idlenum += 30000000;
  amongusnum -= accessoryUpgradeCosts[upgradeNum];
  accessoryUpgradeCosts[upgradeNum] *= upgradechange;
  updateScore();
  accessoryUpgradesOwned[upgradeNum] += 1;
  accessoryupgrade2owned.innerHTML = accessoryUpgradesOwned[upgradeNum];
  accessoryupgrade2cost.innerHTML = shortNum(accessoryUpgradeCosts[upgradeNum]);
  document.getElementById("hat").style.visibility = "visible";
  document.getElementById("hat").style.left = "-8px";
  document.getElementById("hat").style.top = "5px";
  if(accessoryUpgradeNum !== upgradeNum+1){
    accessoryUpgradeNum = upgradeNum+1;
  }
  document.getElementById("hat").src = accessories[accessoryUpgradeNum];
}

function accessoryupgrade3() {
  var upgradeNum = 2;
  idlenum += 10000000;
  clicknum += 1000000000;
  amongusnum -= accessoryUpgradeCosts[upgradeNum];
  accessoryUpgradeCosts[upgradeNum] *= upgradechange;
  updateScore();
  accessoryUpgradesOwned[upgradeNum] += 1;
  accessoryupgrade3owned.innerHTML = accessoryUpgradesOwned[upgradeNum];
  accessoryupgrade3cost.innerHTML = shortNum(accessoryUpgradeCosts[upgradeNum]);
  document.getElementById("hat").style.visibility = "visible";
  if(accessoryUpgradeNum !== upgradeNum+1){
    accessoryUpgradeNum = upgradeNum+1;
  }
  document.getElementById("hat").src = accessories[accessoryUpgradeNum];
  document.getElementById("hat").style.left = "5px";
  document.getElementById("hat").style.top = "10px";
}

function accessoryupgrade4() {
  var upgradeNum = 3;
  clicknum += 100000000000;
  idlenum += 1000000000000;
  amongusnum -= accessoryUpgradeCosts[upgradeNum];
  accessoryUpgradeCosts[upgradeNum] *= upgradechange;
  accessoryUpgradesOwned[upgradeNum] += 1;
  accessoryupgrade4owned.innerHTML = accessoryUpgradesOwned[upgradeNum];
  accessoryupgrade4cost.innerHTML = shortNum(accessoryUpgradeCosts[upgradeNum]);
  document.getElementById("hat").style.visibility = "visible";
  if(accessoryUpgradeNum !== upgradeNum+1){
    accessoryUpgradeNum = upgradeNum+1;
  }
  document.getElementById("hat").src = accessories[accessoryUpgradeNum];
  document.getElementById("hat").style.left = "5px";
  document.getElementById("hat").style.top = "10px";
  updateScore();
}

function accessoryupgrade5() {
  var upgradeNum = 4;
  clicknum += 100000000000000;
  idlenum += 1000000000000000;
  amongusnum -= accessoryUpgradeCosts[upgradeNum];
  accessoryUpgradeCosts[upgradeNum] *= upgradechange;
  accessoryUpgradesOwned[upgradeNum] += 1;
  accessoryupgrade5owned.innerHTML = accessoryUpgradesOwned[upgradeNum];
  accessoryupgrade5cost.innerHTML = shortNum(accessoryUpgradeCosts[upgradeNum]);
  document.getElementById("hat").style.visibility = "visible";
  if(accessoryUpgradeNum !== upgradeNum+1){
    accessoryUpgradeNum = upgradeNum+1;
  }
  document.getElementById("hat").src = accessories[accessoryUpgradeNum];
  document.getElementById("hat").style.left = "20px";
  document.getElementById("hat").style.top = "45px";
  updateScore();
}

function accessoryupgrade6() {
  var upgradeNum = 5;
  clicknum += 100000000000000;
  idlenum += 1000000000000000;
  amongusnum -= accessoryUpgradeCosts[upgradeNum];
  accessoryUpgradeCosts[upgradeNum] *= upgradechange;
  accessoryUpgradesOwned[upgradeNum] += 1;
  accessoryupgrade6owned.innerHTML = accessoryUpgradesOwned[upgradeNum];
  accessoryupgrade6cost.innerHTML = shortNum(accessoryUpgradeCosts[upgradeNum]);
  document.getElementById("hat").style.visibility = "visible";
  if(accessoryUpgradeNum !== upgradeNum+1){
    accessoryUpgradeNum = upgradeNum+1;
  }
  document.getElementById("hat").src = accessories[accessoryUpgradeNum];
  document.getElementById("hat").style.left = "0px";
  document.getElementById("hat").style.top = "5px";
  updateScore();
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
  document.title = "Sussy Clicker - " + shortNum(Math.round(amongusnum)) + "  sus";
  checkupgrades();
  checkAmongusUpgrades();
}

function saveData() {
  localStorage.clear();
  localStorage.setItem("sus", amongusnum);
  localStorage.setItem("clickUpgradesOwned", clickUpgradesOwned);
  localStorage.setItem("idleUpgradesOwned", idleUpgradesOwned);
  localStorage.setItem("accessoryUpgradesOwned", accessoryUpgradesOwned);
  localStorage.setItem("spc", clicknum);
  localStorage.setItem("sps", idlenum);
  localStorage.setItem("amongusUpgrades", amongusUpgrades);
  localStorage.setItem("amongusCost", amongusCost);
  localStorage.setItem("accessoryUpgradeNum", accessoryUpgradeNum);
  localStorage.setItem("accessoriesEnabled", accessoriesEnabled);
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
    accessoryUpgradeNum = localStorage.getItem("accessoryUpgradeNum");
    if(accessoryUpgradeNum != 0){
      document.getElementById("hat").style.visibility = "visible";
    }
    document.getElementById("hat").src = accessories[accessoryUpgradeNum];
    if(accessoryUpgradeNum == 3 || accessoryUpgradeNum == 4){
      document.getElementById("hat").style.left = "5px";
      document.getElementById("hat").style.top = "10px";
    }
    if(accessoryUpgradeNum == 5){
      document.getElementById("hat").style.left = "20px";
      document.getElementById("hat").style.top = "45px";
    }
    if(accessoryUpgradeNum == 6){
      document.getElementById("hat").style.left = "0px";
      document.getElementById("hat").style.top = "5px";
    }
    clickUpgradesOwned = localStorage.getItem("clickUpgradesOwned").split(",");
    for (let index = 0; index < clickUpgradesOwned.length; index++) {
      clickUpgradesOwned[index] = Number(clickUpgradesOwned[index]);
    }
    idleUpgradesOwned = localStorage.getItem("idleUpgradesOwned").split(",");
    for (let index = 0; index < idleUpgradesOwned.length; index++) {
      idleUpgradesOwned[index] = Number(idleUpgradesOwned[index]);
    }
    accessoryUpgradesOwned = localStorage.getItem("accessoryUpgradesOwned").split(",");
    for (let index = 0; index < accessoryUpgradesOwned.length; index++) {
      accessoryUpgradesOwned[index] = Number(accessoryUpgradesOwned[index]);
    }
    accessoriesEnabled = localStorage.getItem("accessoriesEnabled");
    if(accessoriesEnabled == true){
      document.getElementById("upgrades-header-amongus").style.visibility = "visible";
      alert("sus");
    }
    if(idleUpgradesOwned[5] != 0){
      rainbowCursor();
    }
    loadAmongusUpgrades();
    updateUpgradesOwned();
    updateUpgradeCosts();
    updateScore();
    checkupgrades();
  }
}

function updateUpgradesOwned() {
  clickupgrade1owned.innerHTML = shortNum(clickUpgradesOwned[0]);
  clickupgrade2owned.innerHTML = shortNum(clickUpgradesOwned[1]);
  clickupgrade3owned.innerHTML = shortNum(clickUpgradesOwned[2]);
  clickupgrade4owned.innerHTML = shortNum(clickUpgradesOwned[3]);
  clickupgrade5owned.innerHTML = shortNum(clickUpgradesOwned[4]);
  clickupgrade6owned.innerHTML = shortNum(clickUpgradesOwned[5]);
  idleupgrade1owned.innerHTML = shortNum(idleUpgradesOwned[0]);
  idleupgrade2owned.innerHTML = shortNum(idleUpgradesOwned[1]);
  idleupgrade3owned.innerHTML = shortNum(idleUpgradesOwned[2]);
  idleupgrade4owned.innerHTML = shortNum(idleUpgradesOwned[3]);
  idleupgrade5owned.innerHTML = shortNum(idleUpgradesOwned[4]);
  idleupgrade6owned.innerHTML = shortNum(idleUpgradesOwned[5]);
  accessoryupgrade1owned.innerHTML = shortNum(accessoryUpgradesOwned[0]);
  accessoryupgrade2owned.innerHTML = shortNum(accessoryUpgradesOwned[1]);
  accessoryupgrade3owned.innerHTML = shortNum(accessoryUpgradesOwned[2]);
  accessoryupgrade4owned.innerHTML = shortNum(accessoryUpgradesOwned[3]);
  accessoryupgrade5owned.innerHTML = shortNum(accessoryUpgradesOwned[4]);
  accessoryupgrade6owned.innerHTML = shortNum(accessoryUpgradesOwned[5]);

}

function updateUpgradeCosts() {
  for(let i=0; i<clickUpgradeCosts.length-1; i++){
      clickUpgradeCosts[i] *= upgradechange ** clickUpgradesOwned[i];
      if(clickUpgradesOwned[i] != 0 && i < clickUpgradesOwned.length-2){
        clickUpgrades[i].style.display = "flex";
        clickUpgrades[i+1].style.display = "flex";
      }
    }
    for(let i=0; i<idleUpgradeCosts.length-1; i++){
      idleUpgradeCosts[i] *= upgradechange ** idleUpgradesOwned[i];
      if(idleUpgradesOwned[i] != 0 && i < idleUpgradesOwned.length-1){
        idleUpgrades[i].style.display = "flex";
        idleUpgrades[i+1].style.display = "flex";
      }
    }
    for(let i=0; i<accessoryUpgradeCosts.length-1; i++){
      accessoryUpgradeCosts[i] *= upgradechange ** accessoryUpgradesOwned[i];
      if(accessoryUpgradesOwned[i] != 0 && i < accessoryUpgradesOwned.length-1){
        accessoryUpgrades[i].style.display = "flex";
        accessoryUpgrades[i+1].style.display = "flex";
      }
    }
  clickupgrade1cost.innerHTML = shortNum(clickUpgradeCosts[0]);
  clickupgrade2cost.innerHTML = shortNum(clickUpgradeCosts[1]);
  clickupgrade3cost.innerHTML = shortNum(clickUpgradeCosts[2]);
  clickupgrade4cost.innerHTML = shortNum(clickUpgradeCosts[3]);
  idleupgrade1cost.innerHTML = shortNum(idleUpgradeCosts[0]);
  idleupgrade2cost.innerHTML = shortNum(idleUpgradeCosts[1]);
  idleupgrade3cost.innerHTML = shortNum(idleUpgradeCosts[2]);
  idleupgrade4cost.innerHTML = shortNum(idleUpgradeCosts[3]);
  idleupgrade5cost.innerHTML = shortNum(idleUpgradeCosts[4]);
  accessoryupgrade1cost.innerHTML = shortNum(accessoryUpgradeCosts[0]);
  accessoryupgrade2cost.innerHTML = shortNum(accessoryUpgradeCosts[1]);
  accessoryupgrade3cost.innerHTML = shortNum(accessoryUpgradeCosts[2]);
  accessoryupgrade4cost.innerHTML = shortNum(accessoryUpgradeCosts[3]);
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

function rainbowCursor() {
  document.querySelector("html").style.cursor = "url('RainbowCursor.png'), auto";
  for(var i = 0; i < buttons.length; i++){
    buttons[i].style.cursor = "url('RainbowCursor.png'), auto";
  }
}