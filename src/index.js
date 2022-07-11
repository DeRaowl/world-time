import getTime from "./modules/getTime.js";
import displayCity from "./modules/displayCity.js";
import displayTime from "./modules/displayTime.js";
import timePassed from "./modules/timePassed.js";

const container = document.getElementById("app");

/**
 * @returns a contructed DOM displaying world time
 * **/

function init() {
  let arrayOfTime = getTime();

  arrayOfTime.forEach((value) => {
    const mainContainer = document.createElement("div");
    mainContainer.classList.add("main__container");

    const cityWrapper = document.createElement("div");
    cityWrapper.classList.add("city__wrapper");
    cityWrapper.innerHTML = displayCity(value);
    mainContainer.append(cityWrapper);

    // mainContainer.innerHTML = displayCity(value);
    const mainWrapper = document.createElement("div");
    mainWrapper.classList.add("main__wrapper");
    mainWrapper.innerHTML = displayTime(value);
    mainWrapper.innerHTML += timePassed(value);

    // mainContainer.innerHTML += displayTime(value);
    // mainContainer.innerHTML += timePassed(value);
    mainContainer.append(mainWrapper);
    container.append(mainContainer);
  });
}

window.addEventListener("load", init);
