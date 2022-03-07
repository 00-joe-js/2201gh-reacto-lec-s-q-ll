class BinarySearchTree {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
        this.magnitude = 1;
    }

    insert(val) {
        const direction = val < this.value ? 'left' : 'right';
        if (this[direction]) {
            this[direction].insert(val);
        } else {
            this[direction] = new BinarySearchTree(val);
        }
        this.magnitude++;
    }

    contains(val) {
        if (this.value === val) return true;
        const direction = val < this.value ? 'left' : 'right';
        if (this[direction]) {
            return this[direction].contains(val);
        } else {
            return false;
        }
    }

    size() {
        return this.magnitude;
    }
}

module.exports = BinarySearchTree