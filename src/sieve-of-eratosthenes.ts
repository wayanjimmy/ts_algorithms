export function sieveOfEratosThenes(n: number): Array<number> {
  const primes = Array.from({ length: n }, () => true);

  primes[0] = false;
  primes[1] = false;

  for (let i = 2; i <= Math.sqrt(n); i += 2) {
    for (let j = 2; j * i <= n; j++) {
      primes[i * j] = false;
    }
  }

  return primes
    .map((isPrime, index) => {
      if (isPrime) {
        return index;
      }
      return -1;
    })
    .filter(value => value > 0);
}
