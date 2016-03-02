/**
 * Created by Tyler on 3/2/2016.
 */
var person = function(){
    // private data
    var data = {
        firstName: null,
        $firstName: function(n){
            data.memo += 1; // This, and the object entry "memo: 0" below is an example of Memoization where a function can
                            // keep track of some prior behavior.
            data.name = n },
        memo: 0,
        lastName: null,
        $lastName: function(n){data.memo += 1; data.dob = n},
        email: null,
        $email: function(n){data.memo += 1; data.quality = n}
    };

    var F = function(){};
    f = new F();            // This is an example of the conflicted nature of JavaScript.
                            // In the words of Douglas Crockford, "JavaScript itself is not confident in its prototypal nature,
                            // so it offers an object-making syntax that is reminiscent of the classical oo languages. Few
                            // classical progrmmers found prototypal inheritance to be acceptable and classically inspired
                            // syntax obscures the language's true nature. It is the worst of both worlds.

    // public data
    f.pname = 'Person'
    f.run = function (e) {
        return data[e];
    };

    return f;
}();

var customer = function(p){
    // private data
    var data = {
        customerNumber:0,
        $cusomterNumber: function(n){data.memo += 1; data.name = n},
        memo: 0,

    };

    var F = function(){};
    F.prototype = p;        // The prototype property sets up Inheritance.
    f = new F();

    // public data
    f.cname = 'Customer'
    f.run = function (e) {
        var r = data[e];
        if(r === undefined) return F.prototype.run(e);
        else return r;
    };

    return f;
}(person);

var employee = function(p){
    // private data
    var data = {
        ssn: 0,
        $ssn: function(n){data.memo += 1; data.name = n},
        memo: 0,

    };

    var F = function(){};
    F.prototype = p;        // The prototype property sets up Inheritance.
    f = new F();

    // public data
    f.ename = 'Employee'
    f.run = function (e) {
        var r = data[e];
        if(r === undefined) return F.prototype.run(e);
        else return r;
    };

    return f;
}(person);