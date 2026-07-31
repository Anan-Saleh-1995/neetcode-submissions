class Solution {
    /**
     * @param {string} path
     * @return {boolean}
     */
    isPathCrossing(path: string): boolean {
        let previouslyVisited: string = path[0];
        for (let i: number = 1; i < path.length; i++) {
            if (path.charAt(i) === previouslyVisited) {
                return true;
            } else {
                previouslyVisited = path.charAt(i);
            }
        }
        return false;
    }
}
