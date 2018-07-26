// fixer.io/documentation


// ------------------------------------------------------------ Rate ------------------------------------------------------------- //



// set endpoint and your access key

endpoint = 'latest'
access_key = 'b8184f4f12a835ca302a3ed0f501d24b';

// base rate for url
$("select#base").change(function () {
    var baseRate = $("#base option:selected").val();

    // target rate for url
    $("select#target").change(function () {
        var targetRate = $("#target option:selected").val();

        button = document.getElementById("myButton");


        // returns target rate to html
        $(button).click(function () {
            $.ajax({
                url: 'https://data.fixer.io/api/' + endpoint + '?access_key=' + access_key + '&base=' + baseRate + '&symbols=' + targetRate,
                dataType: 'jsonp',
                success: function (json) {

                    // returned target currency exchange rate
                    document.getElementById("rate").innerHTML = (JSON.stringify(json.rates));

                }
            });
        });
    });
});



// -------------------------------------------------------- Conversion ----------------------------------------------------------- //



// conversion endpoint
convert = 'convert';

// from currency
$("select#base").change(function () {
    var from = $("#base option:selected").val();

    // to currency
    $("select#target").change(function () {
        var to = $("#target option:selected").val();

        // amout of currency
        var amount = $('#toConvert').val();

        // conversion function
        $(button).click(function () {
            $("#show").show();

            // if/else statement to select correct currency symbol
            if ($('#target').val() == "GBP") {
                document.getElementById("symbol").innerHTML = ("£");
            } else if ($('#target').val() == "EUR") {
                document.getElementById("symbol").innerHTML = ("€");
            } else if ($('#target').val() == "JPY") {
                document.getElementById("symbol").innerHTML = ("¥");
            } else if ($('#target').val() == "CHF") {
                document.getElementById("symbol").innerHTML = ("Fr.");
            } else {
                document.getElementById("symbol").innerHTML = ("$");
            }


            $.ajax({
                url: 'https://data.fixer.io/api/' + convert + '?access_key=' + access_key + '&from=' + from + '&to=' + to + '&amount=' + amount,
                dataType: 'jsonp',
                success: function (json) {

                    // returned converted currency, to two decimal places
                    document.getElementById("convertedCurrency").innerHTML = (json.result).toFixed(2);

                }


            });
        });
    });
});

// -------------------------------------------------------- Formatting ----------------------------------------------------------- //