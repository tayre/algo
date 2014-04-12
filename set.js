function Set() {
    this.dataStore = [];
    this.add = add;
    this.remove = remove;
    this.size = size;
    this.union = union;
    this.intersect = intersect;
    this.contains = contains;
    this.subset = subset;
    this.diff = diff;
    this.show = show;
}

//exercise ... implement me!


function show() {
    return this.dataStore;
}

function add(item) {
    if (this.dataStore.indexOf(item) === -1) {
        this.dataStore.push(item);
        return true;
    }
    return false;
}

function union(set) {
    var result = new Set();

    for (var i = 0; i < this.dataStore.length; i++) {
        result.add(this.dataStore[i]);
    }

    for (var i = 0; i < set.length; i++) {
        result.add(this.set[i]);
    }

    return result;
}

function remove(item) {

    var index = this.dataStore.indexOf(item);

    if (index != -1) {
        this.dataStore.splice(index, 1);
        return true;
    }

    return false;

}

function contains(item) {

    return this.dataStore.indexOf(item) != -1;
}

//a,b,c
//b, d
function intersect(set) {
    var result = new Set();

    for (var i = 0; i < set.datastore.length; i++) {

        if (this.contains(set.dataStore[i])) {
            result.add(set.dataStore[i]);
        }

    }

    return result;
}

//return true if set is a subset of this
function subset(set) {

    if(set.size() > this.size() ) return false;
    
    for(var i = 0;i<set.size(); i++) {
        if(!this.contains(set.dataStore[i])) {
            return false;
        }
    }
    
    return true;

}

//return the elements that this that are not in inputset
function diff(inputSet) {
    var result = new Set();
    
    for(var i = 0; i<this.dataStore.length; i++) {
        if(!inputSet.contains(this.dataStore[i])) {
            result.add(this.dataStore[i]);
        }
    }

    return result;
}



function size() {
    return this.dataStore.length;
}

(function main() {

    var cis = new Set();
    var it = new Set();
    
    cis.add("a");
    cis.add("b");
    cis.add("d")

    
    it.add("d");
    it.add("b");
    it.add("a");
    it.add("x");
    

    print(cis.subset(it));

    
    

})();
