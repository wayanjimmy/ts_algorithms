export function sieveOfEratosThenes(num: number): Array<number> {
  const arrInBool = Array.from({ length: num }, () => true);

  if (num > 2) {
    for (let i = 0; i < 2; i++) {
      arrInBool[i] = false;
    }
  }

  for (let i = 2; i <= num; i += 2) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        arrInBool[i] = false;
        continue;
      }
    }
  }

  return arrInBool
    .map((isPrime, index) => {
      if (isPrime) {
        return index;
      }
      return -1;
    })
    .filter(value => value > 0);
}
