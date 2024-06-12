var maxArea = function(height) {
    let mx = 0;
    let l = 0;
    let r = height.length - 1;
    while (l < r) {
        mx = Math.max(mx, Math.min(height[l], height[r]) * (r - l));
        if (height[l] < height[r]) {
            l += 1;
        } else if (height[r] < height[l]) {
            r -= 1;
        } else {
            l += 1;
            r -= 1;
        }
    }
    return mx;
};