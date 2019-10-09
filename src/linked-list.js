const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    append(data) {
        let node1 = new Node(data);
        if (this.length == 0) {
            this._head = node1;
            this._tail = node1;
            this.length++;
        }
        else {
            node1.prev = this._tail;
            this._tail.next = node1;
            
            this._tail = node1;
            this.length++;
        }
        return this;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        let node = this._head;
        for(var i =0; i<this.length; i++) {
            if (i == index) {
               return node.data;
           }
           else { node = node.next;}
       }
    }

    insertAt(index, data) {
        if (index < 0 || this.length < index) {
            return false;
          }
          let node = new Node(data);

          if (index === 0) {
            node.next = this._head;
            this._head.prev = node;
    
            this._head = node;
          } else if (index === this.length) {
            this._tail.next = node;
            node.prev = this._tail;
    
            this._tail = node;
          } else {
            let current = this._head;
            let prev = null;
            let elem = 0;
    
            while (elem < index) {
              prev = current;
              current = current.next;
              elem++;
            }
    
            prev.next = node;
            node.prev = prev;
    
            node.next = current;
            current.prev = node;
          }
    
          this.length++;
        }

    

    isEmpty() { 
        return this.length === 0;
    }

    clear() {
        this._head.data = null;
        this._tail.data = null;
        this.length = 0;
        return this;
    }

    deleteAt(index) {
      let current = this._head;
      for (let i = 0; i <= index; i++) {
        if (this.length === 1 && index === 0) {
            this._head = null;
            this._tail = null;
            this.length = 0;
            return this;
        } else if (i === index) {
            current.prev.next =  current.next;
            current.next.prev =  current.prev;
            this.length--;
        } else {
            current =  current.next;
        }
    }
    return this;
        
    }

    reverse() {
      let arr = [];
      let node = this._head;
      for (var i = 0; i<this.length; i++) {
        arr[i] = node.data;
        node = node.next;
      }
      arr.reverse();
      node = this._head;
      for (var i = 0; i<this.length; i++) {
        node.data = arr[i];
        node = node.next;
      }
      return this;
    }

    indexOf(data) {
      let current = this._head;
      let index = 0;

      while (current) {
        if (current.data === data) {
          return index;
        }

        current = current.next;
        index++;
      }

      return -1;
    }
    
}

module.exports = LinkedList;
