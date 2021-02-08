import * as Valid from '../Validation/SharedValidation.js';
export default class Admin {




    constructor(fireID, Id, Name, Phone, Address, Gender, Password, Email) {
        this.fireID = fireID;
        this.id = { Value: Id, _Valid: true };
        this.NAME = { Value: Name, _Valid: true };
        this.phone = { Value: Phone, _Valid: true };
        this.address = Address;
        this.gender = Gender;
        this.password = { Value: Password, _Valid: true };
        this.email = { Value: Email, _Valid: true };
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
    set Address(val) {
        this.address = val;
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
    get Address() {
        return this.address;
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