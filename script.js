var score = document.getElementById("score");
var amongusnum = 0;
var amongusMultiplier = 1;
var clicknum = 1;
var idlenum = 0;
var upgradechange = 1.1;
var amongusupgradechange = 200;
var amongusCost = 5000000;
var clickUpgradesOwned = [0,
                         0,
                         0,
                         0];
var idleUpgradesOwned = [0,
                         0,
                         0,
                         0];
var accessoryUpgradesOwned = [0,
                             0,
                             0,
                             0];
var clickUpgradeCosts = [10,
                        3000,
                        75000,
                        100000000,
                        0];
var idleUpgradeCosts = [100,
                        4000,
                        125000,
                        200000000,
                        0];
var accessoryUpgradeCosts = [10000000,
                        10000000000,
                        1000000000000,
                        1000000000000000,
                        0];
var clickUpgrades = [document.getElementById("clickupgrade1-container"),
                    document.getElementById("clickupgrade2-container"),
                    document.getElementById("clickupgrade3-container"),
                    document.getElementById("clickupgrade4-container")];
var clickUpgradeButtons = [document.getElementById("clickupgrade1"),
                    document.getElementById("clickupgrade2"),
                    document.getElementById("clickupgrade3"),
                    document.getElementById("clickupgrade4")];
var idleUpgrades = [document.getElementById("idleupgrade1-container"),
                   document.getElementById("idleupgrade2-container"),
                   document.getElementById("idleupgrade3-container"),
                   document.getElementById("idleupgrade4-container")];
var idleUpgradeButtons = [document.getElementById("idleupgrade1"),
                    document.getElementById("idleupgrade2"),
                    document.getElementById("idleupgrade3"),
                    document.getElementById("idleupgrade4")];
var accessoryUpgrades = [document.getElementById("accessoryupgrade1-container"),
                        document.getElementById("accessoryupgrade2-container"),
                        document.getElementById("accessoryupgrade3-container"),
                        document.getElementById("accessoryupgrade4-container")];
var accessoryUpgradeButtons = [document.getElementById("accessoryupgrade1"),
                    document.getElementById("accessoryupgrade2"),
                    document.getElementById("accessoryupgrade3"),
                    document.getElementById("accessoryupgrade4")];
var clickUpgradeNum = 0;
var idleUpgradeNum = 0;
var accessoryUpgradeNum = 0;
var amongusUpgrades = 0;
var amongusList = ["Purple.png", "Blue.png", "Green.png", "Yellow.png", "Orange.png", "Red.png", "White.png", "Magenta.png"];
var accessories = ["", "ToiletPaper.png", "TopHat.png", "DevilHorns.png", "CaptainHat.png"]
var accessoryNum = 0;
var buttonColors = ["#8936b5", "#4227ab", "#1b5921", "#abad1d", "#c47d1a", "#b52b1f", "#9e9b9b", "#b52878"];
var buttonMiddleColors = ["#53216e", "#190178", "#123d17", "#767814", "#825311", "#821f16", "#5c5b5b", "#801c54"];
var buttonDarkColors = ["#3b1859", "#10004f", "#0a240d", "#46470b", "#4a2f08", "#47100b", "#303030", "#4a1031"];
setInterval(addidlesus, 1000);
setInterval(saveData, 10000);
start();
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

function start() {
  clickUpgrades[0].style.display = "flex";
  idleUpgrades[0].style.display = "flex";
}

