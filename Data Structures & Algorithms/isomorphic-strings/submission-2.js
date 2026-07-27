class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isIsomorphic(s, t) {
        /**
         * so its not count 
         * and its not length of the map
         * chatgpt helped me understand that this is like interpreter
         * 
         * for example 
         * 
         * s = 'egg'
         * t = 'add'
         * 
         * s says e
         * t says a
         * 
         * e -> a
         * 
         * s says g
         * t says d
         * 
         * e -> d
         * 
         * s says g
         * t says d
         * 
         * wait i know that good
         * 
         * so its Isomorphic
         * 
         * s = 'foo'
         * t = 'bar'
         * 
         * s says f
         * t says b
         * 
         * great f -> b
         * 
         * s says o
         * t says a
         * 
         * great o -> a
         * 
         * s says o
         * t says r
         * 
         * wait not great because o -> a 
         * 
         * this is not isomorphic
         * 
         * 
         * is o already listed and pointing at something
         * if yes what is that something? and is it the same as what its presenting at the moment?
         * 
         */
        const map = {};
        for (let i = 0; i < s.length; i++) {
            if (map[s[i]]) {
                if (map[s[i]] !== t[i]) {
                    return false;
                }
            } else {
                const mapVals = Object.values(map);
                console.log(mapVals);
                console.log(s[i], t[i]);
                if (mapVals.includes(t[i])) {
                    return false;
                }
            }
            map[s[i]] = t[i];
        }
        console.log(map);
        return true;
    }
}
