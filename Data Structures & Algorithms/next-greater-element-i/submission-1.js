class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    nextGreaterElement(nums1, nums2) {
        // brute force way
        const result = [];
        for (let i = 0; i < nums1.length; i++) {
            for (let j = 0; j < nums2.length; j++) {
                if (nums1[i] === nums2[j]) {
                    if (j === nums2.length - 1) {
                        result.push(-1);
                    } else {
                        let counter = j + 1;
                        while(counter < nums2.length) {
                            if (nums2[counter] > nums1[i]) {
                                result.push(nums2[counter]);
                                break;
                            }
                            counter++;
                        }
                        if (counter === nums2.length) {
                            if (nums1[i] === nums2[counter]) {
                                result.push(nums2[counter]);
                            } else {
                                result.push(-1);
                            }
                        }
                    }
                }
            }
        }
        return result;
    }
}
