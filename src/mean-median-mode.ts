interface INumberMap {
  [s: number]: number;
}

function getMean(arr: Array<number>): number {
  return arr.reduce((carrier, value) => carrier + value, 0) / arr.length;
}

function getMedian(arr: Array<number>): number {
  arr = arr.sort((a, b) => a - b);
  if (arr.length % 2 === 0) {
    const index = Math.floor(arr.length / 2);
    return (arr[index] + arr[index - 1]) / 2;
  }
  const index = Math.ceil(arr.length / 2);
  return arr[index];
}

function getMode(arr: Array<number>): number[] {
  let freq: INumberMap = {};
  arr.forEach(value => {
    if (!freq[value]) {
      freq[value] = 0;
    }
    freq[value]++;
  });

  let maxFrequency = 0;
  let mode: number[] = [];
  for (const i in freq) {
    if (freq[i] > maxFrequency) {
      mode = [+i];
      maxFrequency = freq[i];
    } else if (freq[i] === maxFrequency) {
      mode.push(+i);
    }
  }

  if (mode.length === Object.keys(freq).length) {
    return [];
  }

  return mode.map(value => +value);
}

interface MeanMedianMode {
  mean: number;
  median: number;
  mode: number[];
}

export function meanMedianMode(arr: Array<number>): MeanMedianMode {
  return {
    mean: getMean(arr),
    median: getMedian(arr),
    mode: getMode(arr)
  };
}
