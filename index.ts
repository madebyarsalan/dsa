import fizzBuzz from './412_fizz_buzz';
import bubbleSort from './1_bubble_sort';
import runningSum from './1480_running_sum';
import canConstruct from './383_ransom_note';
import stepsToZero from './1342_steps_to_zero';
import middleNode from './876_mid_of_linked_list';
import maximumWeatlth from './1672_richest_customer_wealth';
import selectionSort from './2_selection_sort';

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
  }
}
