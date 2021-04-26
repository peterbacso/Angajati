jQuery( document ).ready(function($) {
    console.log( "ready!" );
    $( '#table-body' ).on( 'click', '.delete', function () { 
        console.log('delete');
        $(this).closest('tr').remove();
    });
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
    if(validateEmail(email) == false) {
        alert("Email format not valid. Check: " + email);
        return 0;
    }
    if(checkImage(poza.value) == false) {
        alert("Image format not accepted.");
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
    readURL(poza);
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

function readURL(input) {
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
    return d.getDate() + ' ' + monthNames[d.getMonth()] + ' ' + d.getFullYear();
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function checkImage(numePoza) {
    if(numePoza.indexOf('.jpg') >= 0 || numePoza.indexOf('.jpeg') >= 0 || numePoza.indexOf('.png') >= 0) return true;
    return false;
}

// Search
function searchAngajat() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("angajati");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }       
    }
}

// Sex Filter
function filterSex() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("sexFilter");
    filter = input.value.toUpperCase();
    table = document.getElementById("angajati");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[4];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase() == filter || filter == "ALL") {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }       
    }
}

function sortTableByDate() {
    var sortAttribute = document.getElementById("sortDateButton").getAttribute("sort");
    if(sortAttribute == "up") document.getElementById("sortDateButton").setAttribute("sort", "down");
    else document.getElementById("sortDateButton").setAttribute("sort", "up");
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("angajati");
    switching = true;
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = new Date(rows[i].getElementsByTagName("td")[3].innerText);
            y = new Date(rows[i + 1].getElementsByTagName("td")[3].innerText);
            if(sortAttribute == "up") {
                if (x < y) {
                    shouldSwitch = true;
                    break;
                }
            } else if(sortAttribute == "down") {
                if (x > y) {
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
  }