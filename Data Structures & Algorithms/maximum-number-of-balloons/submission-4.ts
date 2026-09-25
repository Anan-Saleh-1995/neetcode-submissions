class Solution {
    /**
     * @param {string} text
     * @return {number}
     */
    maxNumberOfBalloons(text: string): number {
        const counts = new Map([
            ['b', 0],
            ['a', 0],
            ['l', 0],
            ['o', 0],
            ['n', 0],
        ]);

        for (let i = 0; i < text.length; i++) {
            if (counts.has(text[i])) {
                counts.set(text[i], counts.get(text[i])+1);
            }
        }
        let smallest = 0;
        let isFirst = true;

        for (const [character, count] of counts) {
            let capacity: number;

            if (character === 'l' || character === 'o') {
                capacity = Math.floor(count / 2);
            } else {
                capacity = count;
            }

            if (isFirst) {
                smallest = capacity;
                isFirst = false;
            } else if (capacity < smallest) {
                smallest = capacity;
            }
        }

        return smallest;
    }
}
