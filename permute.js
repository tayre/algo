//remove the first letter
//find all perumations of remaining letters
//reinsert the letter in ever possible location within remaining permuation
//runtime is O(n!)

function permuations(word) {
    if (word.length == 1) {
        return word;
    }

    //get all permuations of length N-1
    perms = permuations(word.substr(1));

    //get the first character of word
    var character = word[0];

    var result = [];

    //for each perumation, insert character into each possible location
    for each(var perm in perms) {
        for (var i = 0; i < perm.length + 1; i++) {
            result.push(perm.substr(0, i) + character + perm.substr(i, perm.length))
        }

    }
    return result;

}

(function main() {
    print(permuations('bar'));
})();
