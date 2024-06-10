var productExceptSelf = function(nums) {
    const n = nums.length;
    const left = Array(n).fill(1);
    const right = Array(n).fill(1);
    const output = Array(n).fill(1);

    // Fill left array
    for (let i = 1; i < n; i++) {
        left[i] = left[i - 1] * nums[i - 1];
    }

    // Fill right array
    for (let i = n - 2; i >= 0; i--) {
        right[i] = right[i + 1] * nums[i + 1];
    }

    // Fill output array
    for (let i = 0; i < n; i++) {
        output[i] = left[i] * right[i];
    }

    return output;
};