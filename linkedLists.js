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
        var new_code = new Node(val);

        if(!this.head){

            this.head = new_code;
            return this.head;

        } else{

            new_code.next = this.head;
            this.head = new_code;
            return this.head;
        }

        


    }


    remove(val){
        var current_node = this.head;
        var previous_node = null;

        if(!current_node){
            return;

        } 
        
        if(current_node.data === val ){

            this.head = current_node.next;
            

            return this.head;
            
        } 
        
        
        

            while(current_node.data !== val){
            previous_node = current_node;
            current_node = current_node.next;
        }


        

        previous_node.next = current_node.next;

    

    
}
}



var list = new LinkedList();



list.addFront(6);
list.addFront(7);
list.addFront(8);

list.remove(8);

console.log(list);
