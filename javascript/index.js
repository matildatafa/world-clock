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

function updateMaldivesTime() {
  let maldivesElement = document.querySelector("#maldives");
  let maldivesDateElement = maldivesElement.querySelector(".date");
  let maldivesTimeElement = maldivesElement.querySelector(".time");
  let maldivesTime = moment().tz("Indian/Maldives");
  maldivesDateElement.innerHTML = maldivesTime.format("MMMM Do YYYY");
  maldivesTimeElement.innerHTML = `${maldivesTime.format(
    "h:mm:ss"
  )} <small>${maldivesTime.format("A")}</small>`;
}
function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date"> ${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )} <small>${cityTime.format("A")}</small></div>
        </div>
        <a href= "index.html"> All cities</a>`;
}
updateMaldivesTime();
setInterval(updateMaldivesTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
