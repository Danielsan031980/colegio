const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator')

const AsignatureSchema = new mongoose.Schema({
		nameAsignature:{
			type: String,
				 unique: true,
				 required: [true, 'Asignature name is required'],
				 minleght: [3, 'Asignature name should be bigger than 3 letters '],
				 maxlength: [30, 'Asignature name should be smaller than 30 words']	
			},	
        grade:{
            type: String,
        },
		
		schedule:{
			monday:[Boolean,Boolean,Boolean,Boolean,Boolean],
			tuesday:[Boolean,Boolean,Boolean,Boolean,Boolean],
			wednesday:[Boolean,Boolean,Boolean,Boolean,Boolean],
			thursday:[Boolean,Boolean,Boolean,Boolean,Boolean],
			friday:[Boolean,Boolean,Boolean,Boolean,Boolean]
		}
});

AsignatureSchema.plugin(uniqueValidator, {message:"El campo {PATH} debe ser único. '{VALUE}' ya existe"})
const Asignature = mongoose.model("asignature", AsignatureSchema);
module.exports = Asignature;