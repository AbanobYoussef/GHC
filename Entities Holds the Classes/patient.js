import * as Valid from '../Validation/SharedValidation.js';
export default class Patient {


    //fireID, Id, Name, Phone, birth_date, Address, blood_type, Gender, Password, Email
    constructor(...arg) {
        if (arguments.length != 0) {
            this.fireID = arguments[0];
            this.id = { Value: arguments[1], _Valid: true };
            this.NAME = { Value: arguments[2], _Valid: true };
            this.phone = { Value: arguments[3], _Valid: true };
            this.birth_date = arguments[4];
            this.address = arguments[5];
            this.blood_type = { Value: arguments[6], _Valid: true };
            this.gender = arguments[7];
            this.password = { Value: arguments[8], _Valid: true };
            this.email = { Value: arguments[9], _Valid: true };
        } else {
            this.fireID = "";
        }
    }

    //======================================set's=========================================
    set FireId(val) {
        this.fireID = val;
    }
    set Id(val) {
        this.id = { Value: val, _Valid: Valid.ValidId(val) };
    }
    set Name(val) {
        this.NAME = { Value: val, _Valid: Valid.ValidName(val) };
    }
    set Phone(val) {
        this.phone = { Value: val, _Valid: Valid.ValidPhone(val) };
    }
    set Birth_Date(val) {
        this.birth_date = val;
    }
    set Address(val) {
        this.address = val;
    }
    set Blood_Type(val) {
        this.blood_type = { Value: val, _Valid: Valid.ValidBloodType(val) };
    }
    set Gender(val) {
        this.gender = val;
    }

    set Password(val) {
        this.password = { Value: val, _Valid: Valid.ValidPassword(val) };
    }
    set Email(val) {
        this.email = { Value: val, _Valid: Valid.ValidEmail(val) };
    }

    //======================================get's=========================================
    get FireId() {
        return this.fireID;
    }
    get Id() {
        return this.id;
    }
    get Name() {
        return this.NAME;
    }
    get Phone() {
        return this.phone;
    }
    get Birth_Date() {
        return this.birth_date;
    }
    get Address() {
        return this.address;
    }
    get Blood_Type() {
        return this.blood_type;
    }
    get Gender() {
        return this.gender;
    }

    get Password() {
        return this.password;
    }
    get Email() {
        return this.email;
    }
}




//==================================Validation============================