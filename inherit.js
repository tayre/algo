function Ninja(){
  this.title = "ninja";
}


function Student() {
    //this.title = "student";
};


Student.prototype = new Ninja();

var s = new Student();

print(s.title);




function assert(expected, msg) {
    if(expected) {
        print(msg);
    }
}