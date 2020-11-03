//  var person = {
//         name: "Dayat",
//         age: 33,
//         gender: "Male",
//         address: {
//             street1: "No. 36, Jln.35",
//             street2: "Perumahan Kg. Rimba Gadong",
//             Postcode: "BE3319",
//             Country: "Brunei Darussalam"
//         },
//         hobbies: ["Running", "Hiking", "Video Games"]        
//     }

//     // person = JSON.stringify(person);
//     // person = JSON.parse(person);

//     var people = [
//         {
//             name: "Peter",
//             age: 35
//         },
//         {
//             name: "Melinda",
//             age: 26
//         },
//         {
//             name: "Sarah",
//             age: 30
//         }
//     ]

//         // for(i = 0; i < people.length; i++)
//         // {
//         //     console.log(people[i].name);
//         // }

//         var output = "";
        
//         people.forEach(
//             function(element)
//             {
//                 output += "<li>" + element.name + "</li>";
//                 document.getElementById("people").innerHTML = output;
//             }
//         );

//     //console.log(people);

var xmlhttp = new XMLHttpRequest();
var url = 'https://jsonplaceholder.typicode.com/users';

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        myFunction(myArr);
    }
    else if (this.status == 403) {
        document.getElementById("name").innerHTML = "Access is Forbidden";
    }
    else if (this.status == 404)
    { 
        document.getElementById("name").innerHTML = "Data Not Found";
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(arr){ 
    
    var output = "";

    for (i = 0; i < arr.length; i++)
    {
        output +=
            "<li class='list-group-item'>ID: <a href='user_details.html?id=" + arr[i].id + "'>"
            + arr[i].id + "</a></li><li class='list-group-item'>Name: "
            + arr[i].name + "</li><li class='list-group-item'>E-Mail: "
            + arr[i].email + "</li><br />"

        document.getElementById("people").innerHTML = output;
    }

    // arr.forEach(element => {
    //     console.log(element.name)
    // });
}
