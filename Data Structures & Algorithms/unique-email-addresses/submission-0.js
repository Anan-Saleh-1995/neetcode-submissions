class Solution {
    /**
     * @param {string[]} emails
     * @return {number}
     */
    numUniqueEmails(emails) {
        let count = 0;
        for(let i = 0; i < emails.length; i++) {
            const [localName, domainName] = emails[i].split('@');
            const domainNameSplit = domainName.split('.');
            if (domainNameSplit.length === 2) {
                count++;
            }
        }
        return count;
    }
}
