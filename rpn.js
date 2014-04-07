function Stack()
{
    this.pop = pop;
    this.push = push;
    this.length = length;
    this.toString = toString;
    this.data = [];
    this.empty = empty;

}

// flush the stack
function empty()
{
    this.data = [];
}

// pop top element
function pop()
{
    return this.data.shift();
}

// push onto top of stack
function push(item)
{
    this.data.unshift(item);
}

// return length of stack
function length()
{
    return this.data.length;
}

// return true iif stack is empty
function isEmpty()
{
    return data.length === 0;
}

// return string representation of stack
function toString()
{
    return this.data.join('|');
}

// constructor to create RPN calculator
function RPN()
{
    this.stack = new Stack();
    this.calc = calc;
}

/*
 * @param input: tokenized RPN input array. For now only assume binary operators.
 * @ return calcuation from rpn input
 */
function calc(input)
{
    for (var i = 0; i < input.length; i++)
    {
        var token = input[i];

        if (!isNaN(parseInt(token))) // if input token is a number
        {
            this.stack.push(parseInt(token))
        }
        else // input token is a binary operator
        {
            if (this.stack.length() < 2)
            {
                throw "bad input";
            }

            var op1 = this.stack.pop();
            var op2 = this.stack.pop();

            switch (token)
            {

            case '+':
                var result = op1 + op2;
                break;

            case '-':
                var result = op2 - op1;
                break;

            case '/':
                var result = op1 / op2;
                break;

            case '*':
                var result = op1 * op2;
                break;
            }

            this.stack.push(result)
        }
    }

    if (this.stack.length() != 1) //only element on stack should be result
    {
        throw "too many values on stack";
    }

    var result = parseInt(this.stack.toString());
    this.stack.empty(); //flush stack once complete.
    return result; ;

}

function test_suite()
{
    var rpn = new RPN();
    var test1 = "1 2 +";
    var test2 = "6 2 *";
    var test3 = "10 10 *";
    var test4 = "5 1 2 + 4 * + 3 -";

    print("test 1: " + (rpn.calc(test1.split(" ")) === 3 ? 'pass' : 'fail'));
    print("test 2: " + (rpn.calc(test2.split(" ")) === 12 ? 'pass' : 'fail'));
    print("test 3: " + (rpn.calc(test3.split(" ")) === 100 ? 'pass' : 'fail'));
    print("test 4: " + (rpn.calc(test4.split(" ")) === 14 ? 'pass' : 'fail'));
}

(function main()
{
    test_suite();
    var input = "";

    var rpn = new RPN();
    while (true)
    {
        putstr("input: ");
        var input = readline().split(' ');
        if (input == 'q')
        {
            print("exiting...");
            return;
        }
        print("input is..." + input);
        print("result: " + rpn.calc(input));
    }

}
)();
