import * as d from '../../../FireBase Holds the fuctions on the objects/DocOperation.js'
import * as p from '../../../FireBase Holds the fuctions on the objects/PatOperation.js'
import * as pre from '../../../FireBase Holds the fuctions on the objects/preOperation.js'

var patientNumber =document.getElementById('Patientnumber');
var myTable1 =document.getElementById('myTable1');
var DOCTORSlist =document.getElementById('DOCTORSlist');
var patientCard =document.getElementById('patientCard');


d.getAll().then((data) => {
    
    console.log(data);
    getAllDocs(data)
});

pre.getAll_For_Doctor('MQxPrLvbR3uPx62p7UqD').then((data) => {

    console.log(data);
    patientNumber.innerHTML= Patientnumber(data).size;
let SET= Patientnumber(data);
    for(let pre of data )
    {
        if(SET.has(pre.PAT_DOC_ID)){
            SET.delete(pre.PAT_DOC_ID);
            getAllPatients(pre);
        }
    }

});








function Patientnumber(pres)
{
    let patients =[];
    for(let pre of pres)
    {
        patients.push(pre.PAT_DOC_ID);
    }
console.log(patients);
    let set = new Set(patients);
console.log(set);
    return set
}






                    // <tr>
                    //   <td>mmmmmm </td>
                    //   <td>Germany</td>
                    //   <td>sssss </td>
                    //   <td>Germany</td>
                    
                    //   <td>
                    //     <button type="button" class="btn btn-danger tblBtn btnDteteRow"><i
                    //         class="far fa-trash-alt"></i></button>
                    //     <button type="button" class="btn btn-primary tblBtn  btnEnterId"><i
                    //         class="far fa-eye"></i></button>

                    //   </td>
                    // </tr>









function getAllDocs(docs){

        for(let doc of docs){

            let docCard =` 
                    <div class="col-lg-4 col-sm-6">
                    <div class="card doctorsCard">
                        <img class="card-img-top doctorsCardImg" src="doc2.webp" alt="Card image cap">
                        <!-- <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div> -->

                            <div class="card-body " style="margin-top: -30px;">
                            <hr class="doctorsCardHr">`+
                            doc.NAME.Value

                            +`<hr class="doctorsCardHr">`+
                            doc.Address

                            +`<hr class="doctorsCardHr">`+
                            doc.Phone.Value

                            +`<hr class="doctorsCardHr">`+
                            doc.Email.Value
                            +`<hr class="doctorsCardHr">

                            </div>
                        </div>
                    </div>`;

                    DOCTORSlist.innerHTML+=docCard;

        }
}







function getAllPatients(doc){
            let patCard =` 
                    <div class="col-lg-4 col-sm-6">
                    <div class="card patientCard">
                        <img class="card-img-top doctorsCardImg" src="patient2.jpg" alt="Card image cap">
                        <!-- <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div> -->

                        <div class="card-body " style="margin-top: -30px;">
                        <hr class="doctorsCardHr">`+
                        doc.patient.NAME.Value

                        +`<hr class="doctorsCardHr">`+
                        doc.patient.Address

                        + `<hr class="doctorsCardHr">`+
                        doc.patient.blood_type.Value

                        +`<hr class="doctorsCardHr">`+
                        doc.patient.gender
                        +`<hr class="doctorsCardHr">

                        </div>
                    </div>
                    </div>`;

        patientCard.innerHTML+=patCard;

}







