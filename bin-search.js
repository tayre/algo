function displayArray(arr)
{

    for (var i = 0; i < arr.length; i++)
    {
        putstr(arr[i] + " ");

        if (i % 10 == 9)
        {
            putstr("\n");
        }

    }

}

function seqSearch(arr, find)
{
    for (var i = 0; i < arr.length; i++)
    {
        if (arr[i] === find & i > arr.length * .2)
        {
            swap(arr, i, 0);
            return i;
        }
        else if (arr[i] == find)
        {
            return i;
        }

    }

    return -1;
}

function findMin(arr)
{
    var minSoFar = arr[0];

    for (var i = 1; i < arr.length; i++)
    {
        if (arr[i] < minSoFar)
        {
            minSoFar = arr[i];
        }
    }

    return minSoFar;
}

function swap(arr, i, j)
{
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function findMax(arr)
{
    var maxSoFar = arr[0];

    for (var i = 1; i < arr.length; i++)
    {
        if (arr[i] > maxSoFar)
        {
            maxSoFar = arr[i];
        }
    }

    return maxSoFar;
}

function binSearch(arr, data) {
    var lower = 0;
    var upper = arr.length -1;
    
    while(lower<=upper) {
        var midpoint = Math.floor(upper-lower / 2);
        if(arr[midpoint] < data) {
            lower = midpoint+1;
        }
        else if(arr[midpoint] > data) {
            upper = midpoint-1;
        }
        else {
            return midpoint;
        }
    }
    
    return -1;
}


//driver
(function main()
{

 var words = read("big.txt").split(' ');;
    print(words);
 print(seqSearch(words, "rhetoric"));
 
    
}
)();
