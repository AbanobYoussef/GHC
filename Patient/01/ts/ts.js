var btn_profile = document.querySelector(".btnprofile");
var Edite_profile = document.querySelector(".Edite_profile");
var MY_DOCTORS = document.querySelector(".MY_DOCTORS");
var SITTINGS = document.querySelector(".SITTINGS");
var Mydoctors = document.querySelector(".Mydoctors");
var viewprofile = document.querySelector(".viewprofile");
var editprofile = document.querySelector(".editprofile");
var appendinfo = document.querySelector(".appendinfo");
var home = document.querySelector(".home");
var homebtn = document.querySelector(".btnhome");
var func = [
    ["0", "aaaaaaaaa", "Dr.ssssssss", "4/5/ddddddd", "vvvvvv"],
    ["1", "prescription1", "Dr.Mohamed", "4/5/2020", "covid"],
    ["2", "prescription1", "Dr.Mohamed", "4/5/2020", "covid"],
    ["3", "prescription1", "Dr.Mohamed", "4/5/2020", "covid"],
    ["4", "prescription1", "Dr.Mohamed", "4/5/2020", "covid"],
    ["5", "prescription1", "Dr.Mohamed", "4/5/2020", "covid"],
];
btn_profile.onclick = function () {
    viewprofile.style.display = "block";
    editprofile.style.display = "none";
    Mydoctors.style.display = "none";
    home.style.display = "none";
};
Edite_profile.onclick = function () {
    viewprofile.style.display = "none";
    editprofile.style.display = "block";
    Mydoctors.style.display = "none";
    home.style.display = "none";
};
MY_DOCTORS.onclick = function () {
    viewprofile.style.display = "none";
    editprofile.style.display = "none";
    Mydoctors.style.display = "contents";
    home.style.display = "none";
};
homebtn.onclick = function () {
    viewprofile.style.display = "none";
    editprofile.style.display = "none";
    Mydoctors.style.display = "none";
    home.style.display = "block";
};
function appendDaTable() {
    for (var i = 0; i < func.length; i++) {
        appendinfo.innerHTML += "\n        <hr>\n        <div class=\"row\">\n         <div class=\"col\">" + (parseInt(func[i][0]) + 1) + "</div>\n         <div class=\"col\"> " + func[i][1] + "</div>\n         <div class=\"col\">" + func[i][2] + " </div>\n         <div class=\"col\"> " + func[i][3] + "</div>\n         <div class=\"col\"> " + func[i][4] + " Name</div>\n         <div class=\"col\"> " + func[i][5] + " Mobile</div>\n         <div class=\"col\"> <button data-toggle=\"modal\" data-target=\"#myModal\" onclick=\"getid(event)\" class=\"w3-circle w3-green\" id=\"" + i + "a\">Details</button></div>\n        </div>\n        ";
    }
}
function getid(event) {
    //console.log(event.target.id)
    //console.log(event.target.id.substring(0, event.target.id.length - 1))
    var eve = parseInt(event.target.id.substring(0, event.target.id.length - 1));
    bindtabledata(eve);
}
appendDaTable();
function bindtabledata(eve) {
    var Doctor_Name = document.querySelector("#Doctor_Name");
    var Dater = document.querySelector("#Date");
    var Department = document.querySelector("#Department");
    var Disease = document.querySelector("#Disease");
    var Medicines_List = document.querySelector("#Medicines_List");
    var Diagnose = document.querySelector("#Diagnose");
    Doctor_Name.value = func[eve][0];
    Dater.value = func[eve][1];
    Department.value = func[eve][2];
    Disease.value = func[eve][3];
    Medicines_List.textContent = func[eve][4];
    Diagnose.textContent = func[eve][4];
}
var editedPersonalData = new Array();
var updatebtn = document.querySelector(".donere");
updatebtn
    .onclick = function Edit_Patient() {
    var E_P1 = document.querySelector("#National_IDedite").value;
    var E_P2 = document.querySelector("#Birthe").value;
    var E_P3 = document.querySelector("#Bloode").value;
    var E_P4 = document.querySelector("#Namee").value;
    var E_P5 = document.querySelector("#Phoneee").value;
    var E_P6 = document.querySelector("#Addressede").value;
    var E_P7 = document.getElementsByClassName("form-check-input")[2].value;
    var E_P8 = document.getElementsByClassName("form-check-input")[3].value;
    editedPersonalData[0] = E_P1;
    editedPersonalData[1] = E_P2;
    editedPersonalData[2] = E_P3;
    editedPersonalData[3] = E_P4;
    editedPersonalData[4] = E_P5;
    editedPersonalData[5] = E_P6;
    editedPersonalData[6] = E_P7;
    editedPersonalData[7] = E_P8;
    console.log(editedPersonalData);
    alert("You have been Updated");
};
function show_doctors() {
    for (var i = 0; i < 15; i++) {
        Mydoctors.innerHTML += "\n        <div class=\"card doc\" style=\"width: 18rem;\">\n        <img class=\"card-img-top\"\n            src=\"https://theshifaclinic.com/wp-content/uploads/2016/10/DR-avatar.png\"\n            alt=\"Card image cap\">\n        <div class=\"card-body\">\n            <h4>DR,........</h4>\n            <h4>Address,........</h4>\n            <h4>Phone,........</h4>\n            <div class=\"text-center\">\n                <button class=\"btn ReadMore\">Read More</button>\n            </div>\n        </div>\n    </div>\n        ";
    }
}
show_doctors();
