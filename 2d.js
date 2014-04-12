function Dictionary() {
    this.data = {};
    this.add = add;
    this.find = find;
    this.remove = remove;
    this.toString = toString;
    this.showAll = function () {
        print(this.toString());
    }
    
    this.count = count;
    this.clear = clear;
    
}


function clear() {
    for(var i in Object.keys(this.data)) {
        delete data[i];
    }
}

function count() {
    var count = 0;
    for(var i in this.data) {
        if(this.data.hasOwnProperty(i)) {
            count++;
        }
    }
    return count;
    
}

function add(key, value) {
    this.data[key] = value;
}

function find(key) {
    return this.data[key];
}

function remove(key) {
    delete this.data[key];
}

function toString() {
    var buffer = [];
    
    
    var keys = Object.keys(this.data).sort();
    print(keys);
    for (var i = 0; i< keys.length; i++) {
        buffer.push(keys[i] + "-->" + this.data[keys[i]]);
    }
    return buffer.join('\n');
}

(function main() {

   var pbook = new Dictionary();
    pbook.add("Mike", "123");
    pbook.add("David", "345");
    pbook.add("Cynthia", "456");
    
    pbook.add("Asdasd", "456");
    
    pbook.showAll();


})();
