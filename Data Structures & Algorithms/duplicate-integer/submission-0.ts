class Solution {
    hasDuplicate(nums: number[]): boolean {
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
