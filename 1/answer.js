var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        const result = target - nums[i];
        const pos = nums.indexOf(result, i + 1);
        if (pos !== -1) {
            return [i, pos];
        }
    }
};
