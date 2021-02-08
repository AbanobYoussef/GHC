import Doctors from '../Entities Holds the Classes/Doctors.js'
import db from './dbInstance.js'
var table = 'Doctors';
var doctors = [];

export async function getAll() {
    await db.collection(table).get().then(snapshot => {
        doctors.push(snapshot.docs.map(doc => {
            return new Doctors(doc.id,
                doc.data().ID,
                doc.data().NAME,
                doc.data().phone,
                doc.data().specialization,
                doc.data().address,
                doc.data().degree,
                doc.data().gender,
                doc.data().password,
                doc.data().email)
        }));
        doctors = doctors[0];
    });
    return doctors;
}




export function Add(Obj) {
    db.collection(table).add({
        ID: Obj.Id['Value'],
        NAME: Obj.Name['Value'],
        phone: Obj.Phone['Value'],
        specialization: Obj.specialization['Value'],
        address: Obj.Address,
        degree: Obj.Degree,
        gender: Obj.Gender,
        password: Obj.Password['Value'],
        email: Obj.Email['Value']
    });
}

export function Update(Obj) {
    let id = Obj.FireId;
    db.collection(table).doc(id).update({
        ID: Obj.Id['Value'],
        NAME: Obj.Name['Value'],
        phone: Obj.Phone['Value'],
        specialization: Obj.specialization,
        address: Obj.Address,
        degree: Obj.Degree,
        gender: Obj.Gender,
        password: Obj.Password['Value'],
        email: Obj.Email['Value']
    });
}


export function Delete(Obj) {
    let id = Obj.FireId;
    console.log(id);
    db.collection(table).doc(id).delete();
}



var obj = new Doctors("OK82XgS8zgX9AVQHPnAk", 'Id', 'Abanob', 'Phone', 'specialization', 'Address', 'Degree', 'Gender', 'Password', 'Email');



// getAll().then((data) => {
//     console.log('Before');
//     console.log(data);
//     console.log('After');
// });
//Add(obj)
//Update(obj)
//Delete(obj);