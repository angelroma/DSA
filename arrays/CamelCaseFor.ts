function split(letters: string[]): string[] {
  let result: string[] = [];
  let end = letters.length - 1;

  for (let i = letters.length - 1; i < 0; i--) {
    let a = letters[i];
    if (a === a.toUpperCase()) {
      let b = letters.splice(i, end).join("");
      result.push(b);
      end = i;
    }
  }

  return result;
}

console.log(split(["C", "o", "M", "c", "r"]));
