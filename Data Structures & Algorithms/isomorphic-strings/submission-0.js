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
        const map = new Map();
        for (let i = 0; i < s.length; i++) {
            if (map.has(s[i])) {
                if (map.get(s[i]) !== t[i]) {
                    return false;
                }
            }
            // if (map.has(t[i])) {
            //     console.log('if', t[i], s[i]);
            //     if (map.get(t[i]) === s[i]) {
            //         continue;
            //     } else {
            //         return false;
            //     }
            // } else if (map.get(t[i]) === t[i]) {
            //     console.log('else', t[i], s[i]);
            //     if (map.get(t[i]) === s[i]) {
            //         return false;
            //     } else {
            //         continue;
            //     }
            // } else {
            //     const iterator = map.values();
            //     iterator.forEach((c) => console.log(c));
            // }
            map.set(s[i], t[i]);
        }
        console.log(map);
        return true;
    }
}
