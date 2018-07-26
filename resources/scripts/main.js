    /* 

            https://fixer.io/documentation

            1. Retrieve current base rate from API.
            2. Retrieve current target rate from API.
            3. If Statement - if the base rate > target rate, divide the _input by the target. Multiply by 100.
            4. Else, multiply the input by the target. Multiply by 100.

            5. Display secondAPIcall in #rate span.
            6. Retrieve result from if statement, and display the result in #convertedCurrency span.

            */

    var APIkey = "b8184f4f12a835ca302a3ed0f501d24b";
    var endpoint = "latest";
    var button = document.getElementById("myButton");

    button.addEventListener("click", startConversion)

    function startConversion() {
        var baseRate = document.getElementsByClassName("firstCurrency").value;
        var targetRate = document.getElementsByClassName("secondCurrency").value;

        /* Step 1 */
        
        var firstAPIcall = "http://data.fixer.io/api/" + endpoint + "?access_key=" + APIkey + "&symbols=" + baseRate;

        /* Step 2 */
        
        var secondAPIcall = "http://data.fixer.io/api/" + endpoint + "?access_key=" + APIkey + "&symbols=" + targetRate;

        var conversion = "";
        var _input = document.getElementById("toConvert").value;

        /* Step 3 */
        
        if (firstAPIcall > secondAPIcall) {
            conversion = (_input / secondAPIcall) * 100;

            /* Step 4 */
            
        } else {
            conversion = (_input * secondAPIcall) * 100;
        }

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {

                /* Step 5 */
                
                document.getElementById("rate").innerHTML = targetRate;

                /* Step 6 */
                
                document.getElementById("convertedCurrency").innerHTML = conversion;
            }
            xhttp.open("GET", "http://data.fixer.io/api/", true);
            xhttp.send();
        }
    }