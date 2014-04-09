// Linked List
function Node(value)
{
    this.next = null;
    this.setNext = setNext;
    this.getNext = getNext;
    this.value = value;
}

function setNext(node)
{
    this.next = node;
}

function getNext()
{
    return this.next;
}

// Stack implemented with Linked List: x(top)-->y-->z
function Stack()
{
    this.push = push;
    this.pop = pop;
    this.isEmpty = isEmpty;
    this.toString = toString;
    this.top = null;
    this.foo = function() {
        print('foo');
    }
}


function push(item)
{
    if (this.top === null)
    {
        this.top = new Node(item);
    }
    else
    {
        var node = new Node(item);
        node.setNext(this.top);
        this.top = node;

    }
}

function pop()
{
    if (!this.isEmpty())
    {
        var prevTop = this.top;
        this.top = prevTop.getNext();
        return prevTop;
    }
}

function toString()
{
    var buffer = [];
    var currNode = this.top;
    while (currNode !== null)
    {
        buffer.push(currNode.value);
        currNode = currNode.getNext();
    }

    return buffer.join(' ');
}

function isEmpty()
{
    return this.top === null;
}

(function main()
{
    var s = new Stack();
    s.push('foo');
    print("test: " + (s.toString() != 'blah'));
    print("test: " + (s.toString() === 'foo'));
    
    s.pop();
    s.pop();
    s.pop();
    print("test: " + (s.toString() === ''));
    
   
    s = new Stack();
    s.push('foo');
    s.push('bar');
    s.push('baz');
    s.push('top');
    s.pop();
    s.pop();
    s.push('blah');
    print("test: " + (s.toString() === 'blah bar foo'));
    s.pop();
    print("test: " + (s.toString() === 'bar foo'));
    s.pop();
    print("test: " + (s.toString() === 'foo'));
    s.pop();
    s.push('foo');
    print("test: " + (s.toString() === 'foo'));
}
)();
