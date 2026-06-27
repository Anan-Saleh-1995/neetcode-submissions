class Solution {
    hasDuplicate(nums: number[]): boolean {
        // can be done better with set since a key is not important here
        const seen = new Map<number, number>();
        for (let i = 0; i < nums.length; i++) {
            if(seen.has(nums[i])) {
                return true;
            } else {
                seen.set(nums[i], i);
            }
        }
        return false;
    }    
}
