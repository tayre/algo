if (typeof console === 'undefined')
{
    console =
    {
        log : function (str)
        {
            print(str);
        }

    };
}

function Node(data, left, right)
{
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
}

function show()
{
    return this.data;
}

function BST()
{
    this.root = null;
    this.insert = insert;
    this.inOrder = inOrder;
    this.preOrder = preOrder;
}

/**foo*/
function insert(data)
{
    console.log('inserting: ' + data);
    var node = new Node(data, null, null);

    //bst doesn't yet have a root element set
    if (this.root === null)
    {
        this.root = node;
    }
    else
    {
        var currNode = this.root;
        while (true)
        {

            if (data < currNode.data && currNode.left === null)
            {
                currNode.left = node;
                break;
            }
            else if (data > currNode.data && currNode.right === null)
            {
                currNode.right = node;
                break;
            }
            else if (data < currNode.data && currNode.left !== null)
            {
                currNode = currNode.left;
            }
            else if (data > currNode.data && currNode.right !== null)
            {
                currNode = currNode.right;
            }

        }

    }

}

function inOrder(node)
{
    if (node !== null)
    {
        inOrder(node.left);
        console.log(node.show() + "");
        inOrder(node.right);
    }
}

function preOrder(node)
{
    if (node !== null)
    {
        console.log(node.show() + "");
        preOrder(node.left);
        preOrder(node.right);
    }
}

function findMin(node)
{

    var currNode = node;
    while (currNode.left != null)
    {

        currNode = currNode.left;

    }

    return currNode.data;

}

(function main()
{
    console.log('main');

    var nums = new BST();
    nums.insert(23);
    nums.insert(45);
    nums.insert(16);
    nums.insert(37);
    nums.insert(3);
    nums.insert(99);
    nums.insert(22);

    console.log('printing in order');

    nums.inOrder(nums.root);
    console.log('min: ' + findMin(nums.root));

}
)();
