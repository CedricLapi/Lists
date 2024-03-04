

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addFront(val) {
        var new_node = new Node(val);

        if (!this.head) {
            this.head = new_node;
        } else {
            new_node.next = this.head;
            this.head = new_node;
        }

        return this.head.data;
    }

    remove(val) {
        var current_node = this.head;
        var previous_node = null;

        

        if (current_node.data === val) {
            this.head = current_node.next;
            return current_node.data;
        }

        while (current_node && current_node.data !== val) {
            previous_node = current_node;
            current_node = current_node.next;
        }

        if (!current_node) {
            return null; 
        }

        
        previous_node.next = current_node.next;
        return current_node.data;
    }

    value() {
        if (!this.head) {
            return null;
        }
        return this.head.data;
    }

    display() {
        let result = '';
        let runner = this.head;

        while (runner) {
            result += runner.data.toString() + ' ';
            runner = runner.next;
        }

        return result.trim();
    }


    
}

var list = new LinkedList();

list.addFront(6);
list.addFront(7);
list.addFront(8);
//list.remove(8);

//console.log(list.remove(8)); 
console.log(list.display()); 






