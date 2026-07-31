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
            } else if (previouslyVisited === 'E' && path.charAt(i) === 'W') {
                return true;
            } else if (previouslyVisited === 'S' && path.charAt(i) === 'N') {
                return true;
            } else if (previouslyVisited === 'W' && path.charAt(i) === 'E') {
                return true;
            } else if (previouslyVisited === 'N' && path.charAt(i) === 'S') {
                return true;
            } else {
                previouslyVisited = path.charAt(i);
            }
        }
        return false;
    }
}
