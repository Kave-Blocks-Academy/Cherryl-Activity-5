function run() {

    //get inputed base and display 
    let inputBase = document.getElementById("input_base").value;
    document.getElementById("base").innerHTML = inputBase;

    //get exponent base and display 
    let inputExponent = document.getElementById("input_exponent").value;
    document.getElementById("exponent").innerHTML = inputExponent;

    //solution
    var result = 1;
    for (var i=1; i<=inputExponent; i++)
    {
        //shorten for result = inputBase * result
        result *= inputBase;

        
    }

    document.getElementById("output").innerHTML = result;


}



