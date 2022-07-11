import convertTime12to24 from "../utils/convertTimeFormat.js";

function timePassed(value) {
  let time = value.time.split(" ")[0];

  let hours = convertTime12to24(value.time);
  let minutes = time.split(":")[1];
  //   let pctDayElapsed = (+hours * 3600 + (+minutes * 60) / 1000) / 86400;
  let pctDayElapsed = ((+hours + +minutes / 60) / 24) * 100 - 20;
  pctDayElapsed = Math.floor(pctDayElapsed);

  if (pctDayElapsed < 0) {
    pctDayElapsed += 100;
  }

  console.log(pctDayElapsed);

  const locationWrapper = `
        <div class="divider"></div>
        <div class="location__pallette" >
            <div class="location__one"  style="margin-left: -${pctDayElapsed}%">
                    <div class="bar__one"></div>
                    <div class="bar__two"></div>
                    <div class="bar__three"></div>
                    <div class="bar__four"></div>
                    <div class="bar__five"></div>
                </div>
                <div class="location__two">
                    <div class="bar__one"></div>
                    <div class="bar__two"></div>
                    <div class="bar__three"></div>
                    <div class="bar__four"></div>
                    <div class="bar__five"></div>
            </div>
        </div>
    `;

  return locationWrapper;
}

export default timePassed;
