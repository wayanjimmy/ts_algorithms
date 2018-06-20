export function bubbleSort(num: Array<number>): Array<number> {
  let swapped = true;
  do {
    swapped = false;
    for (let i = 0; i < num.length; i++) {
      if (num[i + 1] < num[i]) {
        const temp = num[i];
        num[i] = num[i + 1];
        num[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return num;
}
