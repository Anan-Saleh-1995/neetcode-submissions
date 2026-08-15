class Solution {
    /**
     * @param {string[]} emails
     * @return {number}
     */
    numUniqueEmails(emails: string[]): number {
        const set = new Set();
        for(let i = 0; i < emails.length; i++) {
            const [localName, domainName] = emails[i].split('@');
            const localNameSplit = localName.split('+');
            const normalizedLocal = localNameSplit[0].split('.').join('');
            const normalizedEmail = normalizedLocal + '@' + domainName;
            set.add(normalizedEmail);
        }
        return set.size;
    }
}
