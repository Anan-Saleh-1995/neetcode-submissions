class Solution {
    /**
     * @param {string} text
     * @return {number}
     */
    maxNumberOfBalloons(text) {
        const characters = new Set([
            'b', 'a', 'l', 'o', 'n'
        ]);

        const charsIndexes = {
            'b': Math.abs('a'.charCodeAt(0) - 'b'.charCodeAt(0)), // 1
            'a': Math.abs('a'.charCodeAt(0) - 'a'.charCodeAt(0)), // 1
            'l': Math.abs('a'.charCodeAt(0) - 'l'.charCodeAt(0)), // 2
            'o': Math.abs('a'.charCodeAt(0) - 'o'.charCodeAt(0)), // 2
            'n': Math.abs('a'.charCodeAt(0) - 'n'.charCodeAt(0)), // 1
        };

        const counter = new Array(Math.abs('a'.charCodeAt(0) - 'z'.charCodeAt(0)) + 1).fill(0);
        for (let i = 0; i < text.length; i++) {
            if (characters.has(text[i])) {
                counter[Math.abs('a'.charCodeAt(0) - text[i].charCodeAt(0))]+=1;
            }
        }
        // ratio is 3 : 4
        // ratio is 6 : 8
        // ratio is 9 : 12
        let ratioX = 0;
        let ratioY = 0;
        for (let i = 0; i < counter.length; i++) {
            if (i === charsIndexes['b'] || i === charsIndexes['a'] || i === charsIndexes['n']) {
                let j = 0;
                while(j < counter[i]) {
                    ratioX++;
                    j++;
                }
            } else if (i === charsIndexes['o'] || i === charsIndexes['l']) {
                let j = 0;
                while(j < counter[i]) {
                    ratioY++;
                    j++;
                }
            }
        }
        console.log(ratioX % 3);
        console.log(ratioY % 4);
        if (ratioX < 3 || ratioY < 4) {
            return 0;
        }
        if (!(ratioX % 3) && !(ratioY % 4)) {
            return Math.floor((ratioX + ratioY) / 7);
        }

        let r = 1;
        let finalCount = 0;
        while (r < ratioY) {
            if ((r % 4) === 0) {
                finalCount+=1;
            }
            r++;
        }
        console.log(r);
        console.log(ratioX, ratioY, finalCount);
        return finalCount;
    }
}
