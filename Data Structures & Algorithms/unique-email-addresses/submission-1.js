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
            const domainNameSplit = domainName.split('.');
            const localNameSplit = localName.split('+');
            const localNameSplitSplitted = localNameSplit[0].split('.');
            let newString;
            for (let j = 0; j<localNameSplitSplitted.length;j++) {
                newString = newString ? newString+localNameSplitSplitted[j] : localNameSplitSplitted[j];
            }
            let newString2;
            for (let k = 0; k<domainNameSplit.length;k++) {
                newString2 = newString2 ? newString2+domainNameSplit[k] : domainNameSplit[k];
            }
            console.log(newString2);
            console.log(newString, domainName);
            if (!set.has(newString) || !set.has(domainName)) {
                if (newString.length) {
                    count++;
                    set.add(domainName);
                } else {
                set.add(newString);

                }
            }
        }
        return count;
    }
}
