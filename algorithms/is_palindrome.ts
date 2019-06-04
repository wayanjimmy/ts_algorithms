export function isPalindrome(val: string): boolean {
  let validCharacters = "abcdefghijklmnopqrstuvwxyz";
  let letters = val
    .toLowerCase()
    .split("")
    .filter(char => validCharacters.includes(char))
    .join("");
  return (
    letters ===
    letters
      .split("")
      .reverse()
      .join("")
  );
}
