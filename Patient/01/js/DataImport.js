import * as p from '../../../FireBase Holds the fuctions on the objects/PatOperation.js'

var EditBtn =  document.querySelector(".donere");
var National_IDE =  document.getElementById('National_IDE');
var NameE=  document.getElementById('NameE');
var BirthE=  document.getElementById('BirthE');
var AddressE=  document.getElementById('AddressE');
var PhoneE=  document.getElementById('PhoneE');
var BloodE= document.getElementById('BloodE');
let Gender = document.getElementsByName("optradioE");

p.getAll().then((data) => {

let user =data.find(user=> user.Id.Value=== '11111111111111');
    console.log(data);
    console.log(user);






            btn_profile.onclick = function () {
            viewProfile(user)
        };




        Edite_profile.onclick = function () {
            viewprofile.style.display = "none";
            editprofile.style.display = "block";
            Mydoctors.style.display = "none";
            home.style.display = "none";
            editProfile(user);
        };



    EditBtn.onclick = function () {
        user.Id=National_IDE.value;
        user.Name =NameE.value;
        user.birth_date=BirthE.value;
        user.Address=AddressE.value;
        user.Phone=PhoneE.value;
        user.Blood_Type=BloodE.value;
    if( Gender[0].checked){
        user.Gender='Male';
    }
    else{
        user.Gender='Female';
    }



        if(!user.Id._Valid){

             National_IDE.classList.add('error');
             document.getElementById('ID_error').style.display='inline';
        }
        else{

             National_IDE.classList.remove('error');
             document.getElementById('ID_error').style.display='none';
        }


        if(!user.Name._Valid){

            NameE.classList.add('error');
             document.getElementById('Name_error').style.display='inline';
        }
        else{
            
            NameE.classList.remove('error');
             document.getElementById('Name_error').style.display='none';
        }


        if(!user.Phone._Valid){

            PhoneE.classList.add('error');
             document.getElementById('Phone_error').style.display='inline';
        }
        else{

            PhoneE.classList.remove('error');
             document.getElementById('Phone_error').style.display='none';
            
        }


        if(!user.Blood_Type._Valid){

            BloodE.classList.add('error');
             document.getElementById('Blood_error').style.display='inline';
        }
        else{

            BloodE.classList.remove('error');
             document.getElementById('Blood_error').style.display='none';
            
        }

        if(user.Id._Valid && user.Name._Valid && user.Phone._Valid && user.Blood_Type._Valid){
            p.Update(user);
            viewProfile(user);
        }
    };



});




function setProfile(user){

document.getElementById('National_Id').value=user.Id.Value;
document.getElementById('Name').value=user.Name.Value;
document.getElementById('Birth_Date').value=user.birth_date;
document.getElementById('Address').value=user.Address;
document.getElementById('Phone').value=user.Phone.Value;
document.getElementById('Blood_Type').value=user.blood_type.Value;
let x = document.getElementsByName("optradio");
    if(user.Gender=='Male'){ 
        x[0].checked=true;
        x[1].checked=false;
    }
    else{
        
        x[0].checked= false;
        x[1].checked=true;
    }
}





function editProfile(user){
National_IDE.value=user.Id.Value;
NameE.value=user.Name.Value;
BirthE.value=user.birth_date;
AddressE.value=user.Address;
PhoneE.value=user.Phone.Value;
BloodE.value=user.blood_type.Value;
    if(user.Gender=='Male'){ 
        Gender[0].checked=true;
        Gender[1].checked=false;
    }
    else{
        
        Gender[0].checked= false;
        Gender[1].checked=true;
    }
}


function viewProfile(user){
    viewprofile.style.display = "block";
    editprofile.style.display = "none";
    Mydoctors.style.display = "none";
    home.style.display = "none";
            
    setProfile(user);
}

