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
            data.firstName = n },
        memo: 0,
        lastName: null,
        $lastName: function(n){data.memo += 1; data.lastName = n},
        email: null,
        $email: function(n){data.memo += 1; data.email = n},
        $toString: function(){return "name:" +firstName + " " + lastName +"\n" + "email:" + email;}
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
        $customerNumber: function(n){data.memo += 1; data.customerNumber = n},
        memo: 0,
        $getDisplayText: function() { return this.$toString() + "\nCustomerNumber: " + customerNumber;}

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
        $ssn: function(n){data.memo += 1; data.ssn = n},
        memo: 0,
        $getDisplayText: function() { return this.$toString() + "\nCustomerNumber: " + ssn;}

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

$(document).ready(function() {
    //When start creating button is clicked, determine whether to create customer or employee
    $("#create_person").click(function(){
        if($("#create_type").val() == "c" ){
            $("#customer").toggleClass("hide");
            if ( $("#employee").hasClass("hide") != true){
                $("#employee").toggleClass("hide");
            }

            $("#customer_typeError").text("*");

        }
        else if($("#create_type").val() == "e" ){
            $("#employee").toggleClass("hide");
            if ( $("#customer").hasClass("hide") != true){
                $("#customer").toggleClass("hide");
            }

            $("#customer_typeError").text("*");

        }
        else {
            $("#customer_typeError").text("This field is required.");
        }

    })
})










