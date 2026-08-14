class Solution {
    /**
     * @param {string[]} emails
     * @return {number}
     */
    numUniqueEmails(emails) {
        let count = 0;
        const set = new Set();
        for(let i = 0; i < emails.length; i++) {
            const [localName, domainName] = emails[i].split('@');
            const localNameSplit = localName.split('+');
            const localNameSplitSplitted = localNameSplit[0].split('.');
            let newString;
            for (let j = 0; j<localNameSplitSplitted.length;j++) {
                newString = newString ? newString+localNameSplitSplitted[j] : localNameSplitSplitted[j];
            }
            const normalizedEmail = newString + domainName;
            if (!set.has(normalizedEmail)) {
                set.add(normalizedEmail);
                count++;
            }
        }
        return count;
    }
}
