export const dropZeros = (value: number, decimalPoints = 2) => parseFloat(value.toFixed(decimalPoints));

const MAX_ITERATIONS = 200;
const ERROR = 0.01;
const MAX_DEN = 8;
const DEN_TO_SKIP = 7;

// https://stackoverflow.com/questions/5124743/algorithm-for-simplifying-decimal-to-fractions/5128558#5128558
export const getFractions = (value: number): [number, number, number] | undefined => {
  const int = Math.floor(value);

  const valueWithoutInt = value - int;

  if (valueWithoutInt < ERROR) {
    return [int, 0, 1];
  } else if (1 - ERROR < valueWithoutInt) {
    return [int + 1, 0, 1];
  }

  let lowerNum = 0;
  let lowerDen = 1;
  let upperNum = 1;
  let upperDen = 1;

  for (let i = 0; i < MAX_ITERATIONS; i++) {
    const middleNum = lowerNum + upperNum;
    const middleDen = lowerDen + upperDen;

    if (middleDen > MAX_DEN) {
      break;
    }

    if (middleDen * (valueWithoutInt + ERROR) < middleNum) {
      upperNum = middleNum;
      upperDen = middleDen;
    } else if (middleDen * (valueWithoutInt - ERROR) > middleNum) {
      lowerNum = middleNum;
      lowerDen = middleDen;
    } else {
      break;
    }
  }

  const resultDen = lowerDen + upperDen;

  if (resultDen > MAX_DEN || resultDen === DEN_TO_SKIP) {
    return;
  }

  return [int, lowerNum + upperNum, resultDen];
};
