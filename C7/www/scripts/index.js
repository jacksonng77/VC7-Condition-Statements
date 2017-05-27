// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in cordova-simulate or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {

    function checkCost() {
        var toyPrice, budget, conduct, testScore;

        testScore = 100;
        toyPrice = 15.5;
        budget = 16;
        conduct = "naughty";

        if ((testScore === 100) || ((toyPrice <= budget) && (conduct === "good"))) {
            alert("Allowed to buy");
        }
        alert("Toy Price is $" + toyPrice + " and budget is $" + budget);
    }

    checkCost();





} )();