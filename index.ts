import fizzBuzz from './412_fizz_buzz';
import bubbleSort from './1_bubble_sort';
import runningSum from './1480_running_sum';
import canConstruct from './383_ransom_note';
import stepsToZero from './1342_steps_to_zero';
import selectionSort from './2_selection_sort';
import insertionSort from './3_insertion_sort';
import middleNode from './876_mid_of_linked_list';
import mergeSortedArray from './88_merge_sorted_arrays';
import maximumWeatlth from './1672_richest_customer_wealth';

function main(data: { problem: number; input: any }) {
  switch (data.problem) {
    case 1480:
      return runningSum(data.input);

    case 1672:
      return maximumWeatlth(data.input);

    case 412:
      return fizzBuzz(data.input);

    case 1342:
      return stepsToZero(data.input);

    case 876:
      return middleNode(data.input);

    case 383:
      return canConstruct(data.input.ransomNote, data.input.magazine);

    case 1:
      return bubbleSort(data.input);

    case 2:
      return selectionSort(data.input);

    case 3:
      return insertionSort(data.input);

    case 88:
      return mergeSortedArray(
        data.input.nums1,
        data.input.m,
        data.input.nums2,
        data.input.n
      );
  }
}
