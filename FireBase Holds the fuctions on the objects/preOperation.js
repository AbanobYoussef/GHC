import Prescriptopn from '../Entities Holds the Classes/prescriptopn.js';
import Doctors from '../Entities Holds the Classes/Doctors.js';
import Patient from '../Entities Holds the Classes/patient.js';
import * as d from './DocOperation.js'
import * as p from './PatOperation.js'

import db from './dbInstance.js'
var table = 'Diagnoses';
var prescriptopn = [];
export async function getAll() {
    await db.collection(table).get().then(snapshot => {
        prescriptopn.push(snapshot.docs.map(doc => {
            let obj= new Prescriptopn(doc.id,
                doc.data().DOC_ID,
                doc.data().PAT_DOC_ID,
                doc.data().Department,
                doc.data().Dignose,
                doc.data().Disease,
                doc.data().Medicines_List,
                new Patient( JSON.parse(doc.data().patient)),
                 new Doctors(JSON.parse(doc.data().doctor)),
                 doc.data().data,
                 doc.data().doctor_mobile);

                return obj;
        }));
        prescriptopn = prescriptopn[0];
    });
    return prescriptopn;
}



export function Add(Obj) {
    db.collection(table).add({
        DOC_ID: Obj.DOC_ID,
        PAT_DOC_ID: Obj.PAT_DOC_ID,
        Department: Obj.Department,
        Dignose: Obj.Dignose,
        Disease: Obj.Disease,
        Medicines_List: Obj.Medicines_List,
        patient:JSON.stringify(Obj.patient),
        doctor: JSON.stringify(Obj.doctor),
        data:  Obj.data,
    });
}

export function Update(Obj) {
    let id = Obj.FireId;
    db.collection(table).doc(id).update({
        DOC_ID: Obj.DOC_ID,
        PAT_DOC_ID: Obj.PAT_DOC_ID,
        Department: Obj.Department,
        Dignose: Obj.Dignose,
        Disease: Obj.Disease,
        Medicines_List: Obj.Medicines_List,
        data:  Obj.data
    });
}



export async function GetByID(id) {
    let obj;
   await db.collection(table).doc(id).get().then((doc) => {
       console.log(doc);
      obj=    new Prescriptopn(doc.id,
                doc.data().DOC_ID,
                doc.data().PAT_DOC_ID,
                doc.data().Department,
                doc.data().Dignose,
                doc.data().Disease,
                doc.data().Medicines_List,
                new Patient( JSON.parse(doc.data().patient)),
                new Doctors(JSON.parse(doc.data().doctor)),
                doc.data().data);
    });
    return obj;
}
export function Delete(Obj) {
    let id = Obj.FireId;
    db.collection(table).doc(id).delete();
}


// var objPat = new Patient("NE2DytHAGrGP2pUEcLMe",
//     'Id',
//     'Name',
//     'Phone',
//     'birth_date',
//     'Address',
//     'A+',
//     'Gender',
//     'Password',
//     'Email');
//     console.log(objPat);
//     let objStr=JSON.stringify(objPat);
//     console.log(objStr);
//     let objJson=JSON.parse(objStr);
//     console.log(objJson);
//     var objPat2 = new Patient(objJson);
//     console.log(objPat2);



// var objDoc = new Doctors("MVi4y5cBAvOg7GEzZYc4", 'Id', 'Abanob', 'Phone', 'specialization', 'Address', 'Degree', 'Gender', 'Password', 'Email');




// let obj= new Prescriptopn('',
//                 'MQxPrLvbR3uPx62p7UqD',
//                 'NE2DytHAGrGP2pUEcLMe',
//                 'Department',
//                 'Dignose',
//                 'Disease',
//                 'Medicines_List',
//                  objPat,
//                  objDoc);

// Add(obj);


// getAll().then((data) => {

//     console.log(data);
// });

//Update(obj)
//Delete(obj)

GetByID('H0rmoKgUEDS9CYevIy5Z').then(data=>{
    console.log(data);
});