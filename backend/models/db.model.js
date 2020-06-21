const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const countriesSchema = new Schema({
        country:{type:String, required: true},
        workingHours:{
            start:"",
            end: ''
        },
        orderTyoe:{
            urgent:"",
            normal:""
        },
        busniess:"",
},
);

const countries = mongoose.model('countries', countriesSchema);

module.exports = countries;

