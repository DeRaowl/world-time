import getColor from "./getColors.js";

function displayCity(timeObj) {
  let bgColor = getColor(timeObj.time);
  const cityWrapper = `
        <div class="timezone__wrapper">
            <div class="timezone__color" style="background-color: ${bgColor}">
            </div>
            <div class="timezone__city">
                ${timeObj.city}
            </div>
        </div>
    `;

  return cityWrapper;
}

export default displayCity;