function checkupgrades() {
  for(let i=0; i < clickUpgrades.length; i++){
    if(amongusnum >= clickUpgradeCosts[i]){
      clickUpgradeButtons[i].disabled = false;   
      if((document.getElementById("click-upgrades").style.gridTemplateRows).split(" ").length <= i+2){
        document.getElementById("click-upgrades").style.gridTemplateRows += " 100px";
        document.getElementById("click-upgrades").style.gridTemplateRows += " 100px";
        if(i != (clickUpgrades.length)){
          clickUpgrades[i+1].style.display = "flex";
        }
      }
      
    }else{
      clickUpgradeButtons[i].disabled = true;
    }
  }
  for(let i=0; i < idleUpgrades.length; i++){
    if(amongusnum >= idleUpgradeCosts[i]){
      idleUpgradeButtons[i].disabled = false;
      if((document.getElementById("idle-upgrades").style.gridTemplateRows).split(" ").length <= i+2){
        document.getElementById("idle-upgrades").style.gridTemplateRows += " 100px";
        document.getElementById("idle-upgrades").style.gridTemplateRows += " 100px";
      }
      if(i != idleUpgrades.length-1){
        idleUpgrades[i+1].style.display = "flex";
      }
    }else{
      idleUpgradeButtons[i].disabled = true;
    }
  }
  for(let i=0; i < accessoryUpgrades.length; i++){
    if(amongusnum >= accessoryUpgradeCosts[i]){
      accessoryUpgradeButtons[i].disabled = false;
      if((document.getElementById("accessory-upgrades").style.gridTemplateRows).split(" ").length <= i+2){
        document.getElementById("accessory-upgrades").style.gridTemplateRows += " 100px";
        document.getElementById("accessory-upgrades").style.gridTemplateRows += " 100px";
      }
      if(i != accessoryUpgrades.length-1){
         accessoryUpgrades[i+1].style.display = "flex";
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
  updateScore();
}

function addidlesus() {
  amongusnum += idlenum;
  Number(amongusnum);
  updateScore();
}

function clickupgrade1() {
  clicknum += 1;
  amongusnum -= clickUpgradeCosts[0];
  clickUpgradeCosts[0] *= upgradechange;
  clickUpgradesOwned[0] += 1;
  clickupgrade1owned.innerHTML = clickUpgradesOwned[0];
  clickupgrade1cost.innerHTML = shortNum(clickUpgradeCosts[0]);
  updateScore();
}

function clickupgrade2() {
  clicknum += 20;
  amongusnum -= clickUpgradeCosts[1];
  clickUpgradeCosts[1] *= upgradechange;
  clickUpgradesOwned[1] += 1;
  clickupgrade2owned.innerHTML = clickUpgradesOwned[1];
  clickupgrade2cost.innerHTML = shortNum(clickUpgradeCosts[1]);
  updateScore();
}

function clickupgrade3() {
  clicknum += 500;
  amongusnum -= clickUpgradeCosts[2];
  clickUpgradeCosts[2] *= upgradechange;
  clickUpgradesOwned[2] += 1;
  clickupgrade3owned.innerHTML = clickUpgradesOwned[2];
  clickupgrade3cost.innerHTML = shortNum(clickUpgradeCosts[2]);
  updateScore();
}

function clickupgrade4() {
  clicknum += 1000000;
  amongusnum -= clickUpgradeCosts[3];
  clickUpgradeCosts[3] *= upgradechange;
  clickUpgradesOwned[3] += 1;
  clickupgrade4owned.innerHTML = clickUpgradesOwned[3];
  clickupgrade4cost.innerHTML = shortNum(clickUpgradeCosts[3]);
  updateScore();
}

function idleupgrade1() {
  idlenum += 5;
  amongusnum -= idleUpgradeCosts[0];
  idleUpgradeCosts[0] *= upgradechange;
  idleUpgradesOwned[0] += 1;
  idleupgrade1owned.innerHTML = idleUpgradesOwned[0];
  idleupgrade1cost.innerHTML = shortNum(idleUpgradeCosts[0]);
  updateScore();
}

function idleupgrade2() {
  idlenum += 50;
  amongusnum -= idleUpgradeCosts[1];
  idleUpgradeCosts[1] *= upgradechange;
  idleUpgradesOwned[1] += 1;
  idleupgrade2owned.innerHTML = idleUpgradesOwned[1];
  idleupgrade2cost.innerHTML = shortNum(idleUpgradeCosts[1]);
  updateScore();
}

function idleupgrade3() {
  idlenum += 2000;
  amongusnum -= idleUpgradeCosts[2];
  idleUpgradeCosts[2] *= upgradechange;
  idleUpgradesOwned[2] += 1;
  idleupgrade3owned.innerHTML = idleUpgradesOwned[2];
  idleupgrade3cost.innerHTML = shortNum(idleUpgradeCosts[2]);
  updateScore();
}

function idleupgrade4() {
  idlenum += 2000000;
  amongusnum -= idleUpgradeCosts[3];
  idleUpgradeCosts[3] *= upgradechange;
  idleUpgradesOwned[3] += 1;
  idleupgrade4owned.innerHTML = idleUpgradesOwned[3];
  idleupgrade4cost.innerHTML = shortNum(idleUpgradeCosts[3]);
  updateScore();
}

function accessoryupgrade1() {
  clicknum += 30000;
  idlenum += 20000;
  amongusnum -= accessoryUpgradeCosts[0];
  accessoryUpgradeCosts[0] *= upgradechange;
  updateScore();
  accessoryUpgradesOwned[0] += 1;
  accessoryupgrade1owned.innerHTML = accessoryUpgradesOwned[0];
  accessoryupgrade1cost.innerHTML = shortNum(accessoryUpgradeCosts[0]);
  document.getElementById("hat").style.visibility = "visible";
  document.getElementById("hat").style.left = "-8px";
  document.getElementById("hat").style.top = "5px";
  if(accessoryUpgradeNum !== 1){
    accessoryUpgradeNum = 1;
  }
  document.getElementById("hat").src = accessories[accessoryUpgradeNum];
}

function accessoryupgrade2() {
  clicknum += 3000000;
  idlenum += 300000;
  amongusnum -= accessoryUpgradeCosts[1];
  accessoryUpgradeCosts[1] *= upgradechange;
  updateScore();
  accessoryUpgradesOwned[1] += 1;
  accessoryupgrade2owned.innerHTML = accessoryUpgradesOwned[1];
  accessoryupgrade2cost.innerHTML = shortNum(accessoryUpgradeCosts[1]);
  document.getElementById("hat").style.visibility = "visible";
  document.getElementById("hat").style.left = "-8px";
  document.getElementById("hat").style.top = "5px";
  if(accessoryUpgradeNum !== 2){
    accessoryUpgradeNum = 2;
  }
  document.getElementById("hat").src = accessories[accessoryUpgradeNum];
}

function accessoryupgrade3() {
  idlenum += 10000000;
  clicknum += 1000000000;
  amongusnum -= accessoryUpgradeCosts[2];
  accessoryUpgradeCosts[2] *= upgradechange;
  updateScore();
  accessoryUpgradesOwned[2] += 1;
  accessoryupgrade3owned.innerHTML = accessoryUpgradesOwned[2];
  accessoryupgrade3cost.innerHTML = shortNum(accessoryUpgradeCosts[2]);
  document.getElementById("hat").style.visibility = "visible";
  if(accessoryUpgradeNum !== 3){
    accessoryUpgradeNum = 3;
  }
  document.getElementById("hat").src = accessories[accessoryUpgradeNum];
  document.getElementById("hat").style.left = "5px";
  document.getElementById("hat").style.top = "10px";
}

function accessoryupgrade4() {
  clicknum += 100000000000;
  idlenum += 1000000000000;
  amongusnum -= accessoryUpgradeCosts[3];
  accessoryUpgradeCosts[3] *= upgradechange;
  accessoryUpgradesOwned[3] += 1;
  accessoryupgrade4owned.innerHTML = accessoryUpgradesOwned[3];
  accessoryupgrade4cost.innerHTML = shortNum(accessoryUpgradeCosts[3]);
  document.getElementById("hat").style.visibility = "visible";
  if(accessoryUpgradeNum !== 4){
    accessoryUpgradeNum = 4;
  }
  document.getElementById("hat").src = accessories[accessoryUpgradeNum];
  document.getElementById("hat").style.left = "5px";
  document.getElementById("hat").style.top = "10px";
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
    if(accessoryUpgradeNum >= 3){
      document.getElementById("hat").style.left = "5px";
      document.getElementById("hat").style.top = "10px";
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
    for(let i=0; i<clickUpgradeCosts.length-1; i++){
      clickUpgradeCosts[i] *= upgradechange ** clickUpgradesOwned[i];
      if(clickUpgradesOwned[i] != 0){
        clickUpgrades[i].style.display = "flex";
        clickUpgrades[i+1].style.display = "flex";
      }
    }
    for(let i=0; i<idleUpgradeCosts.length-1; i++){
      idleUpgradeCosts[i] *= upgradechange ** idleUpgradesOwned[i];
      if(idleUpgradesOwned[i] != 0){
        idleUpgrades[i].style.display = "flex";
        idleUpgrades[i+1].style.display = "flex";
      }
    }
    for(let i=0; i<accessoryUpgradeCosts.length-1; i++){
      accessoryUpgradeCosts[i] *= upgradechange ** accessoryUpgradesOwned[i];
      if(accessoryUpgradesOwned[i] != 0){
        accessoryUpgrades[i].style.display = "flex";
        accessoryUpgrades[i+1].style.display = "flex";
      }
    }
    loadAmongusUpgrades();
    updateUpgradesOwned();
    updateUpgradeCosts();
    updateScore();
  }
}

function updateUpgradesOwned() {
  clickupgrade1owned.innerHTML = shortNum(clickUpgradesOwned[0]);
  clickupgrade2owned.innerHTML = shortNum(clickUpgradesOwned[1]);
  clickupgrade3owned.innerHTML = shortNum(clickUpgradesOwned[2]);
  clickupgrade4owned.innerHTML = shortNum(clickUpgradesOwned[3]);
  idleupgrade1owned.innerHTML = shortNum(idleUpgradesOwned[0]);
  idleupgrade2owned.innerHTML = shortNum(idleUpgradesOwned[1]);
  idleupgrade3owned.innerHTML = shortNum(idleUpgradesOwned[2]);
  idleupgrade4owned.innerHTML = shortNum(idleUpgradesOwned[3]);
  accessoryupgrade1owned.innerHTML = shortNum(accessoryUpgradesOwned[0]);
  accessoryupgrade2owned.innerHTML = shortNum(accessoryUpgradesOwned[1]);
  accessoryupgrade3owned.innerHTML = shortNum(accessoryUpgradesOwned[2]);
  accessoryupgrade4owned.innerHTML = shortNum(accessoryUpgradesOwned[3]);

}

function updateUpgradeCosts() {
  clickupgrade1cost.innerHTML = shortNum(clickUpgradeCosts[0]);
  clickupgrade2cost.innerHTML = shortNum(clickUpgradeCosts[1]);
  clickupgrade3cost.innerHTML = shortNum(clickUpgradeCosts[2]);
  clickupgrade4cost.innerHTML = shortNum(clickUpgradeCosts[3]);
  idleupgrade1cost.innerHTML = shortNum(idleUpgradeCosts[0]);
  idleupgrade2cost.innerHTML = shortNum(idleUpgradeCosts[1]);
  idleupgrade3cost.innerHTML = shortNum(idleUpgradeCosts[2]);
  idleupgrade4cost.innerHTML = shortNum(idleUpgradeCosts[3]);
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