// return all bitstrings between 0 and n
// e.g. n = 3  then 0, 1, 10, 11, 100, 101, 110, 111
function bitstrings(n) {
    var result = [];
    for (var i = 0; i < n; i++) {
        var str = i.toString(2);

        result.push(i.toString(2));
    }

    return result;
}

//add leading zeros to elements in arr
function addPadding(arr) {
    var len = arr[arr.length - 1].length
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].length < len) {
                for (var j = 0; j <= (len - arr[i].length); j++) {
                    arr[i] = "0" + arr[i];
                }
            }
        }
}

//given 101, and arr, return arr[0], arr[2]
function mask(str, arr) {
    var result = [];
    for (var i = 0; i < str.length; i++) {
        if (str[i] == 1) {
            result.push(arr[i]);
        }
    }
    return result;
}

//return all subsets of arr
function subsets(arr) {
    var x = Math.pow(2, arr.length);
    var bs = bitstrings(x);
    addPadding(bs); //add leading padding to bitstrings
    var result = [];

    for (i = 0; i < bs.length; i++) {
        result.push(mask(bs[i], arr));

    }

    return result;
}

function subsetsSumTo(arr, total) {
    var ss = subsets(arr);

    for (var i = 0; i < ss.length; i++) {
        var element = ss[i];
        var sum = 0;
        for (var j = 0; j < element.length; j++) {
            sum += element[j]
        }
        if (sum == total)
            print(element);

    }
}

(function main() {
    var arr = [0, 1, 2, 3, 4, 5, 6,];
    subsetsSumTo(arr, 6);

})();
