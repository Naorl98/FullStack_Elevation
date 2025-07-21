class Node {
    constructor(value) {
        this.value = value        
        this.leftChild = null       
        this.rightChild = null     
    }

    insertLeft(value) {
        if (!this.leftChild) {
            this.leftChild = new Node(value)
        } else {
            let newNode = new Node(value)
            newNode.leftChild = this.leftChild
            this.leftChild = newNode
        }
    }

    insertRight(value) {
        if (!this.rightChild) {
            this.rightChild = new Node(value)
        } else {
            let newNode = new Node(value)
            newNode.rightChild = this.rightChild
            this.rightChild = newNode
        }
    }
}
class BSNode {
    constructor(value) {
        this.value = value
        this.leftChild = null
        this.rightChild = null
    }

    insertNode(newVal) {
        if (!this.value) {
            this.value = newVal
        } else if (newVal > this.value && this.rightChild) {
            this.rightChild.insertNode(newVal)
        } else if (newVal <= this.value && this.leftChild) {
            this.leftChild.insertNode(newVal)
        } else if (newVal <= this.value) {
            this.leftChild = new BSNode(newVal)
        } else {
            this.rightChild = new BSNode(newVal)
        }
    }

    findNode(val) {
        if (this.value === val) return true
        if (val < this.value && this.leftChild) return this.leftChild.findNode(val)
        if (val > this.value && this.rightChild) return this.rightChild.findNode(val)
        return false
    }
    minValueNode(node) {
        let current = node
        while (current.leftChild !== null) {
            current = current.leftChild
        }
        return current
    }
    removeNode(parent, val) {
        if (val < this.value && this.leftChild) {
            this.leftChild = this.leftChild.removeNode(this, val)
            return this
        } else if (val > this.value && this.rightChild) {
            this.rightChild = this.rightChild.removeNode(this, val)
            return this
        } else if (this.value === val) {
            if (!this.leftChild && !this.rightChild) return null
    
            if (!this.leftChild) return this.rightChild
            if (!this.rightChild) return this.leftChild
    
            const minRight = this.minValueNode(this.rightChild)
            this.value = minRight.value
            this.rightChild = this.rightChild.removeNode(this, minRight.value)
            return this
        }
        return this
    }
    
}
