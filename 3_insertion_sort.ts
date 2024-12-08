// Sort an array
// Time Complexity O(n^2)
// Space Complexity O(1)

export default function insertionSort(array: number[]) {
  for (let i = 1; i < array.length; i++) {
    let j = i - 1;
    const temp = array[i];

    while (j > -1 && array[j] > temp) {
      array[j + 1] = array[j--]; // a[j] = a[j - 1]
    }

    // a[j - 1] = a[j]
    array[j + 1] = temp;
  }

  return array;
}
