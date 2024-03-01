//Fronts

//Add Front

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }

    addFront(val){

        let new_node = new Node(val);

            new_node.next = this.head;
            this.head = new_node;
            return this.head;

        
    }
}

var list = new LinkedList();

list.addFront(18);
list.addFront(5);
list.addFront(73);

console.log(list);