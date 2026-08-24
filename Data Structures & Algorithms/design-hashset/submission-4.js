class MyHashSet {
    constructor(initial) {
        this.init = initial;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        if (!this.init) {
            this.init = [key];
        } else {
            this.init.push(key);
        }
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        this.init = this.init?.filter((i) => i !== key);
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        return this.init?.includes(key) || false;
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
