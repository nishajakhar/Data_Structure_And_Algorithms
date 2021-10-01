const maxSumCrossingSubArray = (nums, start, end, mid) => {
  console.log('I am crossing subarray params......', start, ' - ', end, mid);

  let leftSum = 0;
  let rightSum = 0;
  let sum = 0;
  for (let i = start; i <= mid; i++) {
    sum += nums[i];
    if (sum > leftSum) leftSum = sum;
  }
  sum = 0;
  for (let j = mid + 1; j <= end; j++) {
    sum += nums[j];
    if (sum > rightSum) rightSum = sum;
  }
  console.log('I am crossing subarray result.....', leftSum, rightSum);

  return Math.max(leftSum + rightSum, Math.max(leftSum, rightSum));
};
let count = 0;
const maxSubArray = (nums, start, end) => {
  console.log('I am count..', ++count, start + ' ** ' + end);
  if (start == end) {
    console.log('I base case......', start, end);
    return nums[start];
  }
  let mid = parseInt((start + end) / 2);
  console.log('I am mid......', start, ' ** ', end, mid);

  let LSS = maxSubArray(nums, start, mid);
  console.log('I am LSS......', start, ' ** ', end, LSS);

  let RSS = maxSubArray(nums, mid + 1, end);
  console.log('I am RSS......', start, ' ** ', end, RSS);

  let CSS = maxSumCrossingSubArray(nums, start, end, mid);
  console.log('I am CSS......', start, ' ** ', end, CSS);

  if (LSS > RSS && LSS > CSS) return LSS;
  else if (RSS > CSS) return RSS;
  else return CSS;
};

console.log(maxSubArray([-2, -5, 6, -2, -3, 1, 5, -6], 0, 7));
