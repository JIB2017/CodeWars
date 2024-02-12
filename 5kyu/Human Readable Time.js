function humanReadable(seconds) {
  let array = [];
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds % 3600) / 60);
  let restSeconds = seconds % 60;

  hours = (hours < 10 ? "0" : "") + hours;
  minutes = (minutes < 10 ? "0" : "") + minutes;
  restSeconds = (restSeconds < 10 ? "0" : "") + restSeconds;

  return `${hours}:${minutes}:${restSeconds}`;
}
