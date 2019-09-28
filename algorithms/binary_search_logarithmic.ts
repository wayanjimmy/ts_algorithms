function binarySearchRec(
  arrayNum: number[],
  key: number,
  low: number,
  high: number
) {
  if (low > high) {
    return -1;
  }

  let mid = low + Math.floor((high - low) / 2);

  if (arrayNum[mid] === key) {
    return mid;
  } else if (key < arrayNum[mid]) {
    return binarySearchRec(arrayNum, key, low, mid - 1);
  } else if (key > arrayNum[mid]) {
    return binarySearchRec(arrayNum, key, mid + 1, high);
  }
}

export function binarySearch(arrayNum: number[], key: number): boolean {
  return binarySearchRec(arrayNum, key, 0, arrayNum.length - 1);
}
