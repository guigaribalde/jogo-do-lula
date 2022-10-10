// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function shuffle(array: any[]): any[] {
  let currentIndex = array.length;
  let randomIndex;

  while (+currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // eslint-disable-next-line no-param-reassign
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
