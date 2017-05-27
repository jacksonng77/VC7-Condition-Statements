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

        commission13 = parseFloat($("#txtCommission13").val());
        commission46 = parseFloat($("#txtCommission46").val());
        commission7 = parseFloat($("#txtCommission7").val());

        totalSalary = basicSalary

        if (getRadioValue("rdoDiscipline") === "FALSE") {

            if ((itemsSold >= 1) && (itemsSold <= 3)) {
                commission = commission13;
            }
            else if ((itemsSold >= 4) && (itemsSold <= 6)) {
                commission = commission46;
            }
            else if (itemsSold >= 7) {
                commission = commission7;
            }
            else {
                commission = 0;
            }
        }
        else {
                commission = 0;
        }

        totalSalary = totalSalary + (itemsSold * commission);
        alert("Your total salary is $" + totalSalary);
    }

} )();