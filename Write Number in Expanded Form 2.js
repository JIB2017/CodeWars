function expandedForm2(num) {
  let array = num.toString().split(".");
  let nums = array[0].split("").reverse();
  let nums2 = array[1];
  let j = 1;
  let k = 10;
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] * j !== 0) {
      result.push(nums[i] * j);
    }
    j *= 10;
  }

  result = result.reverse();

  for (let i = 0; i < nums2.length; i++) {
    if (nums2[i] / k !== 0) {
      result.push(`${nums2[i]}/${k}`);
    }
    k *= 10;
  }
  return result.join(" + ");
}
