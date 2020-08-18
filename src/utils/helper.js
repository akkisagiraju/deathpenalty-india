export function getColor(feature, stats, colorScale) {
  const stateStats = stats.find((stat) => stat['State '].trim() === feature.properties['st_nm']);
  if (!stateStats) {
    return 'grey';
  }
  return colorScale(parseInt(stateStats['Number of persons currently on death row']));
}

export function getNumber(feature, stats) {
  const stateStats = stats.find((stat) => stat['State '].trim() === feature.properties['st_nm']);
  if (!stateStats) {
    return 'No data';
  }
  return parseInt(stateStats['Number of persons currently on death row']);
}

export function getFrequency(property, data) {
  let frequencyObject = {};

  for (let person of data) {
    if (frequencyObject[person[property.trim()]]) {
      frequencyObject[person[property.trim()]]++;
    } else {
      frequencyObject[person[property.trim()]] = 1;
    }
  }

  return frequencyObject;
}
