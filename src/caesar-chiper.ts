export function caesarChiper(val: string, num: number): string {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  num = num % 26;

  return val
    .toLowerCase()
    .split("")
    .map((char, index) => {
      if (char === "") {
        return char;
      }

      const currIndex = alphabet.indexOf(char);
      let newIndex = currIndex + num;
      if (newIndex > 25) {
        newIndex -= 26;
      }
      if (newIndex < 0) {
        newIndex = 26 + currIndex;
      }
      if (val[index] === char.toUpperCase()) {
        return alphabet[newIndex].toUpperCase();
      }
      return alphabet[newIndex];
    })
    .join("");
}
