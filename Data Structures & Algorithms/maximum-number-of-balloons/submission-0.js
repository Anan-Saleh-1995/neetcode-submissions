class Solution {
    /**
     * @param {string} text
     * @return {number}
     */
    maxNumberOfBalloons(text) {
        const sizeOfArray = Math.abs('a'.charCodeAt(0) - 'z'.charCodeAt(0));
        const bIndex = Math.abs('a'.charCodeAt(0) - 'b'.charCodeAt(0));
        const aIndex = Math.abs('a'.charCodeAt(0) - 'a'.charCodeAt(0));
        const lIndex = Math.abs('a'.charCodeAt(0) - 'l'.charCodeAt(0));
        const oIndex = Math.abs('a'.charCodeAt(0) - 'o'.charCodeAt(0));
        const nIndex = Math.abs('a'.charCodeAt(0) - 'n'.charCodeAt(0));
        const array = new Array(sizeOfArray + 1).fill(0);
        console.log(array);
        let counter = 0;
        const counts = {
            b: 1,
            a: 1,
            l: 2,
            o: 2,
            n: 1
        }

        const sizeOfWord = 7;
        // so counter / 7 if its 1 thats 1 word if its 2 thats two words
        console.log(8/7);
        // Number.isInteger(y / x)
        console.log(sizeOfArray, bIndex, aIndex);

        for (let i = 0; i < text.length; i++) {
            console.log(text[i].charCodeAt(0));
            array[Math.abs('a'.charCodeAt(0) - text[i].charCodeAt(0))]++;
        }

        for (let i = 0; i < array.length; i++) {
            if ((i === bIndex && array[i] === 0)|| (i === aIndex && array[i] === 0)|| (i === lIndex && array[i] === 0)|| (i === oIndex && array[i] === 0)|| (i === nIndex && array[i] === 0)) {
                return 0;
            }

            if ((i === bIndex) || (i === aIndex)|| (i === lIndex)|| (i === oIndex)|| (i === nIndex)) {
                let j = 0;
                while(j < array[i]) {
                    counter++;
                    j++;
                }
            }
        }

        return Math.trunc(counter / sizeOfWord);
    }
}
