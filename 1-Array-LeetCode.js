var twoSum = function (nums, target) {
  const map = new Map();
  for (const index in nums) {
    const pairTarget = target - nums[index];
    if (map.has(pairTarget)) return [index, map.get(pairTarget)];
    map.set(nums[index], index);
  }
};
