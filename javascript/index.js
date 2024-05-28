function updateNewYorkTime() {
  let newYorkElement = document.querySelector("#new-york");
  let newYorkDateElement = newYorkElement.querySelector(".date");
  let newYorkTimeElement = newYorkElement.querySelector(".time");
  let newYorkTime = moment().tz("America/New_York");
  newYorkDateElement.innerHTML = newYorkTime.format("MMMM Do YYYY");
  newYorkTimeElement.innerHTML = `${newYorkTime.format(
    "h:mm:ss"
  )} <small>${newYorkTime.format("A")}</small>`;
}
updateNewYorkTime();
setInterval(updateNewYorkTime, 1000);

function updateParisTime() {
  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTime = moment().tz("Europe/Paris");
  parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
  parisTimeElement.innerHTML = `${parisTime.format(
    "h:mm:ss"
  )} <small>${parisTime.format("A")}</small>`;
}
updateParisTime();
setInterval(updateParisTime, 1000);

function updateTokyoTime() {
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoTime = moment().tz("Asia/Tokyo");
  tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
  tokyoTimeElement.innerHTML = `${tokyoTime.format(
    "h:mm:ss"
  )} <small>${tokyoTime.format("A")}</small>`;
}
updateTokyoTime();
setInterval(updateTokyoTime, 1000);

function updateMontrealTime() {
  let montrealElement = document.querySelector("#montreal");
  let montrealDateElement = montrealElement.querySelector(".date");
  let montrealTimeElement = montrealElement.querySelector(".time");
  let montrealTime = moment().tz("America/Toronto");
  montrealDateElement.innerHTML = montrealTime.format("MMMM Do YYYY");
  montrealTimeElement.innerHTML = `${montrealTime.format(
    "h:mm:ss"
  )} <small>${montrealTime.format("A")}</small>`;
}
updateMontrealTime();
setInterval(updateMontrealTime, 1000);
