function displayTime(timeObj) {
  const cityWrapper = `
        <div class="time">
            ${timeObj.time}
        </div>
    `;

  return cityWrapper;
}

export default displayTime;
