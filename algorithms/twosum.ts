export function twoSum(numArray: Array<number>, sum: number): Array<number[]> {
  let pairs = [];
  let hashtable: Array<number> = [];

  for (let i = 0; i < numArray.length; i++) {
    const currNum = numArray[i];
    const counterPart = sum - currNum;

    if (hashtable.indexOf(counterPart) !== -1) {
      pairs.push([currNum, counterPart]);
    }
    hashtable.push(currNum);
  }

  return pairs;
}

