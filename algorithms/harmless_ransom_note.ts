interface IMagazineMap {
  [s: string]: number;
}

export function harmlessRansomNote(noteText: string, magazineText: string) {
  let noteArr = noteText.split(" ");
  let magazineArr = magazineText.split(" ");
  let magazineObject: IMagazineMap = {};

  magazineArr.forEach(word => {
    if (!magazineObject[word]) {
      magazineObject[word] = 0;
    }
    magazineObject[word]++;
  });

  let isNotePossible = true;
  noteArr.forEach(word => {
    if (magazineObject[word]) {
      magazineObject[word]--;

      if (magazineObject[word] < 0) {
        isNotePossible = false;
      }
    } else {
      isNotePossible = false;
    }
  });

  return isNotePossible;
}
