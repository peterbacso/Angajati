jQuery( document ).ready(function($) {
    console.log( "ready!" );
    
    console.log(document.getElementById("angajati"));
});

function submitForm() {
    // Get Inputs
    var nume = document.getElementById("nume").value;
    var prenume = document.getElementById("prenume").value;
    var dataNasterii = document.getElementById("data-nasterii").value;
    var sex = document.getElementById("sex").value;
    var email = document.getElementById("email").value;
    var poza = document.getElementById("poza");
    // Add to Table
    var table = document.getElementById("angajati").getElementsByTagName('tbody')[0];
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    cell1.innerHTML = poza;
    cell2.innerHTML = nume;
    cell3.innerHTML = prenume;
    cell4.innerHTML = dataNasterii;
    cell5.innerHTML = sex;
    cell6.innerHTML = email;
    cell7.innerHTML = "delete";
}