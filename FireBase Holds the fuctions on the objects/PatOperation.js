import Patient from '../Entities Holds the Classes/patient.js';
import db from './dbInstance.js'
var table = 'Patient';
var patients = [];
export async function getAll() {
    await db.collection(table).get().then(snapshot => {
        patients.push(snapshot.docs.map(doc => {
            return new Patient(doc.id,
                doc.data().ID,
                doc.data().NAME,
                doc.data().phone,
                doc.data().birth_date,
                doc.data().address,
                doc.data().blood_type,
                doc.data().gender,
                doc.data().password,
                doc.data().email)
        }));
        patients = patients[0];
    });
    return patients;
}



export function Add(Obj) {
    db.collection(table).add({
        ID: Obj.Id['Value'],
        NAME: Obj.Name['Value'],
        phone: Obj.Phone['Value'],
        birth_date: Obj.birth_date,
        address: Obj.Address,
        blood_type: Obj.blood_type['Value'],
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
        birth_date: Obj.birth_date,
        address: Obj.Address,
        blood_type: Obj.blood_type['Value'],
        gender: Obj.Gender,
        password: Obj.Password['Value'],
        email: Obj.Email['Value']
    });
}


export async function GetByID(id) {
    await db.collection(table).doc(id).get().then((doc) => {
        //console.log(doc);
        obj = new Patient(doc.id,
            doc.data().ID,
            doc.data().NAME,
            doc.data().phone,
            doc.data().birth_date,
            doc.data().address,
            doc.data().blood_type,
            doc.data().gender,
            doc.data().password,
            doc.data().email);
    });
    return obj;
}

export function Delete(id) {
    db.collection(table).doc(id).delete();
}


var obj = new Patient("HeW1d1brf85sjtKRxCHR",
    'Id',
    'Name',
    'Phone',
    'birth_date',
    'Address',
    'A+',
    'Gender',
    'Password',
    'Email');


//Add(obj);
// getAll().then((data) => {

//     console.log(data);
// });

//Update(obj)
//Delete(obj)

// GetByID('NE2DytHAGrGP2pUEcLMe').then(data=>{
//     console.log(data);
// });