import * as Valid from '../Validation/SharedValidation.js';
export default class Prescriptopn {


    constructor(...arg) {
        if (arguments.length != 0) {
            this.fireID = arguments[0];
            this.DOC_ID = arguments[1];
            this.PAT_DOC_ID = arguments[2];
            this.Department =arguments[3];
            this.Dignose = arguments[4];
            this.Disease = arguments[5];
            this.Medicines_List = arguments[6];
            this.patient= arguments[7];
            this.doctor =arguments[8];
             this.data=arguments[9]
        }   
        else  {
            this.fireID = "";  
            this.DOC_ID ='';
            this.PAT_DOC_ID ='' ;
            this.Department ='' ;
            this.Dignose = '';
            this.Disease ='';
            this.Medicines_List = '';
            this.patient='';
            this.doctor ='';
        }
        
        
    }

    


}