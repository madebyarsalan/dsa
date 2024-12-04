import runningSum from './1480_running_sum';

function main(data: { problem: number; input: any }) {
  switch (data.problem) {
    case 1480:
      return runningSum(data.input);

    default:
      break;
  }
}

const output = main({ problem: 1480, input: [3, 1, 2, 10, 1] });
console.log(output);
