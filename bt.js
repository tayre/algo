function Tree(value, left, right)
{
    this.value = value;
    this.left = left;
    this.right = right;
}

function traverse(tree, item)
{
    if(tree!=null) {
        if(tree.value == item)
            return true; 

        return traverse(tree.left, item) || traverse(tree.right, item);
    }

    return false;
}

(function main()
{
    var root = new Tree(0, new Tree(2, null, null), new Tree(3, null, new Tree(4, null, null)));
    print(traverse(root, 0) == true);
    print(traverse(root, 2) == true);
    print(traverse(root, 8) == false);
    print(traverse(root, -1) == false);
}
)();
