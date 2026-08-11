class Solution {
    /**
     * @param {string[]} words
     * @param {number} maxWidth
     * @return {string[]}
     */
    fullJustify(words, maxWidth) {
        const output = [];
        let start = 0;

        while (start < words.length) {
            let end = start;
            let combinedWordLength = 0;

            /*
             * Find the words belonging to the current line.
             *
             * end - start is the minimum number of spaces needed
             * between the words already selected and the next word.
             */
            while (end < words.length) {
                const minimumSpaces = end - start;

                const lineLength =
                    combinedWordLength +
                    words[end].length +
                    minimumSpaces;

                if (lineLength > maxWidth) {
                    break;
                }

                combinedWordLength += words[end].length;
                end++;
            }

            const wordsAmount = end - start;
            const spacesLeft = maxWidth - combinedWordLength;

            const isLastLine = end === words.length;
            const hasOneWord = wordsAmount === 1;

            let line = '';

            /*
             * Last line or a line containing one word:
             *
             * - One space between words.
             * - Remaining spaces go at the end.
             */
            if (isLastLine || hasOneWord) {
                line = words
                    .slice(start, end)
                    .join(' ');

                line += ' '.repeat(maxWidth - line.length);
            } else {
                /*
                 * Fully justified line:
                 *
                 * Divide spaces between the gaps.
                 * Extra spaces go into the leftmost gaps.
                 */
                const gaps = wordsAmount - 1;

                const spacesPerGap = Math.floor(
                    spacesLeft / gaps
                );

                let extraSpaces = spacesLeft % gaps;

                for (let i = start; i < end; i++) {
                    line += words[i];

                    const isFinalWord = i === end - 1;

                    if (!isFinalWord) {
                        let spacesToAdd = spacesPerGap;

                        if (extraSpaces > 0) {
                            spacesToAdd++;
                            extraSpaces--;
                        }

                        line += ' '.repeat(spacesToAdd);
                    }
                }
            }

            output.push(line);

            // The next line begins at the first unused word.
            start = end;
        }

        return output;
    }
}