class Solution {
    /**
     * @param {string[]} words
     * @param {number} maxWidth
     * @return {string[]}
     */
    fullJustify(words, maxWidth) {
        // console.log(words);

        const map = {};
        let output = [];

        if (words.length === 1) {
            output.push(words[0]);

            // CHANGED: compare the word's length with maxWidth.
            if (words[0].length === maxWidth) {
                return output;
            } else {
                for (
                    let i = words[0].length;
                    i < maxWidth;
                    i++
                ) {
                    // CHANGED: add spaces to the same string.
                    output[0] += ' ';
                }

                return output;
            }
        } else {
            // ['aaaaaaaaaaaaaaaaaaaa', 'a', 'a']
            // maxWidth is 20

            let countWords = 1;

            /*
             * Your original preparation phase remains.
             *
             * It creates:
             * map[index] = original word length
             *
             * It also creates the padded-word experiment in output.
             */
            for (let i = 0; i < words.length; i++) {
                if (words[i].length === maxWidth) {
                    output.push(words[i]);

                    // CHANGED:
                    // The exact-width word must still enter map,
                    // otherwise it disappears from groupsMap.
                    map[i] = words[i].length;
                    countWords++;

                    continue;
                }

                map[i] = words[i].length;
                countWords++;

                let str = words[i];
                let countSpaces = 0;

                for (
                    let j = words[i].length;
                    j < maxWidth;
                    j++
                ) {
                    str += ' ';
                    countSpaces++;
                }

                // console.log(countSpaces);

                countSpaces = 0;
                output.push(str);
            }

            let counter = 0;
            let startIndex = 0;
            let endIndex = 0;
            let groupsMap = {};
            let wordsAmount = 0;

            /*
             * Your grouping phase:
             *
             * counter     = letters currently in this group
             * wordsAmount = words currently in this group
             * startIndex  = first word in this group
             * endIndex    = final word in a completed group
             */
            Object.entries(map).map(([index, count]) => {
                console.log(index, count);

                const currentIndex = Number(index);
                const currentWordLength = Number(count);

                /*
                 * CHANGED:
                 *
                 * If the current group already has 3 words,
                 * adding another word creates 3 required gaps.
                 *
                 * Therefore, before adding the next word:
                 *
                 * line length =
                 * current letters
                 * + next word
                 * + minimum gaps
                 */
                const minimumSpaces = wordsAmount;

                const possibleLineLength =
                    counter +
                    currentWordLength +
                    minimumSpaces;

                if (possibleLineLength > maxWidth) {
                    /*
                     * The current word does not fit.
                     *
                     * Close the previous group immediately
                     * before the current word.
                     */
                    endIndex = currentIndex - 1;
                    groupsMap[startIndex] = endIndex;

                    /*
                     * The current word begins the next group.
                     */
                    startIndex = currentIndex;
                    counter = currentWordLength;
                    wordsAmount = 1;

                    console.log({
                        possibleLineLength,
                        startIndex,
                        endIndex,
                        counter,
                        wordsAmount
                    });
                } else {
                    /*
                     * The current word fits in the active group.
                     */
                    counter += currentWordLength;
                    wordsAmount++;

                    console.log({
                        possibleLineLength,
                        startIndex,
                        counter,
                        wordsAmount
                    });
                }
            });

            /*
             * CHANGED:
             *
             * The loop closes a group only when another word
             * cannot fit.
             *
             * No word comes after the final group to trigger
             * that condition, so save it manually.
             */
            groupsMap[startIndex] = words.length - 1;

            // console.log(countWords);
            // console.log(map);

            let outputReal = [];

            /*
             * Your original rendering phase remains:
             *
             * Read every start/end group and create one line.
             */
            Object.entries(groupsMap).map(([start, end]) => {
                console.log(start, end);

                const numericStart = Number(start);
                const numericEnd = Number(end);

                /*
                 * CHANGED:
                 *
                 * The final line has one space between words,
                 * with all remaining spaces added on the right.
                 */
                if (numericEnd === words.length - 1) {
                    const lastLine = words
                        .slice(numericStart, numericEnd + 1)
                        .join(' ');

                    const paddedLastLine =
                        lastLine +
                        ' '.repeat(maxWidth - lastLine.length);

                    outputReal.push(paddedLastLine);

                    return;
                }

                let counter = numericStart;

                /*
                 * Your one-word-line case.
                 */
                if (numericStart === numericEnd) {
                    let howMuchToRepeat =
                        maxWidth -
                        words[numericStart].length;

                    let word = words[numericStart];

                    const storeWord =
                        word +
                        ' '.repeat(howMuchToRepeat);

                    outputReal.push(storeWord);
                } else {
                    /*
                     * Your first pass:
                     * calculate the total number of letters.
                     */
                    let combinedLength = 0;

                    console.log(
                        counter < numericEnd,
                        counter,
                        numericEnd
                    );

                    while (counter <= numericEnd) {
                        combinedLength +=
                            words[counter].length;

                        console.log(
                            "words[counter].length",
                            words[counter].length
                        );

                        counter++;
                    }

                    console.log({ combinedLength });

                    let spacesLeft =
                        maxWidth - combinedLength;

                    /*
                     * Your original overall-space calculation
                     * remains for logging and inspection.
                     */
                    let distrubedSpacesOverAll =
                        Math.round(
                            spacesLeft /
                            (numericEnd - numericStart)
                        );

                    console.log({
                        distrubedSpacesOverAll
                    });

                    console.log({ spacesLeft });

                    let text = '';
                    counter = numericStart;

                    /*
                     * Your second pass:
                     * build the actual line.
                     */
                    while (counter <= numericEnd) {
                        text += words[counter];

                        console.log({ text });

                        /*
                         * CHANGED:
                         *
                         * Object.entries gives end as a string,
                         * so compare against numericEnd.
                         *
                         * Also, the final word receives no gap.
                         */
                        if (counter !== numericEnd) {
                            /*
                             * CHANGED:
                             *
                             * Recalculate after every gap:
                             *
                             * remaining spaces
                             * ÷ remaining gaps
                             *
                             * Math.ceil gives extra spaces
                             * to the leftmost gaps.
                             */
                            const remainingGaps =
                                numericEnd - counter;

                            const spacesAmount =
                                Math.ceil(
                                    spacesLeft /
                                    remainingGaps
                                );

                            const spacesToAdd =
                                ' '.repeat(spacesAmount);

                            text += spacesToAdd;

                            /*
                             * CHANGED:
                             *
                             * Subtract exactly the number of
                             * spaces added to this gap.
                             */
                            spacesLeft -=
                                spacesToAdd.length;
                        } else {

                        }

                        counter++;
                    }

                    outputReal.push(text);

                    /*
                     * Your original experimental condition
                     * remains.
                     */
                    if (
                        combinedLength %
                        ((end - start) + 1) !== 0
                    ) {

                    } else {
                        // while(counter < end) {

                        // }
                    }
                }
            });

            console.log(groupsMap);
            console.log(outputReal);

            return outputReal;
        }

        /*
         * Your original experimental section remains.
         *
         * Because both branches above return, this section
         * currently cannot be reached, but it is preserved
         * as requested.
         */
        let str = "";

        for (let i = 0; i < words.length; i++) {
            /**
             * what is the length of the words[i] ?
             * can it fit inside str?
             * no thats not the question
             * assuming str is still below the maxWidth
             * does the length of the words[i] fit and still
             * be under maxWidth?
             */

            str += words[i];

            if (str.length >= maxWidth) {
                console.log(str);
                output.push(str);
                str = "";
                continue;
            }

            for (
                let j = 0;
                j < words[i].length;
                j++
            ) {
                /**
                 * to solve this i had to go deep into each word
                 * zoom in, a new unlocked way to see things
                 * i must go microscope into this to solve it
                 */

                // console.log(words[i][j]);
            }

            // console.log(words[i]);

            // if (str.length < maxWidth) {
            //     let temp = str + words[i];

            //     if (temp.length > maxWidth) {
            //         continue;
            //     }

            //     str = str + words[i];
            // } else {
            //     output.push(str);
            //     str = "";
            // }
        }

        if (str.length > 0) {
            output.push(str);
        }

        return output;
    }
}