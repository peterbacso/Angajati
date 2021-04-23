jQuery( document ).ready(function($) {
    console.log( "ready!" );
    $('.delete').click(function(){
        console.log('asd');
        $(this).closest('tr').remove();
    })
});

function submitForm() {
    // Get Inputs
    var nume = document.getElementById("nume").value;
    var prenume = document.getElementById("prenume").value;
    var dataNasterii = formatDate(document.getElementById("data-nasterii").value);

    var sex = document.getElementById("sex").value;
    var email = document.getElementById("email").value;
    var poza = document.getElementById("poza");
    // Check if empty
    if(nume == '' || prenume == '' || dataNasterii == '' || sex == '' || email == '' || poza.value == '') {
        alert("Fill in all fields!");
        return 0;
    }
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
    readURL(poza, cell7);
    cell1.innerHTML = '<img id="pozaProfil" src="#">';
    cell2.innerHTML = nume;
    cell3.innerHTML = prenume;
    cell4.innerHTML = dataNasterii;
    cell5.innerHTML = sex;
    cell6.innerHTML = email;
    cell7.innerHTML = "<a class='delete'>Delete</a>";
    // Empty inputs
    document.getElementById("nume").value = '';
    document.getElementById("prenume").value = '';
    document.getElementById("data-nasterii").value = '';
    document.getElementById("sex").value = '';
    document.getElementById("email").value = '';
    document.getElementById("poza").value = null;
}

function readURL(input, imgCell) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#pozaProfil').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

function formatDate(userDate) {
    var d = new Date(userDate);
    const monthNames = ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"];
    return d.getDay() + ' ' + monthNames[d.getMonth()] + ' ' + d.getFullYear();
}