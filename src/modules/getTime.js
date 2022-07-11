import WORLD from "../utils/constants.js";

/**
 * @returns array of time
 **/

function getTime() {
  let result = [];
  WORLD.forEach((area) => {
    let d = new Date();
    let utc = d.getTime() + d.getTimezoneOffset() * 60000;
    let nd = new Date(utc + 3600000 * area.offset);
    let obj = {
      city: area.city,
      time: nd.toLocaleTimeString(navigator.language, {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    result.push(obj);
  });

  return result;
}

export default getTime;
