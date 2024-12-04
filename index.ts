import runningSum from './1480_running_sum';
import maximumWeatlth from './1672_richest_customer_wealth';

function main(data: { problem: number; input: any }) {
  switch (data.problem) {
    case 1480:
      return runningSum(data.input);

    case 1672:
      return maximumWeatlth(data.input);
  }
}
