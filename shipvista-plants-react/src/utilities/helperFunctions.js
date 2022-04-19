export const NeedWatering = (date) => {
  const sixHours = 1000 * 60 * 60 * 6;
  return new Date() - Date.parse(date) < sixHours;
};

export const lastWaterdTime = (date) => {
  let diffTime = new Date() - Date.parse(date);
  let mins = Math.round(diffTime / 60000);
  if (mins > 90) {
    return "More Than 90 Mins Ago";
  }
  return mins + " minutes ago";
};

export const isRestingAfterWatering = (date) => {
  const thirtySecs = 1000 * 30;
  return new Date() - Date.parse(date) < thirtySecs;
};
