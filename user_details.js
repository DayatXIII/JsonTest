const userId = new URLSearchParams(window.location.search).get("id");

var xmlhttp = new XMLHttpRequest();
var url = "https://jsonplaceholder.typicode.com/users/" + userId;

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        myFunction(myArr);
    }
    else if (this.status == 403) {
        document.getElementById("id").innerHTML = "Access is Forbidden";
    }
    else if (this.status == 404)
    { 
        document.getElementById("id").innerHTML = "Data Not Found";
    }
};

xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(arr)
{
    try {
        document.getElementById("id").innerHTML = arr.id;
        document.getElementById("name").innerHTML = arr.name;
        document.getElementById("username").innerHTML = arr.username;
        document.getElementById("email").innerHTML = arr.email;
        document.getElementById("street").innerHTML = arr.address.street;
        document.getElementById("suite").innerHTML = arr.address.suite;
        document.getElementById("city").innerHTML = arr.address.city;
        document.getElementById("zipcode").innerHTML = arr.address.zipcode;
        document.getElementById("phone").innerHTML = arr.phone;
        document.getElementById("website").innerHTML = arr.website;
        document.getElementById("company").innerHTML = arr.company.name;
    }
    catch (err)
    { 
        document.getElementById("id").innerHTML = err.message;
    }
}