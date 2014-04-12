function q1()
{
    var max = 1000;
    var sum = 0;
    for (var i = 1; i < max; i++)
    {
        if (i % 3 == 0 || i % 5 == 0)
        {
            sum += i;
        }
    }

    return sum;
}

function q2() {

    var fib = [1, 2, 3];
    var sum = 2;
    var index = 2;
    while(fib[index] <= 4000000) {
        fib.push(fib[index] + fib[index-1]);
        index++;
        if(fib[index] % 2 == 0) {
            sum += fib[index];
        }
        
    }
    print(fib);
    return sum;
    
}

(function main()
{
    var result = q2();
    print("answer : " + result);

}
)();
