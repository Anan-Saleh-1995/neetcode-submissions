class Solution {
    /**
     * @param {number[]} flowerbed
     * @param {number} n
     * @return {boolean}
     */
    canPlaceFlowers(flowerbed, n) {
        let counter = 0;
        let flagfront = 0;
        let flagback = 0;
        if (flowerbed.length === 1 && flowerbed[0] === 0) {
            return true;
        }
        if (flowerbed[0] === 0 && flowerbed[1] === 0) {
            counter++;
            flagfront = 1;
        }
        if (flowerbed[flowerbed.length - 1] === 0 && flowerbed[flowerbed.length - 2] === 0) {
            counter++;
            flagback = 1;
        }
        let left = 0;
        let right = flowerbed.length;
        if (flagfront) {
            left = 2;
        }

        if (flagback) {
            right = flowerbed.length - 3;
        }
        while(left <= right) {
            if (flowerbed[left] === 0) {
                if (flowerbed[left + 1] === 0) {
                    if (flowerbed[left + 2] === 0) {
                        counter += 1;
                        left += 2;
                        continue;
                    }
                    left+=2;
                    continue;
                }
            }
            left++;
        }
        if (counter >= n) {
            return true;
        } else {
            return false;
        }
    }
}
