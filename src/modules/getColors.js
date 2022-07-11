/**
 * @params time of each timeZone
 * @returns color according to HH
 * **/

import convertTime12to24 from "../utils/convertTimeFormat.js";

const getColor = (time) => {
  const currentHour = convertTime12to24(time);

  if (currentHour >= 5 && currentHour < 9) {
    return "#fcbf49";
  } else if (currentHour >= 9 && currentHour < 17) {
    return "#57cc99";
  } else if (currentHour >= 17 && currentHour < 21) {
    return "#fcbf49";
  } else {
    return "#212529";
  }
};

export default getColor;
