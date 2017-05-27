(function () {

    $(document).ready(function () {
        $("#btnCalculate").bind("click", function () {
            calculateSalary();
        });
    });


    function calculateSalary() {
        var basicSalary, itemsSold, commission, minimum, totalSalary;

        basicSalary = parseFloat($("#txtBasicSalary").val());
        itemsSold = parseFloat($("#txtItemsSold").val());
        commission = parseFloat($("#txtCommission").val());
        minimum = parseFloat($("#txtMinimum").val());

        totalSalary = basicSalary;

        if (itemsSold > minimum) {
            totalSalary = totalSalary + (itemsSold * commission);
        }

        alert("Your total salary is $" + totalSalary);
    }

} )();