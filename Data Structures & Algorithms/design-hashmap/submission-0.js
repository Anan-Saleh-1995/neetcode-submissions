class MyHashMap {
    constructor() {
        this.obj = {};
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        this.obj = { ...this.obj, ...{[key]: value}};
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (this.obj[key]) {
        return this.obj[key];
        } else {
            return -1;
        }
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        delete this.obj[key];
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
