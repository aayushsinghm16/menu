function LinkedList() {
    this.head = null;
    this.tail = null;
    this.size = 0;
}

function Node(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
}
LinkedList.prototype.addToHead = function (value) {
    const newNode = new Node(value, this.head, null);
    if (this.head) this.head.prev = newNode;
    else this.tail = newNode;
    this.head = newNode;
    this.size++;
};
LinkedList.prototype.removeHead = function () {
    if (!this.head) return null;
    let value = this.head.value;
    this.head = this.head.next;

    if (this.head) this.head.prev = null;
    else this.tail = null;
    this.size--;
    return value;
}
LinkedList.prototype.search = function (searchValue) {
    let currentNode = this.head;

    while (currentNode) {
        if (currentNode.value === searchValue) return currentNode;
        currentNode = currentNode.next;
    }
    return null;
}

function add(l1, l2) {
    const list1 = new LinkedList();
    const list2 = new LinkedList();
    l1.forEach(element => {
        list1.addToHead(element)
    });
    l2.forEach(element => {
        list2.addToHead(element)
    });
    var carry = 0;
    var sum =[] ;
    for(var i = Math.max(list1.size,list2.size);i>0;i--){
        var a= 0,b=0;
        if(list1.head)
        a=list1.head.value
        if(list2.head)
        b=list2.head.value
        var total = a+b+carry;
        if (total > 9) {
            carry = 1;
            total -= 10;
        }
        else {
            carry = 0;
        }
        console.log(total,carry)
        list1.removeHead();
        list2.removeHead();
        sum.push(total)
    }
    if(carry)
    sum.push(carry)
    console.log(sum.reverse()) ;
    return sum.reverse();
}
add([1,2,4,9],[3,1,4])